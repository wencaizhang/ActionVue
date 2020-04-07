# 快速上手

<div align="center">
  <img src="/ActionVue/logo.png" alt="ActionVue" width="200">
</div>

<div align="center">

  <p style="margin-bottom: 10px;">
    基于 <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a> 开发的一套组件库. :stuck_out_tongue_winking_eye:
  </p>

  [![npm](https://img.shields.io/npm/v/actionvue?style=flat-square)](https://www.npmjs.com/package/actionvue/)[![vue](https://img.shields.io/badge/vue-2.6.11-blue.svg?style=flat-square)](https://github.com/vuejs/vue)[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/wencaizhang/ActionVue/blob/master/LICENSE)

</div>


## 安装

使用 npm 安装

<Common-CodeBlock>
  <highlight-code slot="codeText" lang="bash">
    npm i actionvue --save
  </highlight-code>
</Common-CodeBlock>


或使用 yarn 安装

<Common-CodeBlock>
  <highlight-code slot="codeText" lang="bash">
    yarn add actionvue
  </highlight-code>
</Common-CodeBlock>

## 导入组件

### 完整引入
在 `main.js` 中写入以下内容，就可以将 actionvue 完整引入使用：

<Common-CodeBlock>
  <highlight-code slot="codeText" lang="javascript">
    import Vue from 'vue';
    import actionvue from 'actionvue';

    Vue.use(actionvue);
  </highlight-code>
</Common-CodeBlock>

### 按需引入

Coming soon! 敬请期待。~~~ 
