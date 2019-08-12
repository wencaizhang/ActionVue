<template>
  <div class="a-layout" :class="layoutClazz">
    <slot />
  </div>
</template>

<script>
import util from "../../utils/util";

export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    }
  },
  watch: {
    collapsed () {
      this.setCollapsed()
    }
  },
  mounted () {
    this.childSidebar = util.findComponentDownward(this, 'a-layout-sider');
    this.layoutClazz['a-layout-has-sider'] = this.$children.some(item => item.$options.name === 'a-layout-sider')
    this.setCollapsed();
  },
  data () {
    return {
      layoutClazz: {
        'a-layout-has-sider': false
      },
      childSidebar: null,
    }
  },
  methods: {
    setCollapsed () {
      if (this.childSidebar) { this.childSidebar.$data.collapsed = this.collapsed; }
    }
  }
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
