// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const socials = require("./socials");


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "bjtn",
  // tagline: 'Dinosaurs are cool',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/notes/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Brandon J. T. Noguera', // Usually your GitHub org/user name.
  projectName: 'notes.bjtnoguera.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Remove this line to disable docs-only mode
          routeBasePath: "/",

          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bjtn1/bjtnoguera.com/tree/main/notes',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    docs: {
      sidebar: {
        hideable: true
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Brandon J. T. Noguera',
      logo: {
        // alt: 'My Site Logo',
        src: 'none',
        href: "https://bjtnoguera.netlify.app/",
        target: "_self",
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'notes_sidebar',
          position: 'left',
          label: 'Notes',
        },
        ...socials,
      ],
    },

    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  }),
};

export default config;
