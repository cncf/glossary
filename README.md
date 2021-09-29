[![Netlify Status](https://api.netlify.com/api/v1/badges/ba021536-b074-49b8-8981-7a0d19882970/deploy-status)](https://app.netlify.com/sites/cncfglossary/deploys)

# Cloud Native Glossary

The [CNCF](https://www.cncf.io/) Cloud Native Glossary Project is intended to be used as a reference for common terms used when talking about cloud native applications. You can [view and download the current version here](https://github.com/cncf/glossary/blob/main/cloudnative-glossary.pdf).

## Getting Started

If you'd like to help with the glossary we'd love to have your contributions! You can primarily help in 1 of 2 ways, by looking at the current completed definitions and making edits as needed or by heading over to the [project board](https://github.com/cncf/glossary/projects/1) and grabbing an in progress item. We're in the middle of preparing the next 25 terms for the v2 release and any work you do would be extremely valuable.

Be sure to check out our [style guide](https://github.com/cncf/glossary/blob/main/style-guide.md) to see what's already completed, every entry has a bit of status metadata with it.

## Working with definitions

To make it easier to work on individual terms, we've moved them into individual files in the [definitions folder](https://github.com/cncf/glossary/tree/main/definitions). Each term falls under one of three categories: 1) technology, 2) property, and 3) concept. 

To learn how to navigate this GitHub page and submit issues and/or PRs, please refer to the [how-to guide](https://github.com/cncf/glossary/blob/main/how-to.md). Before submitting a PR, please ensure you follow the [style guide](https://github.com/cncf/glossary/blob/main/style-guide.md). 

## Acknowledgements

The Cloud Native Glossary was initiated by the CNCF Marketing Committee (Business Value Subcommittee), including contributions from Catherine Paganini, Chris Aniszczyk, Daniel Jones, Jason Morgan, Katelin Ramer and Mike Foster.

## License 

All code contributions are under the Apache 2.0 license, any documentation distributed under CC BY 4.0.

## Setting up a local instance

To improve the CNCF Glossary site itself, install a local copy with these instructions:

```
git clone https://github.com/cncf/glossary.git
cd glossary
git submodule update --init --recursive
npm install
```

You can then run the site locally using `hugo server`.
