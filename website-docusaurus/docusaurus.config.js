module.exports = {
  title: 'Online experiments',
  tagline: 'A curated doc site for online testing',
  url: 'https://lpc-cnrs-amu.github.io',
  baseUrl: '/', // use "/online-xp-docs/" on github, and "/" on ILCB
  favicon: 'img/favicon.ico',
  organizationName: 'lpc-cnrs-amu', // Usually your GitHub org/user name.
  projectName: 'online-xp-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Online experiments',
      logo: {
        alt: 'Online experiments Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/lpc-cnrs-amu/online-xp-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/docusaurus/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/docusaurus/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          //routeBasePath: '', // TODO : should be empty as the docs says
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/lpc-cnrs-amu/online-xp-docs/edit/gh-pages/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
