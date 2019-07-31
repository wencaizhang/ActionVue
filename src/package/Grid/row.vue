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
    gutter: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      validator (v) {
        return ['flex'].includes(v)
      }
    },
    align: {
      type: String,
      default: 'stretch',
    },
    justify: {
      type: String,
      default: 'flex-start',
      validator (v) {
        return ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'].includes(v)
      }
    },
  },
  computed: {
    styles () {
      const { gutter, type, justify, align } = this;
      return {
        'display': type === 'flex' ? 'flex' : 'block',
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
  // display: flex;
  zoom: 1;
  box-sizing: border-box;
}
.row:before, .row:after {
  content: '';
  display: table;
  clear: both;
}
</style>
