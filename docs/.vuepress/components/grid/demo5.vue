<template>
  <div class="grid-demo grid-demo-wrapper-5">
    <p>Align: flex-start</p>
    <a-row type="flex" align="flex-start" justify="center">
      <a-col :span="4">
        <p class="height-100">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-80">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-120">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-50">col-4</p>
      </a-col>
    </a-row>
    <p>Align: center</p>
    <a-row type="flex" align="center" justify="space-around">
      <a-col :span="4">
        <p class="height-100">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-80">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-120">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-50">col-4</p>
      </a-col>
    </a-row>
    <p>Align: flex-end</p>
    <a-row type="flex" align="flex-end" justify="space-between">
      <a-col :span="4">
        <p class="height-100">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-80">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-120">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-50">col-4</p>
      </a-col>
    </a-row>
  </div>
</template>

<style>
.grid-demo .row {
  text-align: center;
}
.grid-demo .row {
  background-color: #f5f5f5;
}
.grid-demo-wrapper-5 .col {
  color: #fff;
}
.grid-demo-wrapper-5 h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}
.grid-demo-wrapper-5 .col:nth-child(2n) p{
  background: #00a0e9;
}
.grid-demo-wrapper-5 .col:nth-child(2n + 1) p{
  background: rgba(0, 160, 233, 0.7);
}

.grid-demo-wrapper-5 p{
  width: 100%;
}
.grid-demo-wrapper-5 .height-100 {
  height: 100px;
  line-height: 100px;
}
.grid-demo-wrapper-5 .height-50 {
  height: 50px;
  line-height: 50px;
}
.grid-demo-wrapper-5 .height-120 {
  height: 120px;
  line-height: 120px;
}
.grid-demo-wrapper-5 .height-80 {
  height: 80px;
  line-height: 80px;
}
</style>
