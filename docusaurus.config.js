// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tramline Docs',
  tagline: 'Release engineering for mobile apps.',
  url: 'https://docs.tramline.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tramlinehq/docs/tree/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        },
      },
      navbar: {
        title: 'Tramline Docs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/tramlinehq/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/u7VwyvBV2Z',
              },
            ],
          },
          {
            title: 'Tramline',
            items: [
              {
                label: 'Home',
                href: 'https://tramline.app',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tramlinehq',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/tramline',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tramline Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
