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
    order: {
      type: [Number],
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
      const { span, offset, gutter, order } = this;
      return {
        [`col-${span}`]: true,
        [`col-offset-${offset}`]: offset,
      }
    },
    styles () {
      const { gutter=0, order } = this;
      return {
        'padding-left': `${gutter/2}px`,
        'padding-right': `${gutter/2}px`,
        order,
      }
    }
  }
}
</script>

<style lang="less" scoped>
// .col {
//   float: left;
//   display: block;
//   min-height: 30px;
//   text-align: center;
//   margin: 8px 0;
//   padding: 8px 0;
// }
//   .col {
//     $class-prefix: col-;
//     @for $n from 1 through 24 {
//       &.#{$class-prefix}#{$n} {
//         width: ($n / 24) * 100%;
//       }
//     }
//     $class-prefix: col-offset-;
//     @for $n from 1 through 24 {
//       &.#{$class-prefix}#{$n} {
//         margin-left: ($n / 24) * 100%;
//       }
//     }
//     @media (min-width: 577px) {
//       $class-prefix: col-ipad-;
//       @for $n from 1 through 24 {
//         &.#{$class-prefix}#{$n} {
//           width: ($n / 24) * 100%;
//         }
//       }
//       $class-prefix: col-offset-ipad-;
//       @for $n from 1 through 24 {
//         &.#{$class-prefix}#{$n} {
//           margin-left: ($n / 24) * 100%;
//         }
//       }
//     }
//     @media (min-width: 769px){ // 770
//       $class-prefix: col-narrow-pc-;
//       @for $n from 1 through 24 {
//         &.#{$class-prefix}#{$n} {
//           width: ($n / 24) * 100%;
//         }
//       }
//       $class-prefix: col-offset-narrow-pc-;
//       @for $n from 1 through 24 {
//         &.#{$class-prefix}#{$n} {
//           margin-left: ($n / 24) * 100%;
//         }
//       }
//     }
//     @media (min-width: 993px) {
//       $class-prefix: col-pc-;
//       @for $n from 1 through 24 {
//         &.#{$class-prefix}#{$n} {
//           width: ($n / 24) * 100%;
//         }
//       }
//       $class-prefix: col-offset-pc-;
//       @for $n from 1 through 24 {
//         &.#{$class-prefix}#{$n} {
//           margin-left: ($n / 24) * 100%;
//         }
//       }
//     }
//     @media (min-width: 1201px) {
//       $class-prefix: col-wide-pc-;
//       @for $n from 1 through 24 {
//         &.#{$class-prefix}#{$n} {
//           width: ($n / 24) * 100%;
//         }
//       }
//       $class-prefix: col-offset-wide-pc-;
//       @for $n from 1 through 24 {
//         &.#{$class-prefix}#{$n} {
//           margin-left: ($n / 24) * 100%;
//         }
//       }
//     }
//   }
</style>

<style>
/* lang="scss" scoped */
/*
.col {
  float: left;
  display: block;
  min-height: 30px;
  text-align: center;
  margin: 8px 0;
  padding: 8px 0;
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
*/
</style>

<style scoped>
.col {
  float: left;
  display: block;
  min-height: 30px;
  text-align: center;
  margin: 8px 0;
  padding: 8px 0; }

.col.col-1 {
  width: 4.16667%; }

.col.col-2 {
  width: 8.33333%; }

.col.col-3 {
  width: 12.5%; }

.col.col-4 {
  width: 16.66667%; }

.col.col-5 {
  width: 20.83333%; }

.col.col-6 {
  width: 25%; }

.col.col-7 {
  width: 29.16667%; }

.col.col-8 {
  width: 33.33333%; }

.col.col-9 {
  width: 37.5%; }

.col.col-10 {
  width: 41.66667%; }

.col.col-11 {
  width: 45.83333%; }

.col.col-12 {
  width: 50%; }

.col.col-13 {
  width: 54.16667%; }

.col.col-14 {
  width: 58.33333%; }

.col.col-15 {
  width: 62.5%; }

.col.col-16 {
  width: 66.66667%; }

