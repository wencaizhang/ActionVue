<template>
  <div>
    <a-switch v-model="value1"
      activeText="1"
      inactiveText="0"
      active-value="1"
      inactive-value="0"
      @change="onChange1"
    />
    <br />
    <a-switch v-model="value2"
      activeText="on"
      inactiveText="off"
      active-value="on"
      inactive-value="off"
      @change="onChange2"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
    };
  },
  methods: {
    onChange1 () {
      console.log(this.value1);
    },
    onChange2 () {
      console.log(this.value2);
    }
  }
};
</script>
