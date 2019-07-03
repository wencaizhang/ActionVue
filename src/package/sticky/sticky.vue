<template>
  <div class="sticky-wraper" ref="wrapper" :style="{ height }">
    <div class="sticky-inner" :class="clazz" :style="{ left, width, top, bottom, }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'sticky',
  props: {
    position: {
      type: String,
      default: 'top',
      validator (v) {
        if (['top', 'bottom'].includes(v)) {
          return v
        }
        return 'top'
      }
    },
    distance: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      sticky: false,
      top: undefined,
      bottom: undefined,
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
    getDistance () {
      let offset = this.$refs.wrapper.getBoundingClientRect()
      return offset[this.position]
    },
    _windowScrollHandler () {
      let { height, left, width } = this.$refs.wrapper.getBoundingClientRect()
      console.log(this.getDistance(), this.$refs.wrapper.getBoundingClientRect())

      let distance = this.position === 'top'
        ? this.getDistance()
        : document.documentElement.clientHeight - this.getDistance()

      if (distance < this.distance) {
        this.sticky = true
        this.height = height + 'px'
        this.left = left + 'px'
        this.width = width + 'px'
        this[this.position] = this.distance + 'px'
      } else {
        this.sticky = false
        this.height = undefined
        this.left = undefined
        this.width = undefined
        this[this.position] = undefined
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
