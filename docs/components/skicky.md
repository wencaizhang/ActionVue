# Skicky 粘滞吸顶组件

解决某些需要吸顶的需求，在不支持原生 sticky 属性的浏览器上模拟吸顶效果。

## 基本使用

<Common-Democode description="">
  <sticky-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <a-sticky :distance="100">
          <div class="box">我是粘滞内容一</div>
        </a-sticky>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <a-sticky :distance="0" position="bottom" customClass="blue">
          <div class="box">我是粘滞内容二</div>
        </a-sticky>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

## 基本使用 二

<Common-Democode description="">
  <sticky-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <a-sticky :distance="100">
          <div class="box">我是粘滞内容一</div>
        </a-sticky>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
        <a-sticky :distance="0" position="bottom" customClass="blue">
          <div class="box">我是粘滞内容二</div>
        </a-sticky>
        <p>段落</p>
        <p>段落</p>
        <p>段落</p>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

## API

| 参数        | 说明   | 类型       | 默认值 |
| :--- | :--- | :--- | :--- |
| `position`    | 组件的吸附方向，顶部或者底部(`top`/`bottom`) | String | `top` |
| `distance`    | 距离 | Number | 0          |
| `customClass` | 吸附时自定义类名，方便指定样式 | String | -      |


## 其他

附上 `position: sticky;` 兼容性列表，图片来源：[https://caniuse.com/#search=sticky](https://caniuse.com/#search=sticky)

<img :src="$withBase('/images/css-position-sticky.png')" alt="css-position-sticky">