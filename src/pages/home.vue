<template>
  <div>
    <g-button>按钮</g-button>
    <g-button icon="home" iconPosition="right">Home</g-button>
    <g-button icon="user">User</g-button>
  </div>
</template>

<script>
import button from '@/components/button'

export default {
  components: {
    gButton: button
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
