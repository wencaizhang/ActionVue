# Toast 轻提示

## 弹出位置

<Common-Democode title="基本使用" description="">
  <toast-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <a-button @click="onClick('top')">上方弹出</a-button>
      <a-button @click="onClick('middle')">中间弹出</a-button>
      <a-button @click="onClick('bottom')">下方弹出</a-button>
    </template>
    <script>
    export default {
      methods: {
        onClick () {
          this.$toast(
            "我是toast我是toast我是toast我是toast我是toast我是toast我是toast",
            {
              message: "我是toast我是toast我是toast我是toast我是toast我是toast我是toast",
              position: dir || 'top',
              closeText: '已阅',
              close() {
                console.log("朕知道了！退下吧！");
              }
            }
          );
        }
      }
    };
    </script>
  </highlight-code>
</Common-Democode>

## API

| 属性        | 说明                                     | 类型    | 默认值 |
| :----------- | :---------------------------------------- | :------- | :------ |
| `durition`  | 默认自动关闭延时，单位秒                 | Number  | 3      |
| `autoClose` | 是否自动关闭                             | Boolean | true   |
| `position`  | 弹出位置，可选 `top`, `middle`, `bottom` | String  | `top`  |
| `okText`    | 确认按钮文字                             | String  | `top`  |

### 事件

| 事件名称 | 说明                 | 回调参数 |
| :-------- | :-------------------- | :-------- |
| `close`  | 关闭时触发的回调函数 | null     |