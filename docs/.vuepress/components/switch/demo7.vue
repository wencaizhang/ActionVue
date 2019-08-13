<template>
  <div>
    <a-switch v-model="value" />
    <a-switch v-model="value"
      active-color="#13ce66"
      inactive-color="#f5222d"
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
};
</script>
