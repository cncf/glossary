# Localization

Now that the first version of the cloud native glossary is live,
we'd love to start localizing it into different languages. 

 - [Initiate a new localization team](#initiate-a-new-localization-team)
 - [Get involved in an existing localization team](#get-involved-in-an-existing-localization-team)

Contributions to improve following localization guides and localization policies are also welcome.

---

# Initiate a new localization team

## Basic requirements to initiate a new localization team

- Glossary project does not have a localization team for your language yet
  - check language list from [localization progress](https://github.com/cncf/glossary/projects/2) or ask it to [glossary-localizations channel in Slack](https://cloud-native.slack.com/archives/C02N2RGFXDF)
- At least three volunteers
- At least two approvers 
  - each term must be approved by two approvers
  - unanimous consent must be reached to be approved 
  - candidates need to have basic knowledge in Github (such as PR, review process, branch, ..)

## Instructions to initiate a new localization

### 1. Open an Issue to notify initiation of a new localization 

[Open an Issue](https://github.com/cncf/glossary/issues/new/choose) 
based on the `Initiate a New Localization Team` Issue-template.

Through this issue, the new localization team will
 - get a development branch for the localization works (ex: [dev-ko](https://github.com/cncf/glossary/tree/dev-ko) branch). 
 - get a permission for approving localization contents.
   ```
   The approvers of l10n team will have a push permission to this repository.
   It is to make l10n approvers manage (merge) PRs for l10n contributions in your development branch.
   Merging a PR to the `main` branch by l10n approvers is restricted.
   Even if they are possible to review a PR to the `main` branch and give an approval to the PR, they should not approve ths PR. 
   So, please do not approve if a PR is not related with your localization.
   ``` 

The localization team needs to use assigned development branch for following localization tasks.
For instance, Korean localization team is using [dev-ko](https://github.com/cncf/glossary/tree/dev-ko) branch.

### 2. Configure a new language to the site

Fulfill following tasks and open a PR. (ex: https://github.com/cncf/glossary/pull/291)



#### 2-1. Add a new language setting to site configuration

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

#### 2-2. Add a file for site strings

With `i18n/<localization>.toml`, we can setup language-specific site strings.
For a new localization, add a file `i18n/<localization>.toml` based on `i18n/en.toml`.
`other = "<English site strings>"` in `i18n/<localization>.toml` can be translated.

#### 2-3. Add a new localization directory

Translations of glossary terms should go in the appropriate language directory inside of `/content/`.

Add a subdirectory in two-letter language code to `content` (`content/<localization>`). 
For example, 
```
contents/en
contents/ko
...
```

#### 2-4. Add minimum required contents

Localize contents and add the files to `content/<localization>`.

Following list is for minimum required contents for the first PR.

 - Home: `content/en/_index.md` -> `content/<localization>/_index.md`
 - How to contribute: `content/en/contribute/_index.md` -> `content/<localization>/contribute/_index.md`
 - Style guide: `content/en/style-guide/_index.md` -> `content/<localization>/style-guide/_index.md`

#### 2-5. Check configuration works and open a PR

Contributor needs to test that the website works with the updated configuration
by running [Hugo server](https://github.com/cncf/glossary#setting-up-a-local-instance) before open a PR.

If the configuration works, you can select the new language in the local website.

![image](https://user-images.githubusercontent.com/5966944/150203331-c535a95c-c36e-4c01-85a8-5261ce6f70de.png)

Open a PR. (ex: https://github.com/cncf/glossary/pull/291)

The PR will be reviewed by [maintainers](https://github.com/cncf/glossary/blob/main/CODEOWNERS#L6).

### 3. Localize and add minimum required terms

To make a new localization to go live with the website, we requires

 - 10 translated terms

Every localization teams are free to determine a strategy to fulfill this requirement.
For instance, they can use an Issue to assign contributors to translation items and track progress. (ex: https://github.com/cncf/glossary/issues/269)

### 4. Merge the localization branch into `main` branch

After the team completes the minimum required terms for a new localization,

Open a PR to merge commits in localization branch into `main` branch. (ex: `dev-ko` to `main`)

Then the localized contents will go live with the website.

---

# Get involved in an existing localization team

This section needs to be improved.

In the meanwhile, please contact with a localization team for your language and get a guidance.

