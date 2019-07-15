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
