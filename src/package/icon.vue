<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: '',
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>
