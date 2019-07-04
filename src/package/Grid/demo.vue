<template>
  <div class="grid-demo-wrapper">

    <h3>响应式</h3>
    <demo5 />

    <h3>基础栅格</h3>
    <demo1 />

    <h3>栅格间距</h3>
    <demo2 />

    <h3>左右偏移</h3>
    <demo3 />

    <h3>Flex 布局</h3>
    <demo4 />

  </div>
</template>

<script>
import demo1 from './demos/demo1'
import demo2 from './demos/demo2'
import demo3 from './demos/demo3'
import demo4 from './demos/demo4'
import demo5 from './demos/demo5'
export default {
  components: {
    demo1,
    demo2,
    demo3,
    demo4,
    demo5,
  }
};
</script>

<style>
.grid-demo-wrapper {
  width: 800px;
}
.grid-demo-wrapper .col {
  color: #fff;
}
.grid-demo-wrapper h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}
.grid-demo-wrapper .col:nth-child(2n) {
  background: #00a0e9;
}
.grid-demo-wrapper .col:nth-child(2n + 1) {
  background: rgba(0, 160, 233, 0.7);
}
</style>
