<template>
  <div class="grid-demo-wrapper">
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
.grid-demo-wraper .row {
  background: #f5f5f5;
}
</style>
