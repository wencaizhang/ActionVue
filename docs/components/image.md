# Image 图片

图片容器，在保留原生 img 的特性下，支持懒加载，自定义占位、加载失败等

## 基础用法

基础用法与原生 img 标签一致，可以设置 `src`、`width`、`height`、`alt` 等原生属性

<Common-Democode>
  <image-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-image">
        <a-image
          src="https://coolfe.fun/ActionVue/logo.png"
          width="140"
          height="100"
        />
      </div>
    </template>
  </highlight-code>
</Common-Democode>

## 填充模式

通过 fit 属性设置图片的填充模式，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

<Common-Democode>
  <image-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo2-image">
        <div
          class="block"
          v-for="fit in fitList"
          :key="fit"
        >
          <p class="fit-title">{{ fit }}</p>
          <a-image
            :fit="fit"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            width="100"
            height="100"
          />
        </div>
      </div>
    </template>
    <script>
    export default {
      data () {
        return {
          fitList: [ 'fill', 'contain', 'cover', 'none', 'scale-down', ]
        }
      }
    }
    </script>
    <style>
      .demo2-image .block {
        display: inline-block;
        text-align: center;
        width: 20%;
      }
    </style>
  </highlight-code>
</Common-Democode>

## 圆形图片

通过 `round` 属性可以设置图片变圆

<Common-Democode>
  <image-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-image">
        <a-image
          round
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          width="100"
          height="100"
        />
      </div>
    </template>
  </highlight-code>
</Common-Democode>


## 加载中

Image 组件提供了默认的加载失败提示，并且支持通过 `loading` 插槽自定义内容

<Common-Democode>
  <image-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-image">
        <a-image
          src="https://coolfe.fun/ActionVue/logo.png"
          width="100"
          height="100"
        />
      </div>
    </template>
  </highlight-code>
</Common-Democode>

## 加载失败

Image 组件提供了默认的加载失败提示，并且支持通过 `error` 插槽自定义内容

<Common-Democode>
  <image-demo5 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-image">
        <a-image src="https://error.png" />
        <a-image src="https://error.png">
          <template slot="error">
            自定义加载失败
          </template>
        </a-image>
      </div>
    </template>
  </highlight-code>
</Common-Democode>


## API

属性 |	说明	| 类型 |	默认值
:--- | :--- | :--- | :---
`src` | 图片路径 | String | - 
`alt` | 原生 alt | String | -
`width` | 原生 width | String | -
`height` | 原生 height | String | -
`fit` | 图片填充模式，同原生 [object-fit](https://developer.mozilla.org/en-US/) | String | -
`round` | 是否显示为圆形 | Boolean | `false`
`loading` | 图片加载的占位内容 | slot | -
`error` | 加载失败的内容 | slot | -

### 图片填充模式

名称 | 含义
:--- | :---
`contain` | 保持宽高缩放图片，使图片的长边能完全显示出来
`cover` | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边
`fill` | 拉伸图片，使图片填满元素
`none` | 保持图片原有尺寸
`scale-down` | 取 `none` 或 `contain` 中较小的一个

### 事件

事件名称 | 说明 | 回调参数
:--- | :--- | :---
`load` | 图片加载成功触发 | `function(e)`
`error` | 图片加载失败触发 | `function(e)`
