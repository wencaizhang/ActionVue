<template>
  <div class="a-layout-header">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'a-layout-header'
}
</script>

<style lang="less" scoped>
.a-layout-header {
  background: #001529;
  padding: 0 50px;
  height: 64px;
  line-height: 64px;
}
</style>
