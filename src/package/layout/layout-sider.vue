<template>
  <transition name="slide">
    <div v-show="collapsed" class="a-layout-sider">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "a-layout-sider",
  data() {
    return {
      collapsed: true,
      siderWidth: 0
    };
  },
  mounted() {
    this.getSiderWidth();
  },
  methods: {
    getSiderWidth() {
      let { width } = this.$el.getBoundingClientRect();
      this.siderWidth = width;
    }
  }
};
</script>

<style lang="scss" scoped>
$siderWidth: 200px;

.a-layout-sider {
  width: $siderWidth;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  // cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-enter,
.slide-leave-to {
  margin-left: -$siderWidth;
}
</style>
