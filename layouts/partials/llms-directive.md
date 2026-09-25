{{- /*
  Agent-facing pointer placed at the top of every Markdown page. Emitted only
  when the site publishes an llms.txt index (LLMS output on the home page).
  Uses absolute URLs: served Markdown is copied and cached without its origin.
*/ -}}
{{- with site.Home.OutputFormats.Get "LLMS" -}}
> For AI agents: the complete glossary index is at [llms.txt]({{ .Permalink }}).
> Markdown versions of every page are available by appending `index.md` to the page URL.
{{- end -}}
