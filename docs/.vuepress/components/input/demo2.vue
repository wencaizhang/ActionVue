<template>
  <div class="components-input-demo-presuffix">
    <a-input v-model="userName" placeholder="Basic usage" style="width: 200px" ref="userNameInput">
      <a-icon slot="prefix" type="user" />
      <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty" />
    </a-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    }
  }
};
</script>

<style>
.components-input-demo-presuffix .a-icon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 12px;
}
.components-input-demo-presuffix .a-icon-close-circle:hover {
  color: #999;
}
.components-input-demo-presuffix .a-icon-close-circle:active {
  color: #666;
}
</style>
