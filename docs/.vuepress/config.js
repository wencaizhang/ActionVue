const path = require('path')
module.exports = {
  base: '/actionvue/',
  title: 'ActionVue',
  description: 'ActionVue - vue 组件库',
  head: [
    ['link', { rel: 'icon', href: "./logo.png" }],
  ],
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: 'GitHub', link: 'https://github.com/wencaizhang/actionvue/'},
      {text: '交流', link: 'https://github.com/wencaizhang/actionvue/issues'},
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
          '/components/button',
          '/components/grid',
          '/components/pager',
          '/components/skeleton',
          '/components/skicky',
          '/components/toast',
        ]
      },
    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}


