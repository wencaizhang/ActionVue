
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

  [![npm](https://img.shields.io/npm/v/actionvue?style=flat-square)](https://www.npmjs.com/package/actionvue/)
  [![vue](https://img.shields.io/badge/vue-2.6.11-blue.svg?style=flat-square)](https://github.com/vuejs/vue)
  [![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/wencaizhang/ActionVue/blob/master/LICENSE)
  ![Deploy Docs](https://github.com/wencaizhang/ActionVue/workflows/Deploy%20Docs/badge.svg)
</div>


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

Vue.use(actionvue);
```

## Document

具体使用方法请查看 <a href="https://coolfe.fun/ActionVue/" rel="noopener" target="_blank">文档</a>

## Components

+ [x] Button 按钮
+ [x] Input 输入框
+ [x] Switch 开关
+ [x] Icon 图标
+ [x] Toast 轻提示
+ [x] Message 信息
+ [x] Notification 通知
+ [x] Pager 分页器
+ [x] Grid 网格系统
+ [x] Skeleton 骨架屏
+ [x] Sticky 粘滞 / 吸顶组件
+ [x] Swipe 轮播组件
+ [x] Tabs
+ [x] Popover 气泡卡片
+ [x] Transition 过渡动画
+ [x] Layout 默认布局
+ [x] Img Load 图片加载
+ [x] BackTop 回到顶部
+ [x] GitHub Corner
+ [x] Spin 加载中
+ [ ] Uploader 文件上传
+ [ ] Nav 导航
+ [ ] Table 表格
+ [ ] 手风琴
+ [ ] 省市区级联组件
+ [ ] Datepicker 日期选择
+ [ ] Scroll 滚动组件

## Why and What

本组件库借鉴了一些成熟 UI 框架（如 Element UI 和 Ant Design）的外观，API，甚至部分源码，在此感谢。

本组件库由个人开发，旨在技术研究，探索如何搭建一个基于 Vue 的组件库，暂时不推荐在生产环境使用。

生产环境中更加推荐市面上现有的成熟的中后台组件库，比如 [Element](https://github.com/ElemeFE/element) / [iview](https://github.com/iview/iview) / [Vant](https://github.com/youzan/vant) 等等，在此不一一列举。

同时我也会努力早日将本组件库打磨成可以投入生产环境的优秀组件库。😀


## Contributing

开发组件库涉及到了大量的知识点：

- vue基础语法
- 组件基本语法
- 组件通讯(`sync`, `provide`, `inject`)
- 插槽的使用
- `props` 校验
- 过渡与动画处理
- 计算属性与监听属性
- v-model语法糖 vue插件机制
- npm发布
- VuePress 使用
- GitHub Actions 自动部署
- 组件功能和 API 的设计
- ...

总而言之，这是一个很好的练习编程技能的项目，希望每个人都能通过这个项目得到一些启发。

如果你遇到什么问题，或者有好的建议，欢迎提 [Issues](https://github.com/wencaizhang/ActionVue/issues/) 和 [Pull Request](https://github.com/wencaizhang/ActionVue/pulls/)

## Licence

ActionVue is open source and released under the MIT Licence.

Copyright (c) 2019 wencaizhang
