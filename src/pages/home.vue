<template>
  <div>
    <g-button :loading="loading1" @click.native="loading1 = !loading1">按钮</g-button>
    <g-button icon="home" iconPosition="right" :loading="loading2" @click.native="loading2 = !loading2">Home</g-button>
    <g-button icon="user" :loading="loading3" @click.native="loading3 = !loading3">User</g-button>
    <g-icon name="download" />

  </div>
</template>

<script>
import button from '@/components/button'
import icon from '@/components/icon'

export default {
  components: {
    gButton: button,
    gIcon: icon
  },
  data () {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
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
