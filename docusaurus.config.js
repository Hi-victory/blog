const path = require('path');
const beian = '粤ICP备202101xxxx号-1';
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kyrie的小站',
  url: 'https://kyrieth.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon/kyrie.jpg',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'kyrieth',
          logo: {
            src: 'img/icon/kyrie.jpg',
          },
          items: [
            {
              to: '/docs/learning-end/learning-resources',
              position: 'right',
              label: '文档',
            },
            {to: '/docs/work-end/blog/first-blog', label: '博客', position: 'right'},
            {to: '/docs/books/book', label: '学习', position: 'right'},
            {to: '/blog', label: '工具', position: 'right'},
            {to: '/blog', label: '项目', position: 'right'},
            {
              href: 'https://github.com/facebook/docusaurus',
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
                  label: 'Tutorial',
                  to: '/docs/intro',
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
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/docusaurus',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/facebook/docusaurus',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: require('prism-react-renderer/themes/vsLight'),
          darkTheme: require('prism-react-renderer/themes/vsDark'),
          additionalLanguages: ['java', 'php', 'rust', 'toml'],
          defaultLanguage: 'javascript',
          magicComments: [
            {
              className: 'theme-code-block-highlighted-line',
              line: 'highlight-next-line',
              block: { start: 'highlight-start', end: 'highlight-end' },
            },
            {
              className: 'code-block-error-line',
              line: 'This will error',
            },
          ],
        },
        matomo: {
          matomoUrl: 'https://matomo.kyrieth.cn/',
          siteId: '1',
          phpLoader: 'matomo.php',
          jsLoader: 'matomo.js',
        },
        liveCodeBlock: {
          playgroundPosition: 'top',
        },
      }),

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/Hi-victory/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '当下的个人博客',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'kyrie',
          copyright: `Copyright © ${new Date().getFullYear()} 愧怍 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/icon/kyrie.jpg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
            // content: 'rgb(0 255 191)',
          },
        ],
      },
    ],
  ]
};

module.exports = config;
