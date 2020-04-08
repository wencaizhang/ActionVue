<template>
  <div class="a-layout-footer">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'a-layout-footer'
}
</script>

<style lang="less" scoped>
.a-layout-footer {
  background: #f0f2f5;
  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}
</style>