.col.col-17 {
  width: 70.83333%; }

.col.col-18 {
  width: 75%; }

.col.col-19 {
  width: 79.16667%; }

.col.col-20 {
  width: 83.33333%; }

.col.col-21 {
  width: 87.5%; }

.col.col-22 {
  width: 91.66667%; }

.col.col-23 {
  width: 95.83333%; }

.col.col-24 {
  width: 100%; }

.col.col-offset-1 {
  margin-left: 4.16667%; }

.col.col-offset-2 {
  margin-left: 8.33333%; }

.col.col-offset-3 {
  margin-left: 12.5%; }

.col.col-offset-4 {
  margin-left: 16.66667%; }

.col.col-offset-5 {
  margin-left: 20.83333%; }

.col.col-offset-6 {
  margin-left: 25%; }

.col.col-offset-7 {
  margin-left: 29.16667%; }

.col.col-offset-8 {
  margin-left: 33.33333%; }

.col.col-offset-9 {
  margin-left: 37.5%; }

.col.col-offset-10 {
  margin-left: 41.66667%; }

.col.col-offset-11 {
  margin-left: 45.83333%; }

.col.col-offset-12 {
  margin-left: 50%; }

.col.col-offset-13 {
  margin-left: 54.16667%; }

.col.col-offset-14 {
  margin-left: 58.33333%; }

.col.col-offset-15 {
  margin-left: 62.5%; }

.col.col-offset-16 {
  margin-left: 66.66667%; }

.col.col-offset-17 {
  margin-left: 70.83333%; }

.col.col-offset-18 {
  margin-left: 75%; }

.col.col-offset-19 {
  margin-left: 79.16667%; }

.col.col-offset-20 {
  margin-left: 83.33333%; }

.col.col-offset-21 {
  margin-left: 87.5%; }

.col.col-offset-22 {
  margin-left: 91.66667%; }

.col.col-offset-23 {
  margin-left: 95.83333%; }

.col.col-offset-24 {
  margin-left: 100%; }

@media (min-width: 577px) {
  .col.col-ipad-1 {
    width: 4.16667%; }
  .col.col-ipad-2 {
    width: 8.33333%; }
  .col.col-ipad-3 {
    width: 12.5%; }
  .col.col-ipad-4 {
    width: 16.66667%; }
  .col.col-ipad-5 {
    width: 20.83333%; }
  .col.col-ipad-6 {
    width: 25%; }
  .col.col-ipad-7 {
    width: 29.16667%; }
  .col.col-ipad-8 {
    width: 33.33333%; }
  .col.col-ipad-9 {
    width: 37.5%; }
  .col.col-ipad-10 {
    width: 41.66667%; }
  .col.col-ipad-11 {
    width: 45.83333%; }
  .col.col-ipad-12 {
    width: 50%; }
  .col.col-ipad-13 {
    width: 54.16667%; }
  .col.col-ipad-14 {
    width: 58.33333%; }
  .col.col-ipad-15 {
    width: 62.5%; }
  .col.col-ipad-16 {
    width: 66.66667%; }
  .col.col-ipad-17 {
    width: 70.83333%; }
  .col.col-ipad-18 {
    width: 75%; }
  .col.col-ipad-19 {
    width: 79.16667%; }
  .col.col-ipad-20 {
    width: 83.33333%; }
  .col.col-ipad-21 {
    width: 87.5%; }
  .col.col-ipad-22 {
    width: 91.66667%; }
  .col.col-ipad-23 {
    width: 95.83333%; }
  .col.col-ipad-24 {
    width: 100%; }
  .col.col-offset-ipad-1 {
    margin-left: 4.16667%; }
  .col.col-offset-ipad-2 {
    margin-left: 8.33333%; }
  .col.col-offset-ipad-3 {
    margin-left: 12.5%; }
  .col.col-offset-ipad-4 {
    margin-left: 16.66667%; }
  .col.col-offset-ipad-5 {
    margin-left: 20.83333%; }
  .col.col-offset-ipad-6 {
    margin-left: 25%; }
  .col.col-offset-ipad-7 {
    margin-left: 29.16667%; }
  .col.col-offset-ipad-8 {
    margin-left: 33.33333%; }
  .col.col-offset-ipad-9 {
    margin-left: 37.5%; }
  .col.col-offset-ipad-10 {
    margin-left: 41.66667%; }
  .col.col-offset-ipad-11 {
    margin-left: 45.83333%; }
  .col.col-offset-ipad-12 {
    margin-left: 50%; }
  .col.col-offset-ipad-13 {
    margin-left: 54.16667%; }
  .col.col-offset-ipad-14 {
    margin-left: 58.33333%; }
  .col.col-offset-ipad-15 {
    margin-left: 62.5%; }
  .col.col-offset-ipad-16 {
    margin-left: 66.66667%; }
  .col.col-offset-ipad-17 {
    margin-left: 70.83333%; }
  .col.col-offset-ipad-18 {
    margin-left: 75%; }
  .col.col-offset-ipad-19 {
    margin-left: 79.16667%; }
  .col.col-offset-ipad-20 {
    margin-left: 83.33333%; }
  .col.col-offset-ipad-21 {
    margin-left: 87.5%; }
  .col.col-offset-ipad-22 {
    margin-left: 91.66667%; }
  .col.col-offset-ipad-23 {
    margin-left: 95.83333%; }
  .col.col-offset-ipad-24 {
    margin-left: 100%; } }

