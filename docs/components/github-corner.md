# GitHub Corner 

## 基本使用

<Common-Democode>
  <github-corner-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="box">
        <a-github-corner repo="wencaizhang/ActionVue" />
      </div>
    </template>
    <style scoped>
    .box {
      position: relative;
      display: inline-block;
      height: 100px;
      width: 100px;
      border: 1px solid #ccc
    }
    </style>
  </highlight-code>
</Common-Democode>



## 背景色

<Common-Democode>
  <github-corner-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <div class="box">
          <a-github-corner repo="wencaizhang/ActionVue"/>
        </div>
        <div class="box">
          <a-github-corner repo="wencaizhang/ActionVue" bgColor="#64CEAA" />
        </div>
        <div class="box">
          <a-github-corner repo="wencaizhang/ActionVue" bgColor="#FD6C6C" />
        </div>
        <div class="box">
          <a-github-corner repo="wencaizhang/ActionVue" bgColor="#70B7FD" />
        </div>
      </div>
    </template>
    <style scoped>
    .box {
      position: relative;
      display: inline-block;
      height: 100px;
      width: 100px;
      border: 1px solid #ccc;
    }
    </style>
  </highlight-code>
</Common-Democode>

## github 图标填充颜色

<Common-Democode>
  <github-corner-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="box">
        <a-github-corner repo="wencaizhang/ActionVue" color="#fff"/>
      </div>
    </template>
    <style scoped>
    .box {
      position: relative;
      display: inline-block;
      height: 100px;
      width: 100px;
      border: 1px solid #ccc
    }
    </style>
  </highlight-code>
</Common-Democode>


## 位置

<Common-Democode>
  <github-corner-demo5 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <div class="box">
          <a-github-corner repo="wencaizhang/ActionVue" position="left" />
        </div>
        <div class="box">
          <a-github-corner repo="wencaizhang/ActionVue" />
        </div>
      </div>
    </template>
    <style scoped>
    .box {
      position: relative;
      display: inline-block;
      height: 100px;
      width: 100px;
      border: 1px solid #ccc;
    }
    </style>
  </highlight-code>
</Common-Democode>

## 左上角

<Common-Democode>
  <github-corner-demo6 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <p>效果请查看右上角</p>
        <div class="box">
          <a-github-corner repo="wencaizhang/ActionVue" />
        </div>
      </div>
    </template>
    <style scoped>
    .box {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 100;
      display: inline-block;
      height: 100px;
      width: 100px;
    }
    </style>
  </highlight-code>
</Common-Democode>

## API

属性 |	说明	| 类型 |	默认值
:--- | :--- | :--- | :---
`repo` | 仓库地址，`<username>/<repo>`，例如 `wencaizhang/ActionVue` | String | - 
`bgColor` | 背景色 | String | `#151513`
`color` | github 图标填充颜色 | String | `#fff`
`blank` | 是否在新窗口打开链接 | Boolean | `true`
`position` | 显示位置，左上或右上，`left` `right` | String | `right`