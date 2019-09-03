<template>
  <section>
    <a-button @click="onClick">通知</a-button>
  </section>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  },
  methods: {
    onClick () {
      this.$notify({
        title: '提示',
        message: '消息1'
      })
    }
  },
}
</script>

<style scoped>

</style>