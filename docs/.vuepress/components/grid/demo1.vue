<template>
  <div class="grid-demo-wrapper-1">
    <a-row>
      <a-col :span="12">col-12</a-col>
      <a-col :span="12">col-12</a-col>
    </a-row>
    <a-row>
      <a-col :span="8">col-8</a-col>
      <a-col :span="8">col-8</a-col>
      <a-col :span="8">col-8</a-col>
    </a-row>
    <a-row>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
    </a-row>
  </div>
</template>

<style>
.grid-demo-wrapper-1 .col {
  color: #fff;
}
.grid-demo-wrapper-1 h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}
.grid-demo-wrapper-1 .col:nth-child(2n) {
  background: #00a0e9;
}
.grid-demo-wrapper-1 .col:nth-child(2n + 1) {
  background: rgba(0, 160, 233, 0.7);
}
</style>
