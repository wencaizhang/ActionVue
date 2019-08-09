<template>
  <div class="a-swipe-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'a-swipe-item',

}
</script>

<style lang="scss" scoped>
.a-swipe-item {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
