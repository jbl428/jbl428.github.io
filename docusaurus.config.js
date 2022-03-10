const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Jake Son Blog",
    tagline: "The blog of Jake Son",
    url: "https://jbl428.github.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "jbl428",
    projectName: "jbl428.github.io",
    trailingSlash: true,
    i18n: {
      defaultLocale: "ko",
      locales: ["ko"],
    },

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: false,
          blog: {
            blogTitle: "Jake Son Blog",
            blogDescription: "The blog of Jake Son",
            routeBasePath: "/",
            showReadingTime: true,
            editUrl: "https://github.com/jbl428/jbl428.github.io/edit/main/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Jake Son Blog",
          logo: {
            alt: "Jake Son Blog",
            src: "img/gopher.svg",
          },
          items: [
            { to: "/archive", label: "Archive", position: "left" },
            {
              href: "https://github.com/jbl428",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          copyright: `Copyright © ${new Date().getFullYear()} Jake Son. Built with Docusaurus.`,
        },
        algolia: {
          appId: "WGKI0UBE1C",
          apiKey: "50f95121a2872d6735823875be0f12a8",
          indexName: "jbl428",
          contextualSearch: true,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["haskell", "kotlin"],
        },
      }),
  }
);
