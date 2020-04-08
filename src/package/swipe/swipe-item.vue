<template>
  <transition name="slide">
    <div v-show="visible" key="name" class="a-swipe-item" :class="{ 'animation-reverse': reverse }">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "a-swipe-item",
  props: {
    name: [String, Number],
    required: true,
  },
  data() {
    return {
      visible: false,
      reverse: false,
    };
  }
};
</script>

<style lang="less" scoped>
.a-swipe-item {
  width: 100%;
}

.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all .5s ease;
}

.slide-enter {
  transform: translateX(100%);
  &.animation-reverse {
    transform: translateX(-100%);
  }
}
.slide-leave-to {
  transform: translateX(-100%);
  &.animation-reverse {
    transform: translateX(100%);
  }
}
</style>
