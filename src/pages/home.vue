<template>
  <div>
    <gbutton>按钮</gbutton>
    <gbutton icon="home">Home</gbutton>
    <gbutton icon="user">User</gbutton>
  </div>
</template>

<script>
import button from '@/components/button'

export default {
  components: {
    gbutton: button
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
