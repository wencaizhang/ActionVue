<template>
  <div class="sticky-wraper" ref="wrapper" :style="{ height }">
    <div class="sticky-inner" :class="clazz" :style="{ left, width, top }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'sticky',
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      sticky: false,
      top: undefined,
      left: undefined,
      width: undefined,
      height: undefined
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
  computed: {
    clazz () {
      return { sticky: this.sticky }
    }
  },
  mounted () {
    this.windowScrollHandler = this._windowScrollHandler.bind(this)
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  methods: {
    getTop () {
      let { top } = this.$refs.wrapper.getBoundingClientRect()
      return top
    },
    _windowScrollHandler () {
      let { height, left, width } = this.$refs.wrapper.getBoundingClientRect()

      if (this.getTop() < this.distance) {
        this.sticky = true
        this.height = height + 'px'
        this.left = left + 'px'
        this.width = width + 'px'
        this.top = this.distance + 'px'
      } else {
        this.sticky = false
        this.height = undefined
        this.left = undefined
        this.width = undefined
        this.top = undefined
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sticky-wraper {
  border: 1px solid #ccc;

  .sticky {
    background-color: red;
    position: fixed;
  }
}
</style>
