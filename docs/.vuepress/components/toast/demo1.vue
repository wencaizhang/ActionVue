<template>
  <div>
    <a-button @click="onClick">简单 Toast</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$toast("This is a toast");
    }
  }
};
</script>

