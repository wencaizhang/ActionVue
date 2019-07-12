<template>
  <div>
    <a-button @click="onClick">按钮</a-button>
  </div>
</template>

<script>
import Vue from "vue";
import AButton from "../../../../src/package/button/button";
import AToast from "../../../../src/package/toast/plugin";
import { debuglog } from "util";

Vue.use(toast);

export default {
  components: {
    AButton,
    AToast
  },

  methods: {
    onClick() {
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

