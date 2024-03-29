const { themes } = require("prism-react-renderer");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').Config} */
(
  module.exports = {
    title: "Jake Son Blog",
    tagline: "The blog of Jake Son",
    url: "https://jbl428.github.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",
    favicon: "img/favicon.ico",
    organizationName: "jbl428",
    projectName: "jbl428.github.io",
    trailingSlash: false,
    i18n: {
      defaultLocale: "ko",
      locales: ["ko"],
    },
    markdown: {
      mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],

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
            src: "img/gopher.png",
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
          theme: themes.github,
          darkTheme: themes.dracula,
          additionalLanguages: ["haskell", "kotlin", "toml", "docker"],
        },
      }),
  }
);
