{{- /*
  Markdown output for regular pages and sections (glossary terms, contribute
  pages, and so on). Mirrors _default/content.html: title, description, body,
  then a short footer for attribution.
*/ -}}
# {{ .Title | strings.TrimSpace }}

{{ partial "llms-directive.md" . }}
{{- with .Description | strings.TrimSpace }}

{{ . }}
{{- end }}
{{- with partial "markdown-body.md" . }}

{{ . }}
{{- end }}
{{- with .Pages }}

## Pages in this section
{{ range . }}
- [{{ .Title | strings.TrimSpace }}]({{ with .OutputFormats.Get "markdown" }}{{ .Permalink }}{{ else }}{{ .Permalink }}{{ end }})
{{- end }}
{{- end }}

---

- Canonical URL: {{ .Permalink }}
{{- if not .Lastmod.IsZero }}
- Last modified {{ .Lastmod.Format (site.Params.time_format_default | default "January 2, 2006") }}
  {{- /* The commit subject is arbitrary text; quote it verbatim in a code span
         so backticks, asterisks, or angle brackets in it are not parsed as
         Markdown. Per CommonMark, the fence must be longer than any backtick
         run inside the span, so size it from the subject. */ -}}
  {{- with .GitInfo }}
    {{- $longest := 0 }}
    {{- range findRE "`+" .Subject }}{{ if gt (len .) $longest }}{{ $longest = len . }}{{ end }}{{ end }}
    {{- $fence := strings.Repeat (add $longest 1) "`" }}: {{ $fence }} {{ .Subject }} {{ $fence }} ([{{ .AbbreviatedHash }}]({{ site.Params.github_repo }}/commit/{{ .Hash }}))
  {{- end }}
{{- end }}
{{- with .File }}
- Source: {{ site.Params.github_repo }}/blob/{{ site.Params.github_branch }}/content/{{ site.Language.Lang }}/{{ .Path }}
{{- end }}
- License: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
