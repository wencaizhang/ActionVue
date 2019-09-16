<template>
  <div class="anim-demo2-wrapper">
    <div>
      <a-button @click="show1 = !show1">显示动画</a-button>
      <transition name="a-slide-up">
        <div v-show="show1" class="transition-box-demo2">向上</div>
      </transition>
    </div>
    <div>
      <a-button @click="show2 = !show2">显示动画</a-button>
      <transition name="a-slide-down">
        <div v-show="show2" class="transition-box-demo2">向下</div>
      </transition>
    </div>
    <div>
      <a-button @click="show3 = !show3">显示动画</a-button>
      <transition name="a-slide-left">
        <div v-show="show3" class="transition-box-demo2">向左</div>
      </transition>
    </div>
    <div>
      <a-button @click="show4 = !show4">显示动画</a-button>
      <transition name="a-slide-right">
        <div v-show="show4" class="transition-box-demo2">向右</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    show1: true,
    show2: true,
    show3: true,
    show4: true
  })
};
</script>
<style>
.transition-box-demo2 {
  margin-bottom: 10px;
  height: 100px;
  line-height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}
.anim-demo2-wrapper {
  display: flex;
  justify-content: space-between;
}
.anim-demo2-wrapper > div {
  width: 22%;
}
</style>