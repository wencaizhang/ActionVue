# Notification 通知

<Common-Democode title="" description="">
  <notification-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <section>
        <a-button @click="onClick">通知</a-button>
      </section>
    </template>
    <script>
    export default {
      methods: {
        onClick () {
          this.$notify({
            title: '提示',
            message: '消息1'
          })
        }
      },
    }
    </script>
  </highlight-code>
</Common-Democode>


## API

属性 |	说明	| 类型 |	默认值
:--- | :--- | :--- | :---
`title` | 标题 | String | -
`message` | 说明文字 | String | -
`duration` | 显示时间(秒)。设为 0 则不会自动关闭 | Number | 3

### 事件
事件名称 |	说明	| 类型 |	回调参数
:--- | :--- | :--- | :---
`onClose` | 关闭时的回调函数 | Function | -
`onClick` | 点击 Notification 时的回调函数 | Function | -


