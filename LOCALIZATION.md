# Localization

Now that the first version of the cloud native glossary is live,
we'd love to start localizing it into different languages. 

## Basic requirements for a localization team

- At least three volunteers
- At least two approvers 
  - Each term must be approved by two approvers
  - Unanimous consent must be reached to be approved 

## Instruction to initiate a new localization

### Open an Issue to notify initiation of a new localization 

[Open an Issue](https://github.com/cncf/glossary/issues/new/choose) 
baed on the `Initiate a New Localization Team` Issue-template.

Through this Issue, the new localiztion team will
 - get a permission for approving localization contents.
 - get a development branch for the localization works. (use the development branch for following localization tasks)

### Add a new language setting to site configuration

New languages need to be set up inside of `config.toml`.
Find existing `[languages]` block in `config.toml` and add a block for the new language below other language blocks.

- Example of `New language block for /config.toml`
  ```diff
  [languages]
  [languages.en]
  title = "Cloud Native Glossary"
  description = "The CNCF Cloud Native Glossary Project is intended to be used as a reference for common terms used when talking about cloud native applications."
  languageName ="English"
  # Weight used for sorting.
  weight = 1
  
  +[languages.ko]
  +title = "클라우드 네이티브(Cloud Native) 용어집"
  +description = "CNCF 클라우드 네이티브 용어집 프로젝트는 클라우드 네이티브 애플리케이션에 대한 대화를 나눌 때 공통의 용어를 참조하여 사용하도록 하는 목적을 가지고 있다."
  +languageName ="한국어(Korean)"
  +contentDir = "content/ko"
  +weight = 2
  ```

### Add a file for site strings

With `i18n/<localization>.toml`, we can setup language-specific site strings.
For a new localization, add a file `i18n/<localization>.toml` based on `i18n/en.toml`.
`other = "<English site strings>"` in `i18n/<localization>.toml` can be translated.

### Add a new localization directory

Translations of glossary terms should go in the appropriate language directory inside of `/content/`.

Add a subdirectory in two-letter language code to `content` (`content/<localization>`). 
For example, 
```
contents/en
contents/ko
...
```

### Localize and add minimum required contents

Localize contents and add the files to `content/<localization>`.

Following list is for minimum required contents to make a new localization to go live with the website.

 - Home: `content/en/_index.md`
 - How to contribute: `content/en/contribute/_index.md`
 - Style guide: `content/en/style-guide/_index.md`
 - 10 translated terms

### Merge the localization branch into `main` branch

After the team completes the minimum required contents for a new localization,
Open a PR to merge commits in localization branch into `main` branch.

Then the localized contents will go live with the website.

