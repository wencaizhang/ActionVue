<template>
  <div class="demo-image">
    <a-image src="https://error.png" />
    <a-image src="https://error.png">
      <template slot="error">
        自定义加载失败
      </template>
    </a-image>
  </div>
</template>
