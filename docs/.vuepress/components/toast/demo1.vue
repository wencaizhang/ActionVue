<template>
  <div>
    <a-button @click="onClick('top')">上方弹出</a-button>
    <a-button @click="onClick('middle')">中间弹出</a-button>
    <a-button @click="onClick('bottom')">下方弹出</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick(dir) {
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

