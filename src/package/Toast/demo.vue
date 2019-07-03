<template>
  <button style="padding: 10px 20px;" @click="showToast">点我</button>
</template>

<script>
export default {
  methods: {
    showToast() {
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
