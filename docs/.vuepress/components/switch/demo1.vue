<template>
  <div>
    <a-switch v-model="value" @change="onChange" />
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
