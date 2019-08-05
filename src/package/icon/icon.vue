<template>
  <svg class="a-icon" :class="`a-icon-${type}`" @click="$emit('click')">
    <use :xlink:href="`#i-${type}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'a-icon',
  props: {
    type: {
      type: String
    }
  },
  mounted () {
    import("./symbol")
  },
}
</script>

<style scoped>
.a-icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
