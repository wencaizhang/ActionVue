<template>
  <div>
    <h3>基础栅格</h3>
    <div class="grid-demo-wrapper">
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
    <h3>栅格间距</h3>
    <div class="grid-demo-wrapper">
      <a-row :gutter="24">
        <a-col :span="12">col-12</a-col>
        <a-col :span="12">col-12</a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="8">col-8</a-col>
        <a-col :span="8">col-8</a-col>
        <a-col :span="8">col-8</a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="6">col-6</a-col>
        <a-col :span="6">col-6</a-col>
        <a-col :span="6">col-6</a-col>
        <a-col :span="6">col-6</a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import col from "./col";
import row from "./row";
export default {
  components: {
    ACol: col,
    ARow: row
  }
};
</script>

<style>
.grid-demo-wrapper {
  color: #fff;
  width: 800px;
}

.grid-demo-wrapper .col:nth-child(2n) {
  background: #00a0e9;
}
.grid-demo-wrapper .col:nth-child(2n + 1) {
  background: rgba(0, 160, 233, 0.7);
}
</style>
