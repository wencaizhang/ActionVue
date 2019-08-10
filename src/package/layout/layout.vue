<template>
  <div class="a-layout" :class="layoutClazz">
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      layoutClazz: {
        'a-layout-has-sider': false
      },
      hasSider: false,
    }
  },
  mounted () {
    this.layoutClazz['a-layout-has-sider'] = this.$children.some(item => item.$options.name === 'a-layout-sider')
  }
}
</script>

<style lang="scss" scoped>
.a-layout {
  display: flex;
  flex: auto;
  flex-direction: column;

  &.a-layout-has-sider {
    flex-direction: row;
  }
}
</style>
