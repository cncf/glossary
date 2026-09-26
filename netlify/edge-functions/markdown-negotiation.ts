// Content negotiation for AI agents: serve a page's Markdown version when the
// client asks for it with `Accept: text/markdown`.
//
// Hugo publishes every content page as HTML (index.html) and Markdown
// (index.md) side by side; see the [outputs] block in config.toml. Browsers
// never send text/markdown, so this function is declared in netlify.toml with
// a header condition and only runs for requests that do. Everything else is
// served straight from the CDN, unchanged.
//
// Spec: https://agentdocsspec.com/spec/web/ (Markdown Availability, content
// negotiation).

import type { Config, Context } from "@netlify/edge-functions";

// Only clean page URLs (a trailing slash) can have a Markdown sibling. Files
// (anything with an extension) and the client-rendered search page do not.
const isPageURL = (pathname: string): boolean =>
  pathname.endsWith("/") && !/(^|\/)search\/$/.test(pathname);

// True when the Accept header lists text/markdown with a non-zero quality.
// `q=0` means "not acceptable" (RFC 9110, 12.5.1).
const prefersMarkdown = (accept: string | null): boolean =>
  accept !== null &&
  accept.split(",").some((range) => {
    const [mediaType, ...params] = range.split(";").map((part) => part.trim());
    if (mediaType.toLowerCase() !== "text/markdown") return false;
    const q = params.find((param) => /^q=/i.test(param));
    return q === undefined || Number.parseFloat(q.slice(2)) > 0;
  });

// The Markdown sibling can only stand in for a read.
const isReadMethod = (method: string): boolean => method === "GET" || method === "HEAD";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  if (
    !isReadMethod(request.method) ||
    !isPageURL(url.pathname) ||
    !prefersMarkdown(request.headers.get("accept"))
  ) {
    return;
  }

  const markdown = await fetch(new URL(url.pathname + "index.md", url), {
    method: request.method,
    headers: { accept: "text/markdown" },
  }).catch(() => undefined);

  if (!markdown?.ok) {
    // No Markdown sibling (taxonomy pages, redirects, 404s) or the fetch
    // failed: fall through to the normal response for this URL.
    return context.next();
  }

  const headers = new Headers(markdown.headers);
  headers.set("content-type", "text/markdown; charset=utf-8");
  headers.set("vary", "Accept");
  headers.set("x-markdown-source", url.pathname + "index.md");

  return new Response(markdown.body, { status: 200, headers });
};

// Routing (path and Accept condition) lives in netlify.toml; Netlify merges it
// with this. Fail open: if the function itself errors, serve the page as usual
// rather than Netlify's generic error page.
export const config: Config = { onError: "bypass" };
