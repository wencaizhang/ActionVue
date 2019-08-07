<template>
  <div class="wraper" ref="wraper">
    <a-sticky position="bottom" :getContainer="getContainer">
      <nav>
        <h3>导航3，吸附在底部</h3>
      </nav>
    </a-sticky>
  </div>
</template>

<script>
export default {
  methods: {
    getContainer () {
      return this.$refs.wraper
    }
  }
}
</script>

<style scoped>
h3 {
  outline: 1px solid #fff;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
</style>
