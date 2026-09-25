{{- /*
  Markdown output for the home page. Mirrors home.html: the page content
  carries its own H1, so no title is added here.
*/ -}}
{{ partial "llms-directive.md" . }}

{{ partial "markdown-body.md" . }}
