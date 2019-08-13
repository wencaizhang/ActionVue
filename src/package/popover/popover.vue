<template>
  <div class="a-popover" @click.stop="onClick">
    <div v-if="visible" class="a-popover-content" @click.stop>
      <slot name="content" />
    </div>
    <div class="a-popover-reference" ref="reference">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
    }
  },
  mounted () {
    this.listenDocClick();
  },
  methods: {
    listenDocClick () {
      // 点击 外面 关闭 popover
      document.addEventListener('click', e => {
        // console.log('doc click');
        // console.log(e.target);
        // this.$refs.reference
        this.visible = false;
      })
    },
    onClick () {
      console.log('popover click');
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="scss" scoped>
.a-popover {
  position: relative;
  display: inline-block;

  .a-popover-content {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    border: 1px solid #333;
  }
}
</style>