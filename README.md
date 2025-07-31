# Tramline Documentation
[![GitHub](https://img.shields.io/github/license/tramlinehq/docs)](/LICENSE.md)
[![Docusaurus](https://img.shields.io/badge/docusaurus-3.8.1-green)](https://docusaurus.io)

This documentation website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server (on port 3001) and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Search Index

We use Algolia to power search. This is done using a Docusaurus plugin. Changelogs are explicitly excluded from the index so as to not bloat the search experience with potentially conflicting information.

### Writing Changelogs

Our changelogs at [docs.tramline.app/changelog](https://docs.tramline.app/changelog) are powered by a [custom Docusaurus plugin](https://github.com/facebook/docusaurus/tree/main/website/src/plugins/changelog). While most edge cases are handled automatically, here are some important points to remember when writing changelogs:

#### Version Numbers
- Ignore version numbers in titles - the parser only reads dates in parentheses
- We increment patch versions only to satisfy the parser

#### Structure
- Non-highlight improvements and fixes must use `<details>` tags
- Always include a `<summary>` tag to avoid the default "Details" text
- End each changelog with the `<endcommiters/>` tag
- The `### Committers` section populates author icons but is removed from the final output

#### Images
- Image paths are relative to `$ROOT/changelog/*.md`
- Example: When in `$ROOT/changelog/foo.md`, reference images from there

#### Troubleshooting
- If the output looks incorrect, simply delete `$ROOT/changelog`
- The directory will automatically regenerate from `CHANGELOG.md`
