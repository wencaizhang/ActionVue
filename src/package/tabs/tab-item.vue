<template>
  <div class="a-tab-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'a-tab-item',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.a-tab-item {
  width: 100%;
  flex-shrink: 0;
}
</style>


