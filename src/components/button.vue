<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <slot name="icon">
      <icon v-if="loading || icon" class="icon" :class="{loading: loading}" :name="loading ? 'loading' : icon" />
    </slot>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import icon from './icon'
export default {
  name: 'g-button',
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

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
    margin: 0 .2em 0 0;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin: 0 0 0 .2em;
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


  .loading {
    animation: spin 1s infinite linear;
  }
}
.icon {
  width: 1em;
  height: 1em;
}
</style>
