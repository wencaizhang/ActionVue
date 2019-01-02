<template>
  <button class="g-button">按钮</button>
</template>

<script>
export default {
  name: "g-button",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="less">
:root {
  --font-size: 14px;
  --button-height: 32px;
  --color: #333;
  --button-bg: #fff;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --border-color: #999;
  --border-color-hover: #666;
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  color: var(--color);
  background-color: var(--button-bg);
  border: 1px solid;
  border-color: var(--border-color);
  border-radius: var(--border-radius);
  padding: 0 1em;
  cursor: pointer;
}
.g-button:hover {
  border-color: var(--border-color-hover);
}
.g-button:active {
  background-color: var(--button-active-bg);
}
.g-button:focus {
  outline: none;
}
</style>
