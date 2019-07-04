<template>
  <svg class="gicon">
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
.gicon {
  width: 1em;
  height: 1em;
}
</style>