@media (min-width: 769px) {
  .col.col-narrow-pc-1 {
    width: 4.16667%; }
  .col.col-narrow-pc-2 {
    width: 8.33333%; }
  .col.col-narrow-pc-3 {
    width: 12.5%; }
  .col.col-narrow-pc-4 {
    width: 16.66667%; }
  .col.col-narrow-pc-5 {
    width: 20.83333%; }
  .col.col-narrow-pc-6 {
    width: 25%; }
  .col.col-narrow-pc-7 {
    width: 29.16667%; }
  .col.col-narrow-pc-8 {
    width: 33.33333%; }
  .col.col-narrow-pc-9 {
    width: 37.5%; }
  .col.col-narrow-pc-10 {
    width: 41.66667%; }
  .col.col-narrow-pc-11 {
    width: 45.83333%; }
  .col.col-narrow-pc-12 {
    width: 50%; }
  .col.col-narrow-pc-13 {
    width: 54.16667%; }
  .col.col-narrow-pc-14 {
    width: 58.33333%; }
  .col.col-narrow-pc-15 {
    width: 62.5%; }
  .col.col-narrow-pc-16 {
    width: 66.66667%; }
  .col.col-narrow-pc-17 {
    width: 70.83333%; }
  .col.col-narrow-pc-18 {
    width: 75%; }
  .col.col-narrow-pc-19 {
    width: 79.16667%; }
  .col.col-narrow-pc-20 {
    width: 83.33333%; }
  .col.col-narrow-pc-21 {
    width: 87.5%; }
  .col.col-narrow-pc-22 {
    width: 91.66667%; }
  .col.col-narrow-pc-23 {
    width: 95.83333%; }
  .col.col-narrow-pc-24 {
    width: 100%; }
  .col.col-offset-narrow-pc-1 {
    margin-left: 4.16667%; }
  .col.col-offset-narrow-pc-2 {
    margin-left: 8.33333%; }
  .col.col-offset-narrow-pc-3 {
    margin-left: 12.5%; }
  .col.col-offset-narrow-pc-4 {
    margin-left: 16.66667%; }
  .col.col-offset-narrow-pc-5 {
    margin-left: 20.83333%; }
  .col.col-offset-narrow-pc-6 {
    margin-left: 25%; }
  .col.col-offset-narrow-pc-7 {
    margin-left: 29.16667%; }
  .col.col-offset-narrow-pc-8 {
    margin-left: 33.33333%; }
  .col.col-offset-narrow-pc-9 {
    margin-left: 37.5%; }
  .col.col-offset-narrow-pc-10 {
    margin-left: 41.66667%; }
  .col.col-offset-narrow-pc-11 {
    margin-left: 45.83333%; }
  .col.col-offset-narrow-pc-12 {
    margin-left: 50%; }
  .col.col-offset-narrow-pc-13 {
    margin-left: 54.16667%; }
  .col.col-offset-narrow-pc-14 {
    margin-left: 58.33333%; }
  .col.col-offset-narrow-pc-15 {
    margin-left: 62.5%; }
  .col.col-offset-narrow-pc-16 {
    margin-left: 66.66667%; }
  .col.col-offset-narrow-pc-17 {
    margin-left: 70.83333%; }
  .col.col-offset-narrow-pc-18 {
    margin-left: 75%; }
  .col.col-offset-narrow-pc-19 {
    margin-left: 79.16667%; }
  .col.col-offset-narrow-pc-20 {
    margin-left: 83.33333%; }
  .col.col-offset-narrow-pc-21 {
    margin-left: 87.5%; }
  .col.col-offset-narrow-pc-22 {
    margin-left: 91.66667%; }
  .col.col-offset-narrow-pc-23 {
    margin-left: 95.83333%; }
  .col.col-offset-narrow-pc-24 {
    margin-left: 100%; } }

