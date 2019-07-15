<template>
  <button class="a-button" :class="{[`icon-${iconPosition}`]: true}">
    <slot name="icon">
      <icon v-if="loading || icon" class="icon" :class="{loading: loading}" :name="loading ? 'loading' : icon" />
    </slot>
    <div class="a-button-content" @click="$emit('click')">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import icon from '../icon/icon'
export default {
  name: 'a-button',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (v) {
        return v === 'left' || v === 'right'
      }
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped>
// @import "var";

$border-color-hover: #666;
$border-color: #999;
$border-color-light: lighten($border-color, 30%);
$border-radius: 4px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$button-active-bg: #eee;
$button-bg: white;
$button-height: 32px;
$color: #333;
$light-color: #666;
$font-size: 14px;
$small-font-size: 12px;
$input-height: 32px;
$red: #F1453D;
$grey: #eee;
$blue: #4a90e2;
.box-shadow {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@mixin spin {
  animation: spin 2s infinite linear;
}

.a-button {
  font-size: $font-size;
  height: $button-height;
  color: $color;
  background-color: $button-bg;
  border: 1px solid;
  border-color: $border-color;
  border-radius: $border-radius;
  padding: 0 1em;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

      margin-right: 8px;
    margin-bottom: 12px;
    
  > .a-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin: 0 .2em 0 0;
  }
  &.icon-right {
    > .a-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin: 0 0 0 .2em;
    }
  }
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>
