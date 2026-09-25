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
{{- $body = replaceRE `\]\(/` (printf "](%s/" $root) $body -}}
{{- $body = replaceRE `\]\(\.\./` (printf "](%s" $parent) $body -}}
{{- $body = replaceRE `((?:src|href)=")/` (printf "${1}%s/" $root) $body -}}
{{- return $body -}}
