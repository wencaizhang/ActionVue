# Mssage 消息提示

<Common-Democode title="" description="">
  <message-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <button @click="onClick">点我</button>
      </div>
    </template>
    <script>
    export default {
      methods: {
        onClick () {
          this.$message.success({ content: '复制成功'})
        }
      }
    };
    </script>
  </highlight-code>
</Common-Democode>
