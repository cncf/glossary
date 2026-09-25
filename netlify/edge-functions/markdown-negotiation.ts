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

import type { Context } from "@netlify/edge-functions";

// Only clean page URLs (a trailing slash) can have a Markdown sibling. Files
// (anything with an extension) and the client-rendered search page do not.
const isPageURL = (pathname: string): boolean =>
  pathname.endsWith("/") && !/(^|\/)search\/$/.test(pathname);

const prefersMarkdown = (accept: string | null): boolean =>
  accept !== null && /\btext\/markdown\b/i.test(accept);

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  if (!isPageURL(url.pathname) || !prefersMarkdown(request.headers.get("accept"))) {
    return;
  }

  const markdown = await fetch(new URL(url.pathname + "index.md", url), {
    headers: { accept: "text/markdown" },
  });

  if (!markdown.ok) {
    // No Markdown sibling (taxonomy pages, redirects, 404s): fall through to
    // the normal response for this URL.
    return context.next();
  }

  const headers = new Headers(markdown.headers);
  headers.set("content-type", "text/markdown; charset=utf-8");
  headers.set("vary", "Accept");
  headers.set("x-markdown-source", url.pathname + "index.md");

  return new Response(markdown.body, { status: 200, headers });
};
