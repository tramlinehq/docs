# Tramline Documentation

[![GitHub](https://img.shields.io/github/license/tramlinehq/docs)](/LICENSE.md)

This documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Changelog Gotchas

Changelogs at https://docs.tramline.app/changelog are populated from a [custom plugin](https://github.com/facebook/docusaurus/blob/da85e227784960d1ad099483e632f8fd548a0907/website/src/plugins/changelog/index.js#L120) sourced from docusaurus's own website. The plugin is pretty hacky so there are a few gotchas to keep in mind. 

Most of these are taken care of, but knowing how it works can come in handy later.

- In the titles, ignore the version, it doesn’t read it currently and that support is removed, we just increment the patch version to keep the parser happy. It only understands the dates inside the parens.
- The improvements and fixes for each changelog (the non-highlights) go under a `<details>` tag like https://linear.app/changelog but you must specify a `<summary>` also, otherwise the title will just show `Details`.
- The `### Committers` section is what populates the authors+icons on the top. But we don't show the committers themselves in text, so there’s code to remove that section. But to make that work, there's a made-up tag called `<endcommiters/>` that you must terminate the changelog section with.
- The images are sourced a bit awkwardly, assume the path of the images to be relative from the output directory which is `$ROOT/changelog/*.md` rather than `$ROOT/changelog.md`. In other words, assume you are inside `$ROOT/changelog/foo.md` and then source the image.
- If anything seems weird just bust `$ROOT/changelog` it can always be regen’d from `CHANGELOG.md`
