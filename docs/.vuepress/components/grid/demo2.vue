<template>
  <div class="grid-demo grid-demo-wrapper-2">
    <a-row :gutter="24">
      <a-col :span="12"><div class="gutter-box">col-12</div></a-col>
      <a-col :span="12"><div class="gutter-box">col-12</div></a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :span="8"><div class="gutter-box">col-8</div></a-col>
      <a-col :span="8"><div class="gutter-box">col-8</div></a-col>
      <a-col :span="8"><div class="gutter-box">col-8</div></a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :span="6"><div class="gutter-box">col-6</div></a-col>
      <a-col :span="6"><div class="gutter-box">col-6</div></a-col>
      <a-col :span="6"><div class="gutter-box">col-6</div></a-col>
      <a-col :span="6"><div class="gutter-box">col-6</div></a-col>
    </a-row>
  </div>
</template>

<style>
.grid-demo-wrapper-2 .col {
  color: #fff;
}
.grid-demo-wrapper-2 h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}
.grid-demo-wrapper-2 .gutter-box {
  padding: 5px 0;
}
.grid-demo-wrapper-2 .col:nth-child(2n) .gutter-box {
  background: #00a0e9;
}
.grid-demo-wrapper-2 .col:nth-child(2n + 1) .gutter-box {
  background: rgba(0, 160, 233, 0.7);
}
</style>