@media (min-width: 993px) {
  .col.col-pc-1 {
    width: 4.16667%; }
  .col.col-pc-2 {
    width: 8.33333%; }
  .col.col-pc-3 {
    width: 12.5%; }
  .col.col-pc-4 {
    width: 16.66667%; }
  .col.col-pc-5 {
    width: 20.83333%; }
  .col.col-pc-6 {
    width: 25%; }
  .col.col-pc-7 {
    width: 29.16667%; }
  .col.col-pc-8 {
    width: 33.33333%; }
  .col.col-pc-9 {
    width: 37.5%; }
  .col.col-pc-10 {
    width: 41.66667%; }
  .col.col-pc-11 {
    width: 45.83333%; }
  .col.col-pc-12 {
    width: 50%; }
  .col.col-pc-13 {
    width: 54.16667%; }
  .col.col-pc-14 {
    width: 58.33333%; }
  .col.col-pc-15 {
    width: 62.5%; }
  .col.col-pc-16 {
    width: 66.66667%; }
  .col.col-pc-17 {
    width: 70.83333%; }
  .col.col-pc-18 {
    width: 75%; }
  .col.col-pc-19 {
    width: 79.16667%; }
  .col.col-pc-20 {
    width: 83.33333%; }
  .col.col-pc-21 {
    width: 87.5%; }
  .col.col-pc-22 {
    width: 91.66667%; }
  .col.col-pc-23 {
    width: 95.83333%; }
  .col.col-pc-24 {
    width: 100%; }
  .col.col-offset-pc-1 {
    margin-left: 4.16667%; }
  .col.col-offset-pc-2 {
    margin-left: 8.33333%; }
  .col.col-offset-pc-3 {
    margin-left: 12.5%; }
  .col.col-offset-pc-4 {
    margin-left: 16.66667%; }
  .col.col-offset-pc-5 {
    margin-left: 20.83333%; }
  .col.col-offset-pc-6 {
    margin-left: 25%; }
  .col.col-offset-pc-7 {
    margin-left: 29.16667%; }
  .col.col-offset-pc-8 {
    margin-left: 33.33333%; }
  .col.col-offset-pc-9 {
    margin-left: 37.5%; }
  .col.col-offset-pc-10 {
    margin-left: 41.66667%; }
  .col.col-offset-pc-11 {
    margin-left: 45.83333%; }
  .col.col-offset-pc-12 {
    margin-left: 50%; }
  .col.col-offset-pc-13 {
    margin-left: 54.16667%; }
  .col.col-offset-pc-14 {
    margin-left: 58.33333%; }
  .col.col-offset-pc-15 {
    margin-left: 62.5%; }
  .col.col-offset-pc-16 {
    margin-left: 66.66667%; }
  .col.col-offset-pc-17 {
    margin-left: 70.83333%; }
  .col.col-offset-pc-18 {
    margin-left: 75%; }
  .col.col-offset-pc-19 {
    margin-left: 79.16667%; }
  .col.col-offset-pc-20 {
    margin-left: 83.33333%; }
  .col.col-offset-pc-21 {
    margin-left: 87.5%; }
  .col.col-offset-pc-22 {
    margin-left: 91.66667%; }
  .col.col-offset-pc-23 {
    margin-left: 95.83333%; }
  .col.col-offset-pc-24 {
    margin-left: 100%; } }

