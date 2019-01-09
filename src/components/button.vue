<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <slot name="icon">
      <svg v-if="icon" class="icon">
        <use :xlink:href="`#i-${icon}`"></use>
      </svg>
    </slot>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'g-button',
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
:root {
  --font-size: 14px;
  --button-height: 32px;
  --color: #333;
  --button-bg: #fff;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --border-color: #999;
  --border-color-hover: #666;
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  color: var(--color);
  background-color: var(--button-bg);
  border: 1px solid;
  border-color: var(--border-color);
  border-radius: var(--border-radius);
  padding: 0 1em;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin: 0 .1em 0 0;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin: 0 0 0 .1em;
    }
  }
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
.icon {
  width: 1em;
  height: 1em;
}
</style>
