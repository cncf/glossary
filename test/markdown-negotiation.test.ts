// Unit tests for the markdown-negotiation edge function. Runs the handler
// directly with a stubbed fetch and context; no Netlify runtime needed.
//
//   node --test test/markdown-negotiation.test.ts
//
// Lives outside netlify/edge-functions/ on purpose: Netlify deploys every
// file in that directory as an edge function.

import { test, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";

import handler from "../netlify/edge-functions/markdown-negotiation.ts";

const SITE = "https://glossary.cncf.io";
const MD_BODY = "# Containers\n\nA container is a running process.\n";

// Which index.md URLs exist on the "server".
const markdownPages = new Set([`${SITE}/container/index.md`, `${SITE}/ja/container/index.md`]);

const realFetch = globalThis.fetch;
let fetched: string[] = [];
let fetchedMethods: string[] = [];

beforeEach(() => {
  fetched = [];
  fetchedMethods = [];
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input instanceof Request ? input.url : input);
    const method = init?.method ?? (input instanceof Request ? input.method : "GET");
    fetched.push(url);
    fetchedMethods.push(method);
    if (markdownPages.has(url)) {
      return new Response(method === "HEAD" ? null : MD_BODY, {
        status: 200,
        headers: { "content-type": "text/markdown; charset=UTF-8", "cache-control": "public,max-age=0,must-revalidate" },
      });
    }
    return new Response("not found", { status: 404 });
  };
});

afterEach(() => {
  globalThis.fetch = realFetch;
});

const NEXT_MARKER = "__next__";
const context = {
  next: async () => new Response(NEXT_MARKER, { status: 200, headers: { "content-type": "text/html" } }),
} as unknown as import("@netlify/edge-functions").Context;

const run = (path: string, accept?: string, method = "GET") =>
  handler(new Request(SITE + path, { method, headers: accept === undefined ? {} : { accept } }), context);

test("serves index.md when Accept includes text/markdown", async () => {
  const res = await run("/container/", "text/markdown");
  assert.ok(res instanceof Response);
  assert.equal(res.status, 200);
  assert.equal(await res.text(), MD_BODY);
  assert.equal(res.headers.get("content-type"), "text/markdown; charset=utf-8");
  assert.equal(res.headers.get("vary"), "Accept");
  assert.equal(res.headers.get("x-markdown-source"), "/container/index.md");
  assert.deepEqual(fetched, [`${SITE}/container/index.md`]);
});

test("matches text/markdown anywhere in a weighted Accept list", async () => {
  const res = await run("/ja/container/", "text/html;q=0.8, text/markdown;q=0.9, */*;q=0.1");
  assert.ok(res instanceof Response);
  assert.equal(res.headers.get("content-type"), "text/markdown; charset=utf-8");
});

test("bypasses (returns undefined) without an Accept header", async () => {
  assert.equal(await run("/container/"), undefined);
  assert.deepEqual(fetched, []);
});

test("bypasses for a browser Accept header", async () => {
  const res = await run("/container/", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
  assert.equal(res, undefined);
  assert.deepEqual(fetched, []);
});

test("bypasses for file paths even when markdown is requested", async () => {
  assert.equal(await run("/container/index.md", "text/markdown"), undefined);
  assert.equal(await run("/llms.txt", "text/markdown"), undefined);
  assert.equal(await run("/css/main.css", "text/markdown"), undefined);
  assert.deepEqual(fetched, []);
});

test("bypasses the client-rendered search page in every language", async () => {
  assert.equal(await run("/search/", "text/markdown"), undefined);
  assert.equal(await run("/ja/search/", "text/markdown"), undefined);
  assert.deepEqual(fetched, []);
});

test("falls through to the normal response when no index.md exists", async () => {
  const res = await run("/tags/fundamental/", "text/markdown");
  assert.ok(res instanceof Response);
  assert.equal(await res.text(), NEXT_MARKER);
  assert.equal(res.headers.get("content-type"), "text/html");
});

test("does not treat 'text/markdownish' as a match", async () => {
  assert.equal(await run("/container/", "text/markdownish"), undefined);
});

// LOCKED: regression for #3697 review (q=0 means "not acceptable", RFC 9110 12.5.1)
test("bypasses when text/markdown is listed with q=0", async () => {
  assert.equal(await run("/container/", "text/markdown;q=0"), undefined);
  assert.equal(await run("/container/", "text/html, text/markdown; q=0.000"), undefined);
  assert.equal(await run("/container/", "text/markdown;q=nonsense"), undefined);
  assert.deepEqual(fetched, []);
});

// LOCKED: regression for #3697 review (only GET/HEAD may be answered with the Markdown sibling)
test("bypasses methods other than GET and HEAD", async () => {
  assert.equal(await run("/container/", "text/markdown", "POST"), undefined);
  assert.equal(await run("/container/", "text/markdown", "OPTIONS"), undefined);
  assert.deepEqual(fetched, []);
});

// LOCKED: regression for #3697 review (HEAD must stay HEAD)
test("forwards HEAD to the Markdown sibling and returns no body", async () => {
  const res = await run("/container/", "text/markdown", "HEAD");
  assert.ok(res instanceof Response);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("content-type"), "text/markdown; charset=utf-8");
  assert.equal(await res.text(), "");
  assert.deepEqual(fetchedMethods, ["HEAD"]);
});

// LOCKED: regression for #3697 (fail open: a failed sibling fetch must not become an error page)
test("falls through to the normal response when fetching the Markdown sibling throws", async () => {
  globalThis.fetch = async () => {
    throw new TypeError("network error");
  };
  const res = await run("/container/", "text/markdown");
  assert.ok(res instanceof Response);
  assert.equal(await res.text(), NEXT_MARKER);
});
