<template>
  <div class="row" :style="styles">
    <slot :gutter="gutter"/>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      gutter: this.gutter
    }
  },
  props: {
    align: {
      type: String,
      default: 'top',
      validator (v) {
        return ['top', 'middle', 'bottom'].includes(v)
      }
    },
    justify: {
      type: String,
      default: 'flex-start',
      validator (v) {
        return ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'].includes(v)
      }
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    styles () {
      const { gutter, justify, align } = this;
      return {
        'margin-left': `-${gutter/2}px`,
        'margin-right': `-${gutter/2}px`,
        'justify-content': justify,
        'align-items': align,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  // flex-wrap: wrap;
}
</style>
