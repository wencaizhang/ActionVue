<template>
  <div class="switch-demo">
    <a-switch v-model="value1" loading />
    <a-switch v-model="value2" loading />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: false,
    };
  },
  methods: {
    onChange() {
      console.log(this.value1);
    }
  }
};
</script>

<style>
.switch-demo .a-switch {
  margin: 8px 0;
}
</style>
