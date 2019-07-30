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


## gutter

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


## flex

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



<Common-Democode title="" description="">
  <grid-demo5 />
  <highlight-code slot="codeText" lang="vue">
  </highlight-code>
</Common-Democode>
## API

### Row

属性 |	说明	| 类型 |	默认值
--- | --- | --- | ---
gutter | 栅格间隔 | number | 0
type	| 布局模式，可选 flex，现代浏览器 下有效 |	string | -
justify	| flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between` | string	| `start`
align | flex 布局下的垂直对齐方式：`top` `middle` `bottom` | string | top

### Col

属性 |	说明	| 类型 |	默认值
--- | --- | --- | ---
span | 栅格占位格数，为 0 时相当于 `display: none` | number | -
offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number | 0
