<template>
  <div>
    <p>sub-element align left</p>
    <a-row type="flex" justify="flex-start">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>

    <p>sub-element align center</p>
    <a-row type="flex" justify="center">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>

    <p>sub-element align right</p>
    <a-row type="flex" justify="flex-end">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>

    <p>sub-element monospaced arrangement</p>
    <a-row type="flex" justify="space-between">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>

    <p>sub-element align full</p>
    <a-row type="flex" justify="space-around">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
  </div>
</template>

<script>
import col from "../col";
import row from "../row";
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
