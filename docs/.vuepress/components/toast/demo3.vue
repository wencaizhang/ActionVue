<template>
  <div>
    <a-button @click="onClick">设置关闭按钮文案</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick () {
      this.$toast({
        message: "终于等到你，还好我没放弃QAQ",
        closeText: '我来了',
        onClose () {
          this.$toast('众里寻她千百度，蓦然回首，那人却在灯火阑珊处。')
        }
      });
    },
  }
};
</script>
