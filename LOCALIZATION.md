# Localization

Now that the first version of the cloud native glossary is live,
we'd love to start localizing it into different languages. 

 - [Initiate a new localization team](#initiating-a-new-localization-team)
 - [Join an existing localization team](#join-an-existing-localization-team)
 - [Localization team guidelines](#localization-team-guidelines)

Contributions to improving the following localization guides and localization policies are also welcome.

---

# Initiating a new localization team

## Basic requirements to initiate a new localization team

- The Glossary project does not have a localization team for your language yet
  - check the language list from [localization progress](https://github.com/cncf/glossary/projects/2) and ask in the [glossary-localizations channel in Slack](https://cloud-native.slack.com/archives/C02N2RGFXDF). There may be a group of volunteers who haven't gotten started yet.
- At least three volunteers
- At least two approvers 
  - two approvers must approve each term
  - unanimous consent must be reached to be approved 
  - at least one volunteer must have basic GitHub knowledge and be willing to help the others get up to speed (such as PR, review process, branch, ..)

## Instructions to initiate a new localization

### 1. Join the Slack channel and say hello

If you're interested in creating a new localization team, whether you have a team or are on your own, please join the #glossary-localizations channel on the CNCF slack and say hi. If you have at least three volunteers and are ready to start, request a localization channel for your language (e.g., #glossary-localization-korean). If you are still looking for more volunteers, let everyone in the channel know. There may be someone in there looking for a team as well. 

### 2. Opening an issue to notify initiation of a new localization 

[Open an issue](https://github.com/cncf/glossary/issues/new/choose) 
and select the `Initiate a New Localization Team` template.

With this issue, new localization teams are requesting:
 - their own development branch (ex: [dev-ko](https://github.com/cncf/glossary/tree/dev-ko) branch). 
 - permission for approving localized content
   - teams will select the most suitable team members as approvers (no more than 4 per localization team)
   ```
   l10n team approvers will have push permission to this repository.
   They will manage (merge) PRs for their l10n contributions in their development branch.
   However, their ability to merge PRs to the `main` branch is restricted.
   Please note: although they can review and approve PRs to the `main` branch, they should not approve PRs that aren't related to their own localization teams.
   ``` 

Localization teams should use their assigned development branch for the following localization tasks (example of a dev branch: https://github.com/cncf/glossary/tree/dev-ko; dev-ko stands for Korean dev branch). 

### 3. Configuring a new language

Open a PR with the localization initiation following this example: https://github.com/cncf/glossary/pull/291.



#### 3-1. Adding a new language setting to site configuration

To add a new language to the site, modify [config.toml](https://github.com/cncf/glossary/blob/main/config.toml#L54) (Note: localization teams should use their assigned development branch for this).

The `[languages]` block of `config.toml` is used to set the language. For instance, `[languages.en]` stands for English and `[languages.ko]` for Korean language configuration. Go to the `[languages]` block in `config.toml` and add a new block for your language-specific configuration. For instance, the Korean localization team added its `[languages.ko]` block after the `[languages.en]` block.

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

#### 3-2. Adding a file for site strings

`i18n/<localization>.toml` sets up language-specific site strings.
For a new localization, add a file `i18n/<localization>.toml` based on `i18n/en.toml`.
`other = "<English site strings>"` in `i18n/<localization>.toml` can be translated.

#### 3-3. Adding a new localization directory

Translated Glossary terms are saved in the appropriate language directory inside `/content/`.

Create a subdirectory in `content` and name it using the appropriate two-letter language code (`content/<localization>`).
For example, 
```
contents/en
contents/ko
...
```

#### 3-4. Minimum required content

Localize content and save to `content/<localization>`.

Your first PR should include these pages: 

 - Home: `content/en/_index.md` -> `content/<localization>/_index.md`
 - How to contribute: `content/en/contribute/_index.md` -> `content/<localization>/contribute/_index.md`
 - Style guide: `content/en/style-guide/_index.md` -> `content/<localization>/style-guide/_index.md`

#### 3-5. Check configuration works and open a PR

Before opening a PR, ensure the website with the updated configuration works by running [Hugo server](https://github.com/cncf/glossary#setting-up-a-local-instance). If it does, select the new language on the local website.

![image](https://user-images.githubusercontent.com/5966944/150203331-c535a95c-c36e-4c01-85a8-5261ce6f70de.png)

Open a PR (ex: https://github.com/cncf/glossary/pull/291) and wait for it to be reviewed by the [maintainers](https://github.com/cncf/glossary/blob/main/CODEOWNERS#L6).

### 4. Localizing and adding minimum required terms

Before going live with a localized Glossary, you need at least:

 - 10 translated terms

How localization teams achieve that, is up to them. For instance, they can use issues to assign contributors to translation terms and track progress (ex: https://github.com/cncf/glossary/issues/269).

### 5. Merging the localization branch into `main` branch

After completing the minimum required terms for a new localization, open a PR to merge commits in the localization branch into the `main` branch. (ex: `dev-ko` to `main`).

Once the PR is merged, the localized content will go live on its website 🎉

---

# Join an existing localization team

To join an existing team, hop on the #glossary-localizations and #glossary-localization-[language name] channels on the CNCF Slack. Introduce yourself, let the team know you want to contribute, and the team will take it from there.

If the team seems inactive (no response after several days), reach out to @Seokho Son, @Jihoon Seo, @nate-double-u, or @Noah Ispas on the #glossary-localizations channel.  

--- 

# Localization team guidelines

Every localization team may have its own process of working on localizing terms. However, here are some guidelines that are common for all localization teams:

1. Only terms with the status `Completed` in the English version are ready to be localized.
2. All contributions related to localization have to be based on the `dev-xx` branch, and PRs need to target `dev-xx`. 
3. Localization teams need to get changes from the `main` branch in their `dev-xx` branch from time to time. Therefore a PR should be opened where the `main` branch is merged into `dev-xx`. The glossary maintainers will then choose the rebase method to complete the PR and keep the history linear. 
4. A localized term does not have to match the English version completely. Also, the localized and English versions of terms can coexist independently throughout updates. Localization teams can decide to which degree localized terms have to match their English version and how to handle updates on the English term. To learn how other teams keep up to date with changes in the English version, please refer to [this discussion on the topic](https://github.com/cncf/glossary/discussions/1125).
