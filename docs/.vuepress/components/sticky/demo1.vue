<template>
  <div>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <sticky :distance="150">
      <div class="box">我是粘滞内容</div>
    </sticky>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
    <sticky :distance="0" position="bottom">
      <div class="box">我是粘滞内容</div>
    </sticky>
    <p>段落</p>
    <p>段落</p>
    <p>段落</p>
  </div>
</template>

<style scoped>
p {
  height: 50px;
  line-height: 50px;
}
.box {
  line-height: 80px;
  padding: 10px;
  color: #fff;
    background-color: tomato;
}
</style>
