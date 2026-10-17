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

// RFC 9110 12.4.2: qvalue = ( "0" [ "." 0*3DIGIT ] ) / ( "1" [ "." 0*3("0") ] )
const QVALUE = /^(?:0(?:\.\d{0,3})?|1(?:\.0{0,3})?)$/;

// quality() and prefersMarkdown() come from @jihoon-seo's review of #3697:
// https://github.com/cncf/glossary/pull/3697#discussion_r4225549340
//
// Quality the Accept header gives a media type: 0 when it is not listed, or
// listed with q=0 or a malformed qvalue (RFC 9110, 12.5.1).
const quality = (accept: string, type: string): number =>
  Math.max(
    0,
    ...accept.split(",").map((range) => {
      const [mediaType, ...params] = range.split(";").map((part) => part.trim());
      if (mediaType.toLowerCase() !== type) return 0;
      const q = params.find((param) => /^q=/i.test(param));
      const value = q === undefined ? "1" : q.slice(2);
      return QVALUE.test(value) ? Number(value) : 0;
    }),
  );

// True when the client accepts text/markdown and does not rank an explicitly
// listed text/html above it (wildcards such as */* are not considered).
const prefersMarkdown = (accept: string | null): boolean => {
  if (accept === null) return false;
  const markdown = quality(accept, "text/markdown");
  return markdown > 0 && markdown >= quality(accept, "text/html");
};

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

  // Mutate a copy of the request URL rather than resolving a string: a
  // pathname starting with "//" would otherwise parse as a scheme-relative
  // URL and send the fetch to another origin.
  const sibling = new URL(url);
  sibling.pathname = url.pathname + "index.md";

  const markdown = await fetch(sibling, {
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
  headers.set("x-markdown-source", sibling.pathname);

  return new Response(markdown.body, { status: 200, headers });
};

// Routing (path and Accept condition) lives in netlify.toml; Netlify merges it
// with this. Fail open: if the function itself errors, serve the page as usual
// rather than Netlify's generic error page.
export const config: Config = { onError: "bypass" };
