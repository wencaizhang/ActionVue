<template>
  <div class="switch-demo">
    <a-switch v-model="value"
      active-icon="check-circle"
      inactive-icon="close-circle"
    />
    <a-switch v-model="value"
      active-icon="check-circle"
      inactive-text="关"
    />
    <a-switch v-model="value"
      active-text="开"
      inactive-icon="close-circle"
    />
    <a-switch v-model="value"
      active-text="开"
      inactive-text="关"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
    };
  },
  methods: {
    onChange() {
      console.log(this.value);
    }
  }
};
</script>

<style>
.switch-demo .a-switch {
  margin: 8px 0;
}
</style>
