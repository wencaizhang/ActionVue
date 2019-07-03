<template>
  <section class="toast">
    <slot></slot>

    <span class="close" v-if="closeButton">
      <span @click="onClickClose">{{ closeButton.text }}</span>
    </span>
  </section>
</template>

<script>
export default {
  name: 'Toast',
  components: {},
  props: {
    autoClose: {
      type: Boolean,
      default: false
    },
    durition: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default () {
        return {
          text: '知道了',
          callback: undefined
        }
      }
    }
  },
  computed: {},
  mounted () {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.durition * 1000)
    }
  },
  data () {
    return {}
  },
  methods: {
    close () {
      this.$el.remove()
      // destroy 并不会把元素删掉，所以要自己手动删掉
      this.$destroy()
    },
    onClickClose () {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
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
  top: 15px;
  transform: translate(-50%);
  line-height: 1.8;
  padding: 5px 16px;
  display: flex;
  align-items: center;
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
