<template>
  <div>
    <div class="placeholder">
      <p>占位内容</p>
      <p>占位内容</p>
      <p>占位内容</p>
      <p>占位内容</p>
      <p>占位内容</p>
    </div>
    <a-back-top :customStyle="backTopStyle">
      <a-icon type="up" />
    </a-back-top>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backTopStyle: {
        width: '50px',
        height: '50px',
        'line-height': '50px',
        right: '40px',
        bottom: '100px',
        'z-index': 1001,
        background: 'lightblue'
      }
    }
  }
}
</script>

<style scoped>
.placeholder p {
  line-height: 40px;
  background: #f2f2f2;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
