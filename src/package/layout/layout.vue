<template>
  <div class="a-layout" :class="layoutClazz">
    <slot />
  </div>
</template>

<script>
export default {
  mounted () {
    this.layoutClazz['a-layout-has-sider'] = this.$children.some(item => item.$options.name === 'a-layout-sider')
  },
  data () {
    return {
      layoutClazz: {
        'a-layout-has-sider': false
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.a-layout {
  display: flex;
  flex: auto;
  flex-direction: column;

  overflow: hidden;

  &.a-layout-has-sider {
    flex-direction: row;
  }
}
</style>
