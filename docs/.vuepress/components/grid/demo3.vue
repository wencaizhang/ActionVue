<template>
  <div class="grid-demo grid-demo-wrapper-3">
    <a-row>
      <a-col :span="8">col-8</a-col>
      <a-col :span="8" :offset="8">col-8 col-offset-8</a-col>
    </a-row>
    <a-row>
      <a-col :span="6" :offset="6">col-6 col-offset-6</a-col>
      <a-col :span="6" :offset="6">col-6 col-offset-6</a-col>
    </a-row>
    <a-row>
      <a-col :span="12" :offset="6">col-12 col-offset-6</a-col>
    </a-row>
  </div>
</template>

<style>
.grid-demo-wrapper-3 .col {
  color: #fff;
}
.grid-demo-wrapper-3 .row {
  background: #f5f5f5;
}
.grid-demo-wrapper-3 h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}
.grid-demo-wrapper-3 .col:nth-child(2n) {
  background: #00a0e9;
}
.grid-demo-wrapper-3 .col:nth-child(2n + 1) {
  background: rgba(0, 160, 233, 0.7);
}
</style>
