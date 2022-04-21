module.exports = {
  title: 'Sedna',
  tagline: '基于 Leancloud 的自动化签到工具',
  url: 'https://sedna.virts.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'PriateXYF', // Usually your GitHub org/user name.
  projectName: 'Sedna', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sedna',
      logo: {
        alt: 'Sedna',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/introduction/readme',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {to: 'blog', label: '博客', position: 'left'},
        {to: 'changelog', label: '更新日志', position: 'left'},
        {
          href: 'https://github.com/PriateXYF/Sedna',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '入门',
              to: 'docs/doc1',
            },
            {
              label: '浏览器拓展',
              to: 'docs/doc2',
            },
            {
              label: '云端模板',
              to: 'docs/doc2',
            },{
              label: '更新日志',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: '项目',
          items: [
            {
              label: 'Sedna',
              href: 'https://github.com/PriateXYF/Sedna',
            },
            {
              label: 'Sedna-Extension',
              href: 'https://github.com/PriateXYF/Sedna-Extension',
            },
            {
              label: 'Sedna-Docs',
              href: 'https://github.com/PriateXYF/sedna.virts.app',
            },
          ],
        },
        {
          title: '我的其他项目',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sedna, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
