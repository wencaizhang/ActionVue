# 快速上手

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

在 `main.js` 中导入之后，就可以当做全局组件使用：

<Common-CodeBlock>
  <highlight-code slot="codeText" lang="javascript">
    import Vue from 'vue';
    import actionvue from 'actionvue';

    Vue.use(actionvue);
  </highlight-code>
</Common-CodeBlock>
