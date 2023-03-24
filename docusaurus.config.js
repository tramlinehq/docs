// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tramline Documentation',
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

  scripts: [
    {src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'docs.tramline.app'}
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
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
          hideable: false
        },
      },
      navbar: {
        title: 'Tramline Documentation',
        logo: {
          alt: 'Logo',
          src: 'img/tramline-logo-light-mode.png',
          srcDark: 'img/tramline-logo-dark-mode.png'
        },
        items: [
          {
            href: 'https://github.com/tramlinehq/tramline',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Tramline Logo',
          src: 'img/tramline-logo-dark-mode.png',
          href: 'https://tramline.app',
        },
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tramlinehq',
              },
               {
                label: 'Discord',
                href: 'https://discord.com/invite/u7VwyvBV2Z',
              },
               {
                label: 'Newsletter',
                href: 'https://tramline.substack.com',
              },

            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                href: 'https://www.tramline.app/about',
              },
              {
                label: 'Security',
                href: 'https://github.com/tramlinehq/tramline/security/policy',
              },
              {
                label: 'Privacy Policy',
                href: 'https://www.tramline.app/privacy',
              }
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/tramline',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tramlinehq',
              },
              {
                label: 'Mastodon',
                href: 'https://fosstodon.org/@tramline',
              }
            ],
          }
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
