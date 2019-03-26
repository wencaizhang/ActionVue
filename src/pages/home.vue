<template>
<div>
    <div>
    <gbutton>按钮</gbutton>
    <gbutton icon="home" icon-position="left">Home</gbutton>
    <gbutton icon="user">User</gbutton>
  </div>

  <hr style="margin: 10px 0">

  <div>
    <ginput />
  </div>
</div>
</template>

<script>
import button from '@/components/button'
import input from '@/components/input/input'

export default {
  components: {
    gbutton: button,
    ginput: input
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 20px;
}
</style>
