<template>
  <div>
    <a-button @click="onClick1">成功</a-button>
    <a-button @click="onClick2">失败</a-button>
    <a-button @click="onClick3">警告</a-button>
  </div>
</template>
<script>
export default {
  methods: {
    onClick1 () {
      this.$message.success({ content: '成功提示信息' })
    },
    onClick2 () {
      this.$message.error({ content: '失败提示信息' })
    },
    onClick3 () {
      this.$message.warning({ content: '警告提示信息' })
    },
  }
};
</script>
