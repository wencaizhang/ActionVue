# GitHub Corner <Common-SourceCodeLink comp="github-corner" /> 

## 基本使用

通过 `repo` 指定 github 仓库地址，格式是 `<用户名>/<仓库名>`，例如：`wencaizhang/ActionVue`。

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

通过 `bgColor` 指定背景颜色

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

## 图标颜色

通过 `color` 指定图标颜色

<Common-Democode>
  <github-corner-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="box">
        <a-github-corner repo="wencaizhang/ActionVue" color="yellow"/>
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

默认情况，github corner 是绝对定位，靠右上角定位。你也可以通过 `position` 指定靠左上角定位。

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

## 固定定位

默认是绝对定位 `position: absolute;`，如果你需要使其固定定位，可以在外边包裹一层 `div`，将 `div` 设置为 `position: fixed; top: 0; right: 0;` 即可。

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