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
      type: Number,
      default: 0
    }
  },
  computed: {
    styles () {
      const { gutter } = this;
      return {
        'margin-left': `-${gutter/2}px`,
        'margin-right': `-${gutter/2}px`,
      }
    }
  }
}
</script>

<style lang="less" scoped>
.row {
  display: flex;
}
</style>
