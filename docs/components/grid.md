# 网格组件

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
    .grid-demo-wrapper {
      width: 800px;
    }
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
    .grid-demo-wrapper {
      width: 800px;
    }
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
    .grid-demo-wrapper {
      width: 800px;
    }
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
        <p>sub-element align left</p>
        <a-row type="flex" justify="flex-start">
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
        </a-row>
        <p>sub-element align center</p>
        <a-row type="flex" justify="center">
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
        </a-row>
        <p>sub-element align right</p>
        <a-row type="flex" justify="flex-end">
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
        </a-row>
        <p>sub-element monospaced arrangement</p>
        <a-row type="flex" justify="space-between">
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
          <a-col :span="4">col-4</a-col>
        </a-row>
        <p>sub-element align full</p>
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

