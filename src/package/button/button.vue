<template>
  <button
    class="a-button"
    :class="clazz"
    @click="$emit('click')"
  >
    <slot name="icon">
      <icon
        v-if="loading || icon"
        class="icon"
        :class="{loading: loading}"
        :type="loading ? 'loading' : icon"
      />
    </slot>
    <div class="a-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import icon from '../icon/icon'
export default {
  name: 'a-button',
  components: {
    icon,
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
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
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    clazz () {
      const { type, loading, iconPosition, icon, block, disabled } = this;
      const typeList = [ 'primary', 'default', 'dashed', 'danger' ]
      return {
        [`icon-${iconPosition}`]: icon ? true : false,
        [`a-button-${type}`]: typeList.includes(type),
        ['a-button-block']: block,
        ['a-button-disabled']: disabled
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// @import "var";

$border-color-hover: #666;
$border-color: rgb(217, 217, 217);
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

$primary-color: #1890ff;                         // 全局主色
$link-color: #1890ff;                            // 链接色
$success-color: #52c41a;                         // 成功色
$warning-color: #faad14;                         // 警告色
$error-color: #f5222d;                           // 错误色
$font-size-base: 14px;                             // 主字号
$heading-color: rgba(0, 0, 0, .85);              // 标题色
$text-color: rgba(0, 0, 0, .65);                 // 主文本色
$text-color-secondary : rgba(0, 0, 0, .45);      // 次文本色
$disabled-color : rgba(0, 0, 0, .25);            // 失效色
$border-radius-base: 4px;                          // 组件/浮层圆角
$border-color-base: #d9d9d9;                     // 边框色
$box-shadow-base: 0 2px 8px rgba(0, 0, 0, .15);  // 浮层阴影

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
  position: relative;
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
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
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
    color: $primary-color;
    border-color: $primary-color;
  }
  &:active {
    top: 1px;
  }
  &:focus {
    outline: none;
  }

  &.a-button-dashed {
    border-style: dashed;
  }
  &.a-button-primary {
    background-color: $primary-color;
    border-color: $primary-color;
    color: #fff;
    &:hover {
      color: #fff;
      background-color: #40a9ff;
      border-color: #40a9ff;
    }
  }
  &.a-button-danger {
    background-color: #f5f5f5;
    color: $error-color;
    &:hover {
      border-color: $error-color;
      background-color: $error-color;
      color: #fff;
    }
  }
  &.a-button-block {
    display: block;
    width: 100%;
  }
  .loading {
    animation: spin 1s infinite linear;
  }
  &.a-button-disabled,
  &.a-button-disabled:hover,
  &.a-button-disabled:focus {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
