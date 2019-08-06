# Grid 网格组件

## 基本用法

<Common-Democode title="" description="">
  <grid-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="grid-demo-wrapper">
        <a-row>
          <a-col :span="12">col-12</a-col>
          <a-col :span="12">col-12</a-col>
        </a-row>
        <a-row>
          <a-col :span="8">col-8</a-col>
          <a-col :span="8">col-8</a-col>
          <a-col :span="8">col-8</a-col>
        </a-row>
        <a-row>
          <a-col :span="6">col-6</a-col>
          <a-col :span="6">col-6</a-col>
          <a-col :span="6">col-6</a-col>
          <a-col :span="6">col-6</a-col>
        </a-row>
      </div>
    </template>
    <style>
    .grid-demo-wrapper .col {
      color: #fff;
    }
    .grid-demo-wrapper h3 {
      margin-top: 30px;
      margin-bottom: 10px;
    }
    .grid-demo-wrapper .col:nth-child(2n) {
      background: #00a0e9;
    }
    .grid-demo-wrapper .col:nth-child(2n + 1) {
      background: rgba(0, 160, 233, 0.7);
    }
    </style>
  </highlight-code>
</Common-Democode>


## 区块间隔

<Common-Democode title="" description="">
  <grid-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="grid-demo-wrapper">
        <a-row :gutter="24">
          <a-col :span="12">col-12</a-col>
          <a-col :span="12">col-12</a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="8">col-8</a-col>
          <a-col :span="8">col-8</a-col>
          <a-col :span="8">col-8</a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="6">col-6</a-col>
          <a-col :span="6">col-6</a-col>
          <a-col :span="6">col-6</a-col>
          <a-col :span="6">col-6</a-col>
        </a-row>
      </div>
    </template>
    <style>
    .grid-demo-wrapper .col {
      color: #fff;
    }
    .grid-demo-wrapper h3 {
      margin-top: 30px;
      margin-bottom: 10px;
    }
    .grid-demo-wrapper .gutter-box {
      padding: 5px 0;
    }
    .grid-demo-wrapper .col:nth-child(2n) {
      background: #00a0e9;
    }
    .grid-demo-wrapper .col:nth-child(2n + 1) {
      background: rgba(0, 160, 233, 0.7);
    }
    </style>
  </highlight-code>
</Common-Democode>


## 左右偏移

<Common-Democode title="" description="">
  <grid-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="grid-demo-wrapper">
        <a-row>
          <a-col :span="8">col-8</a-col>
          <a-col :span="8" :offset="8">col-8 col-offset-8</a-col>
        </a-row>
        <a-row>
          <a-col :span="6" :offset="6">col-6 col-offset-6</a-col>
          <a-col :span="6" :offset="6">col-6 col-offset-6</a-col>
        </a-row>
        <a-row>
          <a-col :span="12" :offset="6">col-12 col-offset-6</a-col>
        </a-row>
      </div>
    </template>
    <style>
    .grid-demo-wrapper .col {
      color: #fff;
    }
    .grid-demo-wrapper h3 {
      margin-top: 30px;
      margin-bottom: 10px;
    }
    .grid-demo-wrapper .col:nth-child(2n) {
      background: #00a0e9;
    }
    .grid-demo-wrapper .col:nth-child(2n + 1) {
      background: rgba(0, 160, 233, 0.7);
    }
    </style>
  </highlight-code>
</Common-Democode>


## flex 水平对齐

<Common-Democode title="" description="">
  <grid-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="grid-demo-wrapper">
        <p>子元素左对齐</p>
        <a-row type="flex" justify="flex-start">
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
        </a-row>
        <p>子元素居中</p>
        <a-row type="flex" justify="center">
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
        </a-row>
        <p>子元素右对齐</p>
        <a-row type="flex" justify="flex-end">
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
        </a-row>
        <p>子元素两端对齐，子元素之间的间隔都相等</p>
        <a-row type="flex" justify="space-between">
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
        </a-row>
        <p>子元素两侧的间隔相等，子元素之间的间隔比子元素与边框的间隔大一倍</p>
        <a-row type="flex" justify="space-around">
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
        </a-row>
      </div>
    </template>
  </highlight-code>
</Common-Democode>


## flex 垂直对齐

<Common-Democode title="" description="">
  <grid-demo5 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="grid-demo-wrapper-5">
        <p>Align: flex-start</p>
        <a-row type="flex" align="flex-start" justify="center">
          <a-col :span="4">
            <p class="height-100">col-4</p>
          </a-col>
          <a-col :span="4">
            <p class="height-80">col-4</p>
          </a-col>
          <a-col :span="4">
            <p class="height-120">col-4</p>
          </a-col>
          <a-col :span="4">
            <p class="height-50">col-4</p>
          </a-col>
        </a-row>
        <p>Align: center</p>
        <a-row type="flex" align="center" justify="space-around">
          <a-col :span="4">
            <p class="height-100">col-4</p>
          </a-col>
          <a-col :span="4">
            <p class="height-80">col-4</p>
          </a-col>
          <a-col :span="4">
            <p class="height-120">col-4</p>
          </a-col>
          <a-col :span="4">
            <p class="height-50">col-4</p>
          </a-col>
        </a-row>
        <p>Align: flex-end</p>
        <a-row type="flex" align="flex-end" justify="space-between">
          <a-col :span="4">
            <p class="height-100">col-4</p>
          </a-col>
          <a-col :span="4">
            <p class="height-80">col-4</p>
          </a-col>
          <a-col :span="4">
            <p class="height-120">col-4</p>
          </a-col>
          <a-col :span="4">
            <p class="height-50">col-4</p>
          </a-col>
        </a-row>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

## flex 排序

<Common-Democode title="" description="">
  <grid-demo6 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-row type="flex">
          <a-col :span="6" :order="4">1 col-order-4</a-col>
          <a-col :span="6" :order="3">2 col-order-3</a-col>
          <a-col :span="6" :order="2">3 col-order-2</a-col>
          <a-col :span="6" :order="1">4 col-order-1</a-col>
        </a-row>
      </div>
    </template>
  </highlight-code>
</Common-Democode>


## API

::: tip 提示
与 flex 相关的属性：`justify`、`align`、`order` 分别对应原生 CSS 的 `flex` 布局中的 `justify-content`、`align-items`、`order` 属性，其属性值也保持一致。

不熟悉 `flex` 的同学可以参考：[Flex 布局教程：语法篇 - 阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
:::

### Row

属性 |	说明	| 类型 |	默认值
:--- | :--- | :--- | :---
`gutter` | 栅格间隔 | Number | 0
`type`	| 布局模式，可选 `flex`，现代浏览器 下有效 |	String | -
`justify`	| `flex` 布局下的水平排列方式：`flex-start` `flex-end` `center` `space-between` `space-around` | String	| `flex-start`
`align` | `flex` 布局下的垂直对齐方式：`flex-start` `flex-end` `center` `baseline` `stretch` | String | `stretch`

### Col

属性 |	说明	| 类型 |	默认值
:--- | :--- | :--- | :---
`span` | 栅格占位格数，为 0 时相当于 `display: none` | Number | -
`offset` | 栅格左侧的间隔格数，间隔内不可以有栅格 | Number | 0
`order` | 栅格顺序，`flex` 布局模式下有效 | Number | 0
