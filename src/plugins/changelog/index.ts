/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'path';
import fs from 'fs-extra';
import pluginContentBlog from '@docusaurus/plugin-content-blog';
import {
  aliasedSitePath,
  docuHash,
  normalizeUrl,
} from '@docusaurus/utils';
import {createBlogFiles, toChangelogEntries} from './utils';

export {validateOptions} from '@docusaurus/plugin-content-blog';

async function loadChangelogEntries(changelogPath: string) {
  const fileContent = await fs.readFile(changelogPath, 'utf-8');
  return toChangelogEntries([fileContent]);
}

const ChangelogPlugin: typeof pluginContentBlog =
  async function ChangelogPlugin(context, options) {
    const generateDir = path.join(context.siteDir, 'changelog/source');
    const blogPlugin = await pluginContentBlog(context, {
      ...options,
      path: generateDir,
      id: 'changelog',
      blogListComponent: '@theme/ChangelogList',
      blogPostComponent: '@theme/ChangelogPage',
    });
    const changelogPath = path.join(__dirname, '../../../CHANGELOG.md');

    return {
      ...blogPlugin,
      name: 'changelog-plugin',

      async loadContent() {
        const changelogEntries = await loadChangelogEntries(changelogPath);

        // We have to create intermediate files here
        // Unfortunately Docusaurus doesn't have yet any concept of virtual file
        await createBlogFiles(generateDir, changelogEntries);

        // Read the files we actually just wrote
        const content = (await blogPlugin.loadContent?.())!;

        content.blogPosts.forEach((post, index) => {
          const pageIndex = Math.floor(
            index / (options.postsPerPage as number),
          );
          // @ts-expect-error: TODO Docusaurus use interface declaration merging
          post.metadata.listPageLink = normalizeUrl([
            context.baseUrl,
            options.routeBasePath,
            pageIndex === 0 ? '/' : `/page/${pageIndex + 1}`,
          ]);
        });
        return content;
      },

      configureWebpack(...args) {
        const config = blogPlugin.configureWebpack?.(...args);
        if (!config) return {};
        
        const pluginDataDirRoot = path.join(
          context.generatedFilesDir,
          'changelog-plugin',
          'default',
        );
        
        // Redirect the metadata path to our folder
        try {
          // @ts-expect-error: unsafe but works
          const mdxLoader = config.module.rules[0].use[0];
          mdxLoader.options.metadataPath = (mdxPath: string) => {
            // Note that metadataPath must be the same/in-sync as
            // the path from createData for each MDX.
            const aliasedPath = aliasedSitePath(mdxPath, context.siteDir);
            return path.join(pluginDataDirRoot, `${docuHash(aliasedPath)}.json`);
          };
        } catch (error) {
          // If the structure is different, fall back to the original approach
          console.warn('Could not configure MDX loader metadata path:', (error as Error).message);
        }
        
        return config;
      },

      getThemePath() {
        return './theme';
      },

      getPathsToWatch() {
        return [changelogPath];
      },
    };
  };

export default ChangelogPlugin;