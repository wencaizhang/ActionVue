<template>
  <div class="wraper" ref="wraper">
    <a-sticky :distance="100" :getContainer="getContainer">
      <nav>
        <h3>导航2，超出容器无效</h3>
      </nav>
    </a-sticky>
    <div class="placeholder">
      placeholder
    </div>
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
.placeholder {
  height: 100px;
  line-height: 100px;
  font-size: 30px;
}
</style>
