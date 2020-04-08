<template>
  <section class="a-toast-wrapper" ref="toast" :class="clazz">
    <div class="a-toast-inner">
      <span class="a-toast-massage" v-if="enableHtml" v-html="message" />
      <span class="a-toast-massage" v-else v-text="message" />

      <span
        v-if="showClose && closeText"
        ref="close-box"
        @click="onClickClose"
        class="a-toast-close-box"
      >
        {{ closeText }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      required: true
    },
    durition: {
      type: Number,
      default: 3
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: "确定"
    },
    onClose: {
      type: Function
    },
    position: {
      type: String,
      default: "top",
      validtor(v) {
        return ["top", "middle", "bottom"].includes(v);
      }
    }
  },
  computed: {
    clazz() {
      return [`a-toast-position-${this.position}`];
    },
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
  data() {
    return {
      timer: null,
      closed: false,
    };
  },
  methods: {
    updateStyles() {
      if (!this.showClose) { return; }
      this.$nextTick(() => {
        let height = this.$refs.toast.getBoundingClientRect().height;
        this.$refs['close-box'].style.height = `${height}px`;
        this.$refs['close-box'].style.lineHeight = `${height}px`;
      });
    },
    execAutoClose() {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.remove();
        }, this.durition * 1000);
      }
    },
    remove() {
      if (this.closed) { return; }
      /**
       * closed 状态可以避免 onClose 中再次调用 toast 时导致的循环调用
       */
      this.closed = true;
      clearTimeout(this.timer);
      this.closeText && this.onClose && this.onClose();
      this.$el.remove();
      // destroy 并不会把元素删掉，所以要自己手动删掉
      this.$destroy();
    },
    onClickClose() {
      this.remove();
    }
  }
};
</script>

<style lang="less" scoped>
@font-size: 14px;
@toast-min-height: 40px;
@toast-bg: rgba(0, 0, 0, 0.75);
@animation-duration: 300ms;
@keyframes slide-up {
  0% { opacity: 0; transform: translateY(100%); }
  100% { opacity: 1; transform: translateY(0%); }
}
@keyframes slide-down {
  0% { opacity: 0; transform: translateY(-100%); }
  100% { opacity: 1; transform: translateY(0%); }
}
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.a-toast-wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  &.a-toast-position-top {
    top: 15px;
    .a-toast-inner {
      animation: slide-down @animation-duration;
    }
  }
  &.a-toast-position-middle {
    top: 50%;
    transform: translateX(-50%);
    .a-toast-inner {
      animation: fade-in @animation-duration;
    }
  }
  &.a-toast-position-bottom {
    bottom: 15px;

    .a-toast-inner {
      animation: slide-up @animation-duration;
    }
  }
}

.a-toast-inner {
  font-size: @font-size;
  background-color: @toast-bg;
  min-height: @toast-min-height;
  line-height: 1.8;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  
  display: flex;
  align-items: center;

  .a-toast-massage {
    padding: 8px 16px;
  }

  .a-toast-close-box {
    border-left: 1px solid #666;
    padding: 0 16px;
    cursor: pointer;
  }
}
</style>
