// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SendLime Developer",
  tagline: "Communications API",
  url: "https://developer.sendlime.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sendlime", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/samiulhsohan/sendlime-developer/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/samiulhsohan/sendlime-developer/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  scripts: [
    {
      src: "https://cdn.splitbee.io/sb.js",
      async: true,
    }
  ],

  plugins: [
    'docusaurus-plugin-hotjar',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SendLime",
        logo: {
          alt: "SendLime Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "overview",
            position: "left",
            label: "Docs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/SendLime/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/overview",
              },
              {
                label: "Messaging",
                to: "/docs/sms/overview",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Facebook",
                href: "https://facebook.com/getsendlime",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/getsendlime",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/sendlime",
              },
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SendLime.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
      hotjar: {
        applicationId: 2795161,
      },
      googleAnalytics: {
        trackingID: 'G-PTXRYCJ25N',
      },
    }),
};

module.exports = config;
