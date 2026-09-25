{{/*

  Markdown-output variant of sign-language-section: links to the video
  instead of embedding the player.

  Usage: {{% sign-language-section VIDEO_ID %}}

  */ -}}

{{ $videoID := .Get 0 -}}
{{ if not $videoID -}}
  {{ $page := (and .Page.File .Page.File.Path) | default .Page.Title -}}
  {{ warnf "%s: Shortcode 'sign-language-section' requires a video ID as argument" $page -}}
{{ end -}}

## {{ i18n "sign_language_header" }}

{{ with $videoID }}Video: <https://www.youtube.com/watch?v={{ . }}>

{{ end -}}
{{ i18n "sign_language_info" }}
