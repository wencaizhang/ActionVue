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
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    xs: {
      type: [Number, Object],
    },
    sm: {
      type: [Number, Object],
    },
    md: {
      type: [Number, Object],
    },
    lg: {
      type: [Number, Object],
    },
    xl: {
      type: [Number, Object],
    },
    xxl: {
      type: [Number, Object],
    },
  },
  computed: {
    clazz () {
      const { span, offset, gutter } = this;
      return {
        [`col-${span}`]: true,
        [`col-col-offset-${offset}`]: offset,
      }
    },
    styles () {
      const { gutter } = this;
      if (!gutter) return null;
      return {
        'margin-left': `${gutter/2}px`,
        'margin-right': `${gutter/2}px`,
      }
    }
  }
}
</script>

<style scoped lang="scss">
.col {
  min-height: 30px;
  text-align: center;
  margin: 8px 0;
  padding: 16px 0;
}
  .col {
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: col-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @media (min-width: 577px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: col-offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px){ // 770
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: col-offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: col-offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: col-offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>