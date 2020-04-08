<template>
  <div class="a-layout-content">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'a-layout-content'
}
</script>

<style lang="less" scoped>
.a-layout-content {
  flex-grow: 1;
}
</style>
