<template>
  <section>
    <a-button @click="spinning = !spinning">toggle spinning</a-button>
    <a-spin :spinning="spinning">
      <p>xxxxx</p>
    </a-spin>
  </section>
</template>

<script>
export default {
  name: 'spin-demo2',
  data () {
    return {
      spinning: true,
    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>