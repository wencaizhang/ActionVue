# Skicky 粘滞吸顶组件

## 基本使用

<Common-Democode description="">
  <sticky-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="wraper" ref="wraper">
        <p>基础版</p>
        <a-sticky>
          <nav>
            <h3>导航1</h3>
          </nav>
        </a-sticky>
      </div>
    </template>
    <style scoped>
    h3 {
      outline: 1px solid #fff;
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 10px;
    }
    </style>
  </highlight-code>
</Common-Democode>


## 进阶

可以指定吸顶时与顶部的距离，还可以指定吸顶效果的容器，仅在容器内有效。

<Common-Democode description="">
  <sticky-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="wraper" ref="wraper">
        <a-sticky :distance="100" :getContainer="getContainer">
          <nav>
            <h3>导航2，超出容器无效</h3>
          </nav>
        </a-sticky>
        <div class="placeholder">
          placeholder
        </div>
      </div>
    </template>
    <script>
    export default {
      methods: {
        getContainer () {
          return this.$refs.wraper
        }
      }
    }
    </script>
    <style scoped>
    h3 {
      outline: 1px solid #fff;
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 10px;
    }
    .placeholder {
      height: 100px;
      line-height: 100px;
      font-size: 30px;
    }
    </style>
  </highlight-code>
</Common-Democode>

## 反转

剧情反转，不仅可以“吸顶”，更能“吸底”。

<Common-Democode description="">
  <sticky-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="wraper" ref="wraper">
        <a-sticky position="bottom" :getContainer="getContainer">
          <nav>
            <h3>导航3，吸附在底部</h3>
          </nav>
        </a-sticky>
      </div>
    </template>
    <script>
    export default {
      methods: {
        getContainer () {
          return this.$refs.wraper
        }
      }
    }
    </script>
    <style scoped>
    h3 {
      outline: 1px solid #fff;
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 10px;
    }
    </style>
  </highlight-code>
</Common-Democode>

## API

| 参数        | 说明   | 类型       | 默认值 |
| :--- | :--- | :--- | :--- |
| `position`    | 组件的吸附方向，顶部或者底部(`top`/`bottom`) | String | `top` |
| `distance`    | 吸顶时与顶部的距离，单位 `px` | Number | 0          |
| `getContainer`   | 返回一个 dom 或 组件实例，默认返回 `body`。组件会在指定容器内拥有吸附效果，超出容器自动失效 | Function    | `function () { return document.body }`         |
| `customClass` | 吸附时自定义类名，方便指定样式 | String | -      |


## 其他

这里没有使用原生 sticky 属性，主要原因是原生 sticky 属性对 HTML 结构的要求比较高，使用起来不够方便。

附上 `position: sticky;` 兼容性列表，图片来源：[https://caniuse.com/#search=sticky](https://caniuse.com/#search=sticky)

<img :src="$withBase('/images/css-position-sticky.png')" alt="css-position-sticky">