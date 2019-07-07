# toast

<Common-Democode title="基本使用" description="">
  <toast-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <a-button @click="onClick" />
    </template>
    <script>
    export default {
      methods: {
        onClick () {
          this.$toast(
            "我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast",
            {
              closeButton: {
                text: "已阅",
                callback() {
                  console.log("朕知道了！退下吧！");
                }
              }
            }
          );
        }
      }
    };
    </script>
  </highlight-code>
</Common-Democode>
