<template>
  <div class="col" :class="clazz" :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  inject: ['gutter'],
  props: {
    span: {
      type: Number,
      required: true
    },
    offset: {
      type: Number,
      default: 0
    },
  },
  computed: {
    clazz () {
      const { span, offset, gutter } = this;
      return {
        [`col-${span}`]: true,
        [`col-offset-${offset}`]: offset,
      }
    },
    styles () {
      const { gutter } = this;
      return {
        'margin-left': `${gutter/2}px`,
        'margin-right': `${gutter/2}px`,
      }
    }
  }
}
</script>


<style lang="less" scoped>

.loop-span (0) {}
.loop-span (@index) when (@index > 0) {
  .col-@{index} {
    width: @index / 24 * 100%;
  }
  .col-offset-@{index} {
    margin-left: @index / 24 * 100%;
  }
  .loop-span (@index - 1);
}
.loop-span(24);

.col {
  min-height: 30px;
  text-align: center;
  margin: 8px 0;
  padding: 16px 0;
}

</style>
