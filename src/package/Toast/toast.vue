<template>
  <section class="toast" :style="styles">
    <slot></slot>
    <span class="close" v-if="closeText">
      <span @click="onClickClose">{{ closeText }}</span>
    </span>
  </section>
</template>

<script>
export default {
  name: 'Toast',
  components: {},
  props: {
    durition: {
      type: Number,
      default: 3
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
    closeText: {
      type: String,
      default: '确定',
    },
    close: {
      type: Function,
    },
    position: {
      type: String,
      default: 'top',
      validtor (v) {
        return ['top', 'middle', 'bottom'].includes(v);
      }
    }
  },
  computed: {
    styles () {
      const map = {
        top: { top: '15px' },
        middle: { top: '50%' },
        bottom: { bottom: '15px' },
      }
      return map[this.position]
    }
  },
  mounted () {
    if (this.autoClose) {
      setTimeout(() => {
        this.remove()
      }, this.durition * 1000)
    }
  },
  data () {
    return {}
  },
  methods: {
    remove () {
      this.$el.remove()
      // destroy 并不会把元素删掉，所以要自己手动删掉
      this.$destroy()
    },
    onClickClose () {
      this.remove()
      this.closeText && this.close && this.close();
    },
  }
}
</script>

<style scoped >
/* $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75); */

.toast {
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;

  position: fixed;
  left: 50%;
  z-index: 100;

  display: flex;
  align-items: center;

  transform: translate(-50%);
  line-height: 1.8;
  padding: 5px 16px;
  border-radius: 4px;
}

.close {
  flex-shrink: 0;
  display: inline-block;
  border-left: 1px solid #666;
  margin-left: 8px;
  padding-left: 8px;
}
</style>
