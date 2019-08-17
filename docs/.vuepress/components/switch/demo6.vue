<template>
  <div class="switch-demo">
    Loading: <a-switch v-model="loading" active-text="on" inactive-text="off"/>
    <br />
    <a-switch v-model="value1" :loading="loading" />
    <a-switch v-model="value2" :loading="loading" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
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
