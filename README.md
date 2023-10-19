[![Netlify Status](https://api.netlify.com/api/v1/badges/ba021536-b074-49b8-8981-7a0d19882970/deploy-status)](https://app.netlify.com/sites/cncfglossary/deploys)

# Cloud Native Glossary

The [CNCF](https://www.cncf.io/) Cloud Native Glossary Project is hosted at [https://glossary.cncf.io/](https://glossary.cncf.io/) and is intended to be used as a reference for common terms when talking about cloud native applications. You can [view and download the PDF version here](https://github.com/cncf/glossary/blob/main/cloudnative-glossary.pdf).

You are welcome to use this code for your own glossary project. Here are [instructions for creating your own glossary](spin-new-glossary.md).

## Getting started

If you'd like to help with the glossary we'd love to have your contributions! Please see [How to Contribute](https://glossary.cncf.io/contribute).

## Acknowledgements

The Cloud Native Glossary was initiated by the CNCF Marketing Committee
(Business Value Subcommittee) and includes contributions from 
[Catherine Paganini](https://www.linkedin.com/in/catherinepaganini/en/), 
[Chris Aniszczyk](https://www.linkedin.com/in/caniszczyk/), 
[Daniel Jones](https://www.linkedin.com/in/danieljoneseb/?originalSubdomain=uk), 
[Jason Morgan](https://www.linkedin.com/in/jasonmorgan2/), 
[Katelin Ramer](https://www.linkedin.com/in/katelinramer/), 
[Mike Foster](https://www.linkedin.com/in/mfosterche/?originalSubdomain=ca), 
and many more contributors. 
For a complete contributor list, please refer to [this GitHub page](https://github.com/cncf/glossary/graphs/contributors).

The Glossary is maintained by 
[Seokho Son](https://www.linkedin.com/in/seokho-son/),
[Noah Ispas](https://www.linkedin.com/in/noah-ispas-0665b42a/), 
[Jihoon Seo](https://www.linkedin.com/in/jihoon-seo/),
[Nate W.](https://www.linkedin.com/in/nate-double-u/),
and [Jorge Castro](https://www.linkedin.com/in/jorge-castro2112/).

[Catherine Paganini](https://www.linkedin.com/in/catherinepaganini/en/),
and [Jason Morgan](https://www.linkedin.com/in/jasonmorgan2/)
are Emeritus Maintainers, and we are deeply grateful
for their invaluable contributions over the years.

## License

All code contributions are under the Apache 2.0 license. Documentation is distributed under CC BY 4.0.

## Setting up a local instance

To improve the Cloud Native Glossary site itself, install a local copy with these instructions. Note you must have [npm](https://www.npmjs.com/) and [Hugo](https://gohugo.io/) installed.

```
git clone https://github.com/cncf/glossary.git
cd glossary
git submodule update --init --recursive
npm install
```

You can then run the site using `npm run serve` (select "[Hugo]").

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?repo=cncf/glossary)
