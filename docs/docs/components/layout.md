# Layout 布局 <Common-SourceCodeLink comp="layout" />

组件概述

+ `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
+ `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
+ `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
+ `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
+ `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

> 注意：采用 flex 布局实现，请注意浏览器兼容性问题。


## 基本常用布局

<Common-Democode>
  <layout-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div id="components-layout-demo-basic">
        <a-layout style="height: 50vh;">
          <a-layout-header>Header</a-layout-header>
          <a-layout-content>Content</a-layout-content>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
        <hr />
        <a-layout>
          <a-layout-header>Header</a-layout-header>
          <a-layout>
            <a-layout-sider>Sider</a-layout-sider>
            <a-layout-content>Content</a-layout-content>
          </a-layout>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
        <hr />
        <a-layout>
          <a-layout-sider>Sider</a-layout-sider>
          <a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout-content>Content</a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
          </a-layout>
        </a-layout>
      </div>
    </template>
    <style>
    #components-layout-demo-basic {
      text-align: center;
    }
    #components-layout-demo-basic .a-layout-header,
    #components-layout-demo-basic .a-layout-footer {
      background: #7dbcea;
      color: #fff;
    }
    #components-layout-demo-basic .a-layout-footer {
      line-height: 1.5;
    }
    #components-layout-demo-basic .a-layout-sider {
      background: #3ba0e9;
      color: #fff;
      line-height: 120px;
    }
    #components-layout-demo-basic .a-layout-content {
      background: rgba(16, 142, 233, 1);
      color: #fff;
      min-height: 120px;
      line-height: 120px;
    }
    #components-layout-demo-basic > .a-layout {
      margin-bottom: 48px;
    }
    #components-layout-demo-basic > .a-layout:last-child {
      margin: 0;
    }
    </style>
  </highlight-code>
</Common-Democode>

## 收缩 sidebar

<Common-Democode>
  <layout-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div id="components-layout-demo-collapsed">
        <a-layout :collapsed="collapsed">
          <a-layout-header>Header</a-layout-header>
          <a-layout>
            <a-layout-sider>Sider</a-layout-sider>
            <a-layout-content>
              <a-button @click="collapsed = !collapsed">Click Me</a-button>
              Content
            </a-layout-content>
          </a-layout>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
        <hr />
        <a-layout :collapsed="collapsed">
          <a-layout-sider>Sider</a-layout-sider>
          <a-layout>
            <a-layout-header>
              <a-button @click="collapsed = !collapsed">Click Me</a-button>
              Header
            </a-layout-header>
            <a-layout-content>
              Content
            </a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
          </a-layout>
        </a-layout>
      </div>
    </template>
    <script>
    export default {
      data () {
        return {
          collapsed: true,
        }
      }
    }
    </script>
    <style>
    #components-layout-demo-collapsed {
      text-align: center;
    }
    #components-layout-demo-collapsed .a-layout-header,
    #components-layout-demo-collapsed .a-layout-footer {
      background: #7dbcea;
      color: #fff;
    }
    #components-layout-demo-collapsed .a-layout-footer {
      line-height: 1.5;
    }
    #components-layout-demo-collapsed .a-layout-sider {
      background: #3ba0e9;
      color: #fff;
      line-height: 120px;
    }
    #components-layout-demo-collapsed .a-layout-content {
      background: rgba(16, 142, 233, 1);
      color: #fff;
      min-height: 120px;
      line-height: 120px;
    }
    #components-layout-demo-collapsed > .a-layout {
      margin-bottom: 48px;
    }
    #components-layout-demo-collapsed > .a-layout:last-child {
      margin: 0;
    }
    </style>
  </highlight-code>
</Common-Democode>


## API

### Layout Sider

属性 |	说明	| 类型 |	默认值
:--- | :--- | :--- | :---
`collapsed` | 当前收起状态 | Boolean | -