@media (min-width: 1201px) {
  .col.col-wide-pc-1 {
    width: 4.16667%; }
  .col.col-wide-pc-2 {
    width: 8.33333%; }
  .col.col-wide-pc-3 {
    width: 12.5%; }
  .col.col-wide-pc-4 {
    width: 16.66667%; }
  .col.col-wide-pc-5 {
    width: 20.83333%; }
  .col.col-wide-pc-6 {
    width: 25%; }
  .col.col-wide-pc-7 {
    width: 29.16667%; }
  .col.col-wide-pc-8 {
    width: 33.33333%; }
  .col.col-wide-pc-9 {
    width: 37.5%; }
  .col.col-wide-pc-10 {
    width: 41.66667%; }
  .col.col-wide-pc-11 {
    width: 45.83333%; }
  .col.col-wide-pc-12 {
    width: 50%; }
  .col.col-wide-pc-13 {
    width: 54.16667%; }
  .col.col-wide-pc-14 {
    width: 58.33333%; }
  .col.col-wide-pc-15 {
    width: 62.5%; }
  .col.col-wide-pc-16 {
    width: 66.66667%; }
  .col.col-wide-pc-17 {
    width: 70.83333%; }
  .col.col-wide-pc-18 {
    width: 75%; }
  .col.col-wide-pc-19 {
    width: 79.16667%; }
  .col.col-wide-pc-20 {
    width: 83.33333%; }
  .col.col-wide-pc-21 {
    width: 87.5%; }
  .col.col-wide-pc-22 {
    width: 91.66667%; }
  .col.col-wide-pc-23 {
    width: 95.83333%; }
  .col.col-wide-pc-24 {
    width: 100%; }
  .col.col-offset-wide-pc-1 {
    margin-left: 4.16667%; }
  .col.col-offset-wide-pc-2 {
    margin-left: 8.33333%; }
  .col.col-offset-wide-pc-3 {
    margin-left: 12.5%; }
  .col.col-offset-wide-pc-4 {
    margin-left: 16.66667%; }
  .col.col-offset-wide-pc-5 {
    margin-left: 20.83333%; }
  .col.col-offset-wide-pc-6 {
    margin-left: 25%; }
  .col.col-offset-wide-pc-7 {
    margin-left: 29.16667%; }
  .col.col-offset-wide-pc-8 {
    margin-left: 33.33333%; }
  .col.col-offset-wide-pc-9 {
    margin-left: 37.5%; }
  .col.col-offset-wide-pc-10 {
    margin-left: 41.66667%; }
  .col.col-offset-wide-pc-11 {
    margin-left: 45.83333%; }
  .col.col-offset-wide-pc-12 {
    margin-left: 50%; }
  .col.col-offset-wide-pc-13 {
    margin-left: 54.16667%; }
  .col.col-offset-wide-pc-14 {
    margin-left: 58.33333%; }
  .col.col-offset-wide-pc-15 {
    margin-left: 62.5%; }
  .col.col-offset-wide-pc-16 {
    margin-left: 66.66667%; }
  .col.col-offset-wide-pc-17 {
    margin-left: 70.83333%; }
  .col.col-offset-wide-pc-18 {
    margin-left: 75%; }
  .col.col-offset-wide-pc-19 {
    margin-left: 79.16667%; }
  .col.col-offset-wide-pc-20 {
    margin-left: 83.33333%; }
  .col.col-offset-wide-pc-21 {
    margin-left: 87.5%; }
  .col.col-offset-wide-pc-22 {
    margin-left: 91.66667%; }
  .col.col-offset-wide-pc-23 {
    margin-left: 95.83333%; }
  .col.col-offset-wide-pc-24 {
    margin-left: 100%; } }

</style>