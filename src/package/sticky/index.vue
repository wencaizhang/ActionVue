<template>
  <div
    ref="wrapper"
    class="a-sticky-wraper"
    :style="wrapperStyles"
  >
    <div
      ref="inner-wrapper"
      class="a-sticky-inner"
      :class="innerClazz"
      :style="innerStyles"
    >
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
    },
    customClass: {
      type: String,
    },
    getContainer: {
      type: Function,
      default () {
        return document.body
      }
    }
  },
  data () {
    return {
      sticky: false,
      top:    undefined,
      bottom: undefined,
      left:   undefined,
      width:  undefined,
      height: undefined,
    }
  },
  mounted () {
    this.windowScrollHandler = this._windowScrollHandler.bind(this)
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
  computed: {
    wrapperStyles () {
      const { height, } = this;
      return { height }
    },
    innerClazz () {
      const { sticky, customClass } = this;
      return {
        [`a-sticky-inner-fixed`]: sticky,
        [customClass]: customClass && sticky
      }
    },
    innerStyles () {
      const { sticky, left, width, top, bottom } = this;
      return {
        position: sticky ? 'fixed' : '',
        left, width, top, bottom,
      }
    },
  },
  methods: {
    _windowScrollHandler () {
      let offset = this.$refs['wrapper'].getBoundingClientRect()
      let offset_container = this.getContainer().getBoundingClientRect();
      let { top, left, bottom, width, height } = offset;

      // sticky 元素容器顶部距离文档顶部的距离
      let distance = this.position === 'top'
        ? top
        : document.documentElement.clientHeight - bottom;

      let limit = this.position === 'top'
        ? offset_container.bottom
        : offset_container.top;

      distance <= this.distance && this.distance < limit
        ? this.setStyles(offset)
        : this.clearStyles();
    },
    setStyles ({ top, left, width, height }) {
      this.sticky         = true
      this.height         = height + 'px'
      this.left           = left   + 'px'
      this.width          = width  + 'px'
      this[this.position] = this.distance + 'px'
    },
    clearStyles () {
      this.sticky         = false
      this.height         = undefined
      this.left           = undefined
      this.width          = undefined
      this[this.position] = undefined
    }
  },
}
</script>

<style lang="less" scoped>
.a-sticky-wraper {

  .a-sticky-inner {
    z-index: 100;
    overflow: hidden;
  }
}

</style>
