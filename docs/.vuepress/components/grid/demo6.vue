<template>
  <div class="grid-demo grid-demo-wrapper-6">
    <a-row type="flex">
      <a-col :span="6" :order="4">1 col-order-4</a-col>
      <a-col :span="6" :order="3">2 col-order-3</a-col>
      <a-col :span="6" :order="2">3 col-order-2</a-col>
      <a-col :span="6" :order="1">4 col-order-1</a-col>
    </a-row>
  </div>
</template>

<style>
.grid-demo-wrapper-6 .row {
  background-color: #f5f5f5;
}
.grid-demo-wrapper-6 .col {
  color: #fff;
}
.grid-demo-wrapper-6 h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}
.grid-demo-wrapper-6 .col:nth-child(2n){
  background: #00a0e9;
}
.grid-demo-wrapper-6 .col:nth-child(2n + 1){
  background: rgba(0, 160, 233, 0.7);
}
</style>
