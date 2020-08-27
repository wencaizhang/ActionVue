<template>
<div>
  <Navbar />
  <div class="banner">
    <h1>ActionVue</h1>
    <h2>一个厉害的 UI 框架，基于 vite 和 vue@3.x 开发的组件库</h2>
    <p class="actions">
      <a href="https://github.com/wencaizhang/ActionVue" target="_blank">GitHub</a>
      <router-link to="/docs">开始</router-link>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
