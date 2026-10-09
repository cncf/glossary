{{- /*
  Page body for Markdown output. Renders shortcodes for the markdown format,
  then makes root-relative and parent-relative links absolute: served Markdown
  is copied and cached without its origin, so relative links stop resolving.
  Returns the body as a string.
*/ -}}
{{- $u := urls.Parse site.Home.Permalink -}}
{{- $root := printf "%s://%s" $u.Scheme $u.Host -}}
{{- $parent := printf "%s%s/" $root (strings.TrimSuffix "/" (path.Dir (path.Dir .RelPermalink))) -}}
{{- $body := .RenderShortcodes | strings.TrimSpace -}}
{{- /* .RenderShortcodes skips render hooks, so resolve root-relative page
       links the way Hugo's embedded link render hook does for HTML:
       /microservices/ on a /hi/ page becomes /hi/microservices/ when that
       translation exists. */ -}}
{{- range findRESubmatch `\]\((/[^)\s#?]*)([#?][^)\s]*)?\)` $body -}}
  {{- $dest := index . 1 -}}
  {{- $rest := index . 2 -}}
  {{- with $.GetPage $dest -}}
    {{- if ne .RelPermalink $dest -}}
      {{- $body = replace $body (printf "](%s%s)" $dest $rest) (printf "](%s%s)" .RelPermalink $rest) -}}
    {{- end -}}
  {{- end -}}
{{- end -}}
{{- /* Goldmark turns `## Title {#id}` into <h2 id="id">; .RenderShortcodes
       leaves the attribute as text, which CommonMark readers show literally
       and cannot link to. Put a portable anchor before the heading instead
       so in-page links to the id keep working. */ -}}
{{- $body = replaceRE `(?m)^(#{1,6} .*?)[ \t]*\{#([A-Za-z0-9_-]+)\}[ \t]*$` "<a id=\"${2}\"></a>\n\n${1}" $body -}}
{{- $body = replaceRE `\]\(/` (printf "](%s/" $root) $body -}}
{{- $body = replaceRE `\]\(\.\./` (printf "](%s" $parent) $body -}}
{{- $body = replaceRE `((?:src|href)=")/` (printf "${1}%s/" $root) $body -}}
{{- return $body -}}
