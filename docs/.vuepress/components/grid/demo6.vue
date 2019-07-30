<template>
  <div>
    <a-row>
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
      <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</a-col>
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
    </a-row>
  </div>
</template>

<style>
.grid-demo4-wrap .row {
  background: #f5f5f5;
}
</style>

<style>
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
