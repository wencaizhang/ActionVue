const path = require('path')
module.exports = {
  base: '/vue-gulu-ui',
  title: 'vue-gulu-ui',
  description: 'vue-gulu-ui - 一个个人开发的组件库',
  head: [
    ['link', { rel: 'icon', href: 'https://vuepress.vuejs.org/logo.png' }],
  ],
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: 'GitHub', link: 'https://github.com/wencaizhang/gulu/'},
      {text: '交流', link: 'https://github.com/wencaizhang/gulu/issues'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/get-started/',
        ]
      },
      {
        title: 'components 组件',
        collapsable: false,
        children: [
          '/components/skeleton',
        ]
      },
    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
