<template>
  <section class="a-spin" :class="clazz">
    <div v-show="spinning" class="spinning">
      <slot name="indicator">
        <span class="spin-dot spin-dot-spin">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </slot>
      <div class="a-spin-tip">{{ tip }}</div>
    </div>
    <div v-if="this.$slots.default" class="a-spin-container" :class="{ 'a-spin-blur': spinning }">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "a-spin",
  data() {
    return {};
  },
  props: {
    spinning: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'default',
      validator (v) {
        return [ 'small', 'default', 'large' ].includes(v);
      }
    },
    tip: {
      type: String,
    }
  },
  computed: {
    clazz () {
      return {
        'a-spin-sm': this.size === 'small',
        'a-spin-lg': this.size === 'large',
        'a-spin-has-slot': this.$slots.default,
      }
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
$primary-color: #1890ff;
.a-spin {
  position: relative;
  display: inline-block;

  &.a-spin-has-slot {

    .spinning {
      position: absolute;
      height: 100%;
      max-height: 400px;
      width: 100%;
      z-index: 4;
    }
  }
  .spinning {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &.a-spin-sm {
    .spin-dot {
      font-size: 14px;
      width: 14px;
      height: 14px;
      i {
        width: 6px;
        height: 6px;
      }
    }
  }
  &.a-spin-lg {
    .spin-dot {
      font-size: 32px;
      width: 32px;
      height: 32px;
      i {
        width: 14px;
        height: 14px;
      }
    }
  }
}
.a-spin-tip {
  color: $primary-color;
}
.a-spin-blur {
  pointer-events: none;
  user-select: none;
  overflow: hidden;
  opacity: 0.5;
}
.spin-dot {
  animation: antRotate 1.2s infinite linear;
  transform: rotate(45deg);
  position: relative;
  display: inline-block;
  font-size: 20px;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
}

.spin-dot i {
  width: 9px;
  height: 9px;
  position: absolute;
  display: block;
  background-color: #1890ff;
  border-radius: 100%;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  opacity: 0.3;
  animation: antSpinMove 1s infinite linear alternate;
}

.spin-dot i:nth-child(1) {
  top: 0;
  left: 0;
}

.spin-dot i:nth-child(2) {
  top: 0;
  right: 0;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.spin-dot i:nth-child(3) {
  right: 0;
  bottom: 0;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.spin-dot i:nth-child(4) {
  bottom: 0;
  left: 0;
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}

@keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@-webkit-keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}

@-webkit-keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
</style>