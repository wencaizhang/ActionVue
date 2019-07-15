<template>
  <div>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <sticky :distance="0">
      <div class="box">我是粘滞内容</div>
    </sticky>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <sticky :distance="0" position="bottom">
      <div class="box">我是粘滞内容</div>
    </sticky>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
  </div>
</template>

<script>
import sticky from './sticky'
export default {
  components: {
    sticky
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
p {
  height: 40px;
  line-height: 40px;
}
.box {
  line-height: 80px;
  padding: 10px;
}
</style>
