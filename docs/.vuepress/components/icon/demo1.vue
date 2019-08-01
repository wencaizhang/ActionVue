<template>
  <ul class="icon-list">
    <li><a-icon name="home" /></li>
    <li><a-icon name="user" /></li>
    <li><a-icon name="download" /></li>
    <li><a-icon name="upload" /></li>
    <li><a-icon name="loading" /></li>
    <li><a-icon name="setting" /></li>
  </ul>
</template>

<style scoped>
.icon-list {
  font-size: 3em;
  margin: 0;
  padding: 0;
}
.icon-list li {
  display: inline-block;
  list-style: none;
  cursor: pointer;
  padding: 0 16px;
}
.icon-list li:hover {
  background-color: lightblue;
  color: #fff;
}
</style>
