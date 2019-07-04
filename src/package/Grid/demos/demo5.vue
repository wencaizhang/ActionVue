<template>
  <div>
    <a-row>
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
      <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</a-col>
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
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
