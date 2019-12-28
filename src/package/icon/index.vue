<template>
  <svg class="a-icon" :class="clazz" @click="$emit('click')">
    <use :xlink:href="`#i-${type}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'a-icon',
  props: {
    type: {
      type: String,
      required: true
    },
    spin: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    clazz () {
      return {
        [`a-icon-${this.type}`]: true,
        [`a-icon-spin`]: this.spin,
      }
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
.a-icon-spin {
  animation: loadingCircle 1s infinite linear;
}
@keyframes loadingCircle {
  100% {
    transform: rotate(360deg);
  }
}
</style>
