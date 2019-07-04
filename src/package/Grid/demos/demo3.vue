<template>
  <div>
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
import col from "../col";
import row from "../row";
export default {
  components: {
    ACol: col,
    ARow: row
  }
};
</script>
