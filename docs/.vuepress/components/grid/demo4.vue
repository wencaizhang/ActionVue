<template>
  <div class="grid-demo-wrapper">
    <p>子元素左对齐</p>
    <a-row type="flex" justify="flex-start">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
    <p>子元素居中</p>
    <a-row type="flex" justify="center">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
    <p>子元素右对齐</p>
    <a-row type="flex" justify="flex-end">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
    <p>子元素两端对齐，子元素之间的间隔都相等</p>
    <a-row type="flex" justify="space-between">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
    <p>子元素两侧的间隔相等，子元素之间的间隔比子元素与边框的间隔大一倍</p>
    <a-row type="flex" justify="space-around">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
  </div>
</template>

<script>
import col from "../../../../src/package/Grid/col";
import row from "../../../../src/package/Grid/row";
export default {
  components: {
    ACol: col,
    ARow: row
  }
};
</script>

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
