# Spin 加载中

## 基本使用

<Common-Democode>
  <spin-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <section>
        <a-spin />
      </section>
    </template>
  </highlight-code>
</Common-Democode>


## 各种大小

小的用于文本加载，默认用于块级容器级加载，大的用于页面级加载。

<Common-Democode>
  <spin-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-spin size="small" />
        <a-spin />
        <a-spin size="large" />
      </div>
    </template>
  </highlight-code>
</Common-Democode>


## 容器

放入一个容器中。

<Common-Democode>
  <spin-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="example">
        <a-spin />
      </div>
    </template>
    <style scoped>
      .example {
        text-align: center;
        background: rgba(0,0,0,0.05);
        border-radius: 4px;
        margin-bottom: 20px;
        padding: 30px 50px;
        margin: 20px 0;
      }
    </style>
  </highlight-code>
</Common-Democode>


## 卡片加载中

可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态

<Common-Democode>
  <spin-demo5 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-spin :spinning="spinning">
          <div class="spin-content">
            可以点击‘切换’按钮，控制本区域的spin展示。
          </div>
        </a-spin>
        Loading state：<a-switch v-model="spinning"></a-switch>
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            spinning: false
          }
        },
        methods: {
          changeSpinning(){
            this.spinning = !this.spinning
          }
        },
      }
    </script>
    <style scoped>
      .spin-content{
        border: 1px solid #91d5ff;
        background-color: #e6f7ff;
        padding: 30px;
      }
    </style>
  </highlight-code>
</Common-Democode>


## 自定义描述文案

<Common-Democode>
  <spin-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-spin tip="Loading...">
          <div class="spin-content">
            我可以自定义描述文案
          </div>
        </a-spin>
      </div>
    </template>
    <style scoped>
      .spin-content{
        border: 1px solid #91d5ff;
        background-color: #e6f7ff;
        padding: 30px;
      }
    </style>
  </highlight-code>
</Common-Democode>


## 自定义指示符

<Common-Democode>
  <spin-demo6 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-spin>
          <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
        </a-spin>
      </div>
    </template>
  </highlight-code>
</Common-Democode>


## API

| 属性        | 说明                                         | 类型    | 默认值    |
| :---------- | :------------------------------------------- | :------ | :-------- |
| `spinning`  | 是否为加载中状态                             | Boolean | `true`    |
| `size`      | 组件大小，可选值为 `small` `default` `large` | String  | `default` |
| `tip`       | 当作为包裹元素时，可以自定义描述文案         | String  | -         |
| `indicator` | 加载指示符                                   | slot    | -         |
