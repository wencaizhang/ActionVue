# Steps 步骤条


<Common-Democode description="">
  <steps-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <section>
        <a-button @click="current--">上一步</a-button>
        <a-button @click="current++">下一步</a-button>
        <a-steps :data="data" :current="current" />
      </section>
    </template>
    <script>
    export default {
      name: '',
      data () {
        return {
          current: 1,
          data: [
            { text: "核对信息" },
            { text: "支付" },
            { text: "支付结果" },
          ]
        }
      },
    }
    </script>
  </highlight-code>
</Common-Democode>

