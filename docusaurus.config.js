// @ts-check
// See https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js. Do not use client-side code here (browser APIs, JSX...).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SCRL Robotics Wiki',
  tagline: 'Community knowledge base for combat robotics',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://scrl-robotics.github.io',
  baseUrl: '/wiki/',

  organizationName: 'scrl-robotics',
  projectName: 'wiki',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/scrl-robotics/wiki/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'SCRL Robotics Wiki',
        logo: {
          alt: 'SCRL Robotics Wiki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://github.com/scrl-robotics/wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started/welcome',
              },
              {
                label: 'Robot Design',
                to: '/robot-design/archetypes',
              },
              {
                label: 'Electronics',
                to: '/electronics/electronics-and-wiring',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/scrl-robotics/wiki',
              },
              {
                label: 'Contribute',
                href: 'https://github.com/scrl-robotics/wiki/blob/main/CONTRIBUTING.md',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SCRL Robotics. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
