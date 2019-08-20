<template>
  <section class="a-spin">
    <div v-if="spinning" class="spinning">
      <span class="loading-dot loading-dot-spin">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
    <slot />
  </section>
</template>

<script>
export default {
  name: "a-spin",
  data() {
    return {};
  },
  props: {
    spinning: {
      type: Boolean,
      default: true
    }
  },
  methods: {}
};
</script>

  <style>
.loading-dot {
  animation: antRotate 1.2s infinite linear;
  transform: rotate(45deg);
  position: relative;
  display: inline-block;
  font-size: 64px;
  width: 64px;
  height: 64px;
  box-sizing: border-box;
}

.loading-dot i {
  width: 22px;
  height: 22px;
  position: absolute;
  display: block;
  background-color: #1890ff;
  border-radius: 100%;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  opacity: 0.3;
  animation: antSpinMove 1s infinite linear alternate;
}

.loading-dot i:nth-child(1) {
  top: 0;
  left: 0;
}

.loading-dot i:nth-child(2) {
  top: 0;
  right: 0;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.loading-dot i:nth-child(3) {
  right: 0;
  bottom: 0;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.loading-dot i:nth-child(4) {
  bottom: 0;
  left: 0;
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}

@keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@-webkit-keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}

@-webkit-keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
</style>