<template>
  <div>
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
