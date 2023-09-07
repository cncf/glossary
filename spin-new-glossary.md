# Creating your own glossary

You are welcome to use the code in this repository to spin up your own glossary. Follow these instructions for modifying the code to fit your use-case.

## Get the code

Copy [the glossary code](https://github.com/cncf/glossary/archive/refs/heads/main.zip) into your own repo. 

The Glossary site uses the [the docsy Hugo theme](https://www.docsy.dev/). Add the theme code as a submodule of your repo:
```
rm -rf themes/docsy
git submodule add https://github.com/google/docsy.git themes/docsy
```

Switch the docsy repo to the same changeset used in the CNCF Glossary if you want to keep the UI consistent:
```
cd themes/docsy/
git checkout 170cdd9
```

Create a .gitignore with these lines:
```
public/
resources/
node_modules/
```

Complete your local dev setup using [these instructions](https://github.com/cncf/glossary#setting-up-a-local-instance). You should now have a local working copy of the Cloud Native Glossary site.

## Design

Edit `config.toml` to set title, Google Analytics, languages, copyright, social image, social links, and various other settings.

Replace favicons in the `static/favicons` directory with your own.

Replace `assets/icons/logo.svg` with your own logo.

Edit scss variables in `assets/scss/_variables_projects.scss` to match your brand.

Edit various static copy in the `layouts` folder as needed.

## Content

Replace all content in the `content/en` folder with your own glossary terms. Create a language folder for each of the translation languages you will support. Note that terms will only be listed on the site when `status: Completed` in the header of the term file.

## Feedback buttons configuration

You can configure the feedback buttons at the bottom of each page to post to your Google Analytics account. See [the instructions here](https://www.docsy.dev/docs/adding-content/feedback/#user-feedback).

## Netlify configuration

To deploy your site to Netlify, follow [the instructions for the Docsy theme here](https://www.docsy.dev/docs/deployment/#deployment-with-netlify).