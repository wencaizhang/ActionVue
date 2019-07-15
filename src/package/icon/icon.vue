<template>
  <svg class="a-icon">
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

<style  scoped>
.a-icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
