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
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style lang="scss" scoped>
$siderWidth: 200px;

.a-layout-sider {
  width: $siderWidth;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  margin-left: -$siderWidth;
}
</style>
