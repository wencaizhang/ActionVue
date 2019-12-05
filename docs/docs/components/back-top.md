# BackTop 回到顶部 <Common-SourceCodeLink comp="back-top" />


## 基本用法

滑动页面即可看到右下方的按钮（右下方靠底部的是默认）。

<Common-Democode>
  <back-top-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <div class="placeholder">
          <p>占位内容</p>
          <p>占位内容</p>
          <p>占位内容</p>
          <p>占位内容</p>
          <p>占位内容</p>
        </div>
        <a-back-top />
      </div>
    </template>
  </highlight-code>
</Common-Democode>

## 自定义样式和插槽

滑动页面即可看到右下方的按钮（右下方偏上的是自定义的）。

<Common-Democode>
  <back-top-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <div class="placeholder">
          <p>占位内容</p>
          <p>占位内容</p>
          <p>占位内容</p>
          <p>占位内容</p>
          <p>占位内容</p>
        </div>
        <a-back-top :customStyle="backTopStyle">
          <a-icon type="up" />
        </a-back-top>
      </div>
    </template>
    <script>
    export default {
      data () {
        return {
          backTopStyle: {
            width: '50px',
            height: '50px',
            'line-height': '50px',
            right: '40px',
            bottom: '100px',
            'z-index': 1001,
            background: 'lightblue'
          }
        }
      }
    }
    </script>
  </highlight-code>
</Common-Democode>

## API

参数 | 说明 | 类型 | 默认值
:--- | :--- | :--- | :---
`target` | 触发滚动的对象 | String | -
`visibility-height` | 滚动高度达到此参数值才出现 | Number | `200`
`customStyle` | 自定义按钮样式，可用于设置其 <br> `width`/`height`/`bottom`/`right`/`z-index`等属性 | Object | `null`
默认插槽 slot | 用于替换组件默认的回到顶部图标 | slot | -

### 事件

事件名 | 说明 | 回调参数
:--- | :--- | :---
`beforeScroll` | 回到顶部前触发的事件 | `function()`
`scrolled` | 回到顶部后触发的事件 | `function()`
