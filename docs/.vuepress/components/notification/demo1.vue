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
        message: '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案',
        duration: 0,
        onClick () {
          console.log('click');
        },
        onClose () {
          console.log('close');
        }
      })
    }
  },
}
</script>