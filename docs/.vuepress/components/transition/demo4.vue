<template>
  <div class="anim-demo4-wrapper">
    <div>
      <a-button @click="show0 = !show0">居中折叠</a-button>
      <transition name="a-fold">
        <div v-show="show0" class="transition-box-demo">居中折叠</div>
      </transition>
    </div>
    <div>
      <a-button @click="show1 = !show1">向上折叠</a-button>
      <transition name="a-fold-up">
        <div v-show="show1" class="transition-box-demo">向上折叠</div>
      </transition>
    </div>
    <div>
      <a-button @click="show2 = !show2">向下折叠</a-button>
      <transition name="a-fold-down">
        <div v-show="show2" class="transition-box-demo">向下折叠</div>
      </transition>
    </div>
    <div>
      <a-button @click="show3 = !show3">向左折叠</a-button>
      <transition name="a-fold-left">
        <div v-show="show3" class="transition-box-demo">向左折叠</div>
      </transition>
    </div>
    <div>
      <a-button @click="show4 = !show4">向右折叠</a-button>
      <transition name="a-fold-right">
        <div v-show="show4" class="transition-box-demo">向右折叠</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    show0: true,
    show1: true,
    show2: true,
    show3: true,
    show4: true,
  }),
};
</script>
<style>
.transition-box-demo {
  margin-bottom: 10px;
  height: 100px;
  line-height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}
.anim-demo4-wrapper {
  display: flex;
  justify-content: space-between;
}
.anim-demo4-wrapper > div {
  width: 18%;
}
</style>