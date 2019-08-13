<template>
  <div class="switch-demo">
    <a-switch v-model="value1" :disabled="disabled" />
    <a-switch v-model="value2" :disabled="disabled" />
    <br />
    <a-button @click="disabled = !disabled">Toggle Disabled</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: false,
      disabled: true,
    };
  },
};
</script>

<style>
.switch-demo .a-switch {
  margin: 8px 0;
}
</style>
