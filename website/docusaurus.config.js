const users = require('./showcase.json');
const versions = require('./versions.json');

const lastVersion = versions[0];
const copyright = `MHCAT © ${new Date().getFullYear()}`;

const commonDocsOptions = {
  breadcrumbs: false,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  editUrl:
    'https://github.com/facebook/react-native-website/blob/master/website/',
  remarkPlugins: [require('@react-native-website/remark-snackplayer')],
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MHCAT',
  tagline: '以最快的速度完成專屬於你的Discord伺服器',
  organizationName: 'MHCAT',
  projectName: 'MHCAT-DOC',
  url: 'https://mhcat.xyz',
  baseUrl: '/',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  trailingSlash: false, // because trailing slashes can break some existing relative links
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    {
      src: 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd8ryO5qrZo8Exadq9qmt1wtm4_2FdZGEAKHDFEt_2BBlwwM4.js',
      defer: true,
    },
    {src: 'https://snack.expo.dev/embed.js', defer: true},
  ],
  favicon: 'img/favicon.ico',
  titleDelimiter: '·',
  customFields: {
    users,
    facebookAppId: '1677033832619985',
  },
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw'],
  },
  onBrokenLinks: 'throw',
  webpack: {
    jsLoader: isServer => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editCurrentVersion: true,
          onlyIncludeVersions:
            process.env.PREVIEW_DEPLOY === 'true'
              ? ['current', ...versions.slice(0, 2)]
              : undefined,
          versions: {
            [lastVersion]: {
              badge: false, // Do not show version badge for last RN version
            },
          },
          ...commonDocsOptions,
        },
        blog: {
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
          feedOptions: {
            type: 'all',
            copyright,
          },
        },
        theme: {
          customCss: [
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/index.scss'),
            require.resolve('./src/css/showcase.scss'),
            require.resolve('./src/css/versions.scss'),
          ],
        },
        googleAnalytics: {
          trackingID: 'UA-41298772-2',
        },
        gtag: {
          trackingID: 'UA-41298772-2',
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'architecture',
        path: 'architecture',
        routeBasePath: '/architecture',
        sidebarPath: require.resolve('./sidebarsArchitecture.json'),
        ...commonDocsOptions,
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'contributing',
        path: 'contributing',
        routeBasePath: '/contributing',
        sidebarPath: require.resolve('./sidebarsContributing.json'),
        ...commonDocsOptions,
      }),
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#20232a',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#20232a',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/pwa/manifest-icon-512.png',
            color: '#06bcee',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#20232a',
          },
        ],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /*announcementBar: {
        id: 'support_ukraine',
        content:
          '', 
        backgroundColor: '#20232a',
        textColor: '#fff',
        isCloseable: false,
      },*/
      prism: {
        defaultLanguage: 'jsx', 
        theme: require('./core/PrismTheme'),
        additionalLanguages: [
          'java',
          'kotlin',
          'objectivec',
          'swift',
          'groovy',
          'ruby',
          'flow',
        ],
      },
      navbar: {
        title: 'MHCAT',
        logo: {
          src: 'img/header_logo.svg',
        },
        style: 'dark',
        items: [
          {
            label: '開始使用',
            type: 'doc',
            docId: 'getting_started',
            position: 'right',
          },
          {
            label: '常見問題',
            type: 'doc',
            docId: 'faq',
            position: 'right',
          },
          {
            label: '邀請我',
            href: 'https://dsc.gg/mhcat',
            position: 'right',
          },
          {
            label: '前往支援伺服器',
            href: 'https://dsc.gg/mhcatsever',
            position: 'right',
          },
        ],
      },
      image: 'img/logo-og.png',
      footer: {
        style: 'dark',
        links: [
          {
            title: '連結',
            items: [
              {
                label: 'MHCAT首頁',
                href: 'https://mhcat.xyz',
              },
              {
                label: '邀請我',
                href: 'https://dsc.gg/mhcat',
              },{
                label: '支援伺服器',
                href: 'https://dsc.gg/mhcatsever',
              },
            ],
          },
          {
            title: '文檔',
            items: [
              {
                label: '開始使用',
                to: 'docs/getting_started',
              },
              {
                label: '常見問題',
                to: 'docs/faq',
              },
              {
                label: '教學',
                to: 'docs/getting_started',
              }
            ],
          },
          {
            title: '為我投票',
            items: [
              {
                label: 'Discord tw',
                href: 'https://discordservers.tw/bots/964185876559196181',
              },
              {
                label: 'top.gg',
                href: 'https://top.gg/bot/964185876559196181',
              },
            ],
          },
          {
            title: '相關連結',
            items: [
              {
                label: '隱私權政策',
                href: 'https://twitter.com/reactnative',
              },
              {
                label: '服務條款',
                href: 'https://github.com/facebook/react-native',
              },
            ],
          },
        ],
        copyright,
      },
      algolia: {
        appId: '8TDSE0OHGQ',
        apiKey: '83cd239c72f9f8b0ed270a04b1185288',
        indexName: 'react-native-v2',
        contextualSearch: true,
      },
      metadata: [
        {
          property: 'og:image',
          content: 'https://reactnative.dev/img/logo-og.png',
        },
        {name: 'twitter:card', content: 'summary_large_image'},
        {
          name: 'twitter:image',
          content: 'https://reactnative.dev/img/logo-og.png',
        },
        {name: 'twitter:site', content: '@reactnative'},
      ],
    }),
};
