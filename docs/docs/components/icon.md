# Icon 图标 <Common-SourceCodeLink comp="icon" />

## 图标列表

*具体 icon 的 type 可以通过下面示例看到，点击会自动复制相应代码。*

<icon-demo1 />

## 基本用法

指定图标对应的 `type` 属性，即可使用不同的图标

<Common-Democode>
  <icon-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <section class="icon-demo2">
        <a-icon type="home" />
        <a-icon type="setting" />
      </section>
    </template>
    <style>
      .icon-demo2 .a-icon {
        font-size: 2em;
      }
    </style>
  </highlight-code>
</Common-Democode>

## 动画旋转

可以通过设置 `spin` 属性来实现动画旋转效果。

<Common-Democode>
  <icon-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <section class="icon-demo3">
        <a-icon type="loading" spin />
        <a-icon type="setting" spin />
      </section>
    </template>
    <style>
      .icon-demo3 .a-icon {
        font-size: 2em;
      }
    </style>
  </highlight-code>
</Common-Democode>

## API


属性 |	说明	| 类型 |	默认值
:--- | :--- | :--- | :---
`type` | 图标类型 | String | -
`spin` | 是否有旋转动画 | Boolean | `false`

