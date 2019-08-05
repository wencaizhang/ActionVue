
<div align="center">
  <img src="docs/.vuepress/public/logo.png" alt="ActionVue" width="200">
</div>

<p align="center">
  <a href="https://coolfe.fun/ActionVue/" rel="noopener" target="_blank">
    <h1 align="center">ActionVue</h1>
  </a>
</p>

<div align="center">
  <p style="margin-bottom: 10px;">
    基于 <a href="https://cn.vuejs.org/">Vue.js</a> 开发的一套组件库. :stuck_out_tongue_winking_eye:
  </p>

  [![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/wencaizhang/ActionVue/blob/master/LICENSE)
</div>

## Document

请查看 <a href="https://coolfe.fun/ActionVue/" rel="noopener" target="_blank">文档</a>

## Installation

Install the package in your project directory with:

```bash
# with npm
npm install actionvue --save

# or yarn
yarn add actionvue
```

## Usage

Here is a quick example to get you started.

```js
// src/main.js
import Vue from 'vue';
import actionvue from 'actionvue';
import App from './App'

Vue.use(actionvue);

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
```

## Components

+ [x] Button
+ [x] Input
+ [x] icon
+ [x] Toast
+ [x] Message
+ [ ] Notification
+ [x] Pager 分页器
+ [x] Grid 网格系统
+ [x] Skeleton 骨架屏
+ [x] Sticky - 粘滞 / 吸顶组件
+ [ ] Nav - 导航
+ [ ] Carousel 轮播组件
+ [ ] Uploader 文件上传
+ [ ] Tab
+ [ ] Table
+ [ ] Popover
+ [ ] Layout 默认布局
+ [ ] 手风琴
+ [ ] 省市区级联组件
+ [ ] Animation 动画
+ [ ] Datepicker
+ [ ] Scroll 滚动组件
+ [ ] Img Load 图片加载
+ [ ] 支付密码框

## Why Do This

本组件库由个人开发，旨在技术研究，探索如何搭建一个基于 Vue 的组件库，不推荐在生产环境使用。

生产环境中更加推荐市面上现有的成熟的中后台组件库，比如 [Element](https://github.com/ElemeFE/element) /[iview](https://github.com/iview/iview) / [Vant](https://github.com/youzan/vant) 等等，在此不一一列举。

同时我也会努力早日将本组件库打磨成可以投入生产环境的优秀组件库。😀


## Contributing

如果你遇到什么问题，或者有好的建议，欢迎提 [Issues](https://github.com/wencaizhang/ActionVue/issues/) 和 [Pull Request](https://github.com/wencaizhang/ActionVue/pulls/)

## Licence

ActionVue is open source and released under the MIT Licence.

Copyright (c) 2019 wencaizhang
