<template>
  <div class="a-popover" @click="onClick">
    <div v-if="visible" class="a-popover-content">
      <slot name="content" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
    }
  },
  methods: {
    onClick () {
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