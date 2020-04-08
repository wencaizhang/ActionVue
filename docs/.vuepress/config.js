const path = require('path')
module.exports = {
  base: '/ActionVue/',
  title: 'ActionVue',
  description: 'ActionVue - vue 组件库',
  head: [
    ['link', { rel: 'icon', href: "/logo.png" }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    '@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    },
  ],
  extend: '@vuepress/theme-default',
  themeConfig: {
    lastUpdated: '最后更新时间',
    smoothScroll: true,
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/docs/'},
      // {text: '开发笔记', link: '/notes/'},
      // {text: 'GitHub', link: 'https://github.com/wencaizhang/ActionVue/'},
      // {text: '交流', link: 'https://github.com/wencaizhang/ActionVue/issues'},
    ],
    sidebar: {
      '/docs/': [
        '',
        {
          title: '入门',
          collapsable: false,
          children: [
            './get-started/start',
            './get-started/custom-theme',
            './get-started/z-index-guide',
          ]
        },
        {
          title: '基础组件',
          collapsable: false,
          children: [
            './components/button',
            './components/icon',
          ]
        },
        {
          title: '布局组件',
          collapsable: false,
          children: [
            './components/grid',
            './components/layout',
          ]
        },
        {
          title: '表单组件',
          collapsable: false,
          children: [
            './components/input',
            './components/switch',
          ]
        },
        {
          title: '反馈组件',
          collapsable: false,
          children: [
            './components/toast',
            './components/message',
            './components/notification',
            './components/spin',
            './components/skeleton',
            './components/popover',
          ]
        },
        {
          title: '数据展示',
          collapsable: false,
          children: [
            './components/pager',
            './components/sticky',
            './components/swipe',
            './components/tabs',
            './components/collapse',
          ]
        },
        {
          title: '其他组件',
          collapsable: false,
          children: [
            // './components/button',
            // './components/icon',
            // './components/input',
            // './components/grid',
            // './components/pager',
            // './components/skeleton',
            // './components/sticky',
            // './components/toast',
            './components/image',
            // './components/message',
            './components/back-top',
            // './components/tabs',
            // './components/swipe',
            // './components/layout',
            // './components/switch',
            // './components/popover',
            './components/github-corner',
            // './components/spin',
            './components/transition',
            // './components/notification',
            './components/steps',
            // './components/collapse',
          ]
        },
      ],
      '/notes/': [
        {
          title: '开发笔记',
          collapsable: false,
          children: [
            // '',
            './extend-and-$mount',
            './find-comp-by-name',
            './make-icons-from-iconfont',
            './nextTick',
            './publish-on-npm',
            './sync',
            './v-model',
            './vue-plugin',
          ]
        },
      ]
    }
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
