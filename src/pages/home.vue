<template>
  <div>
    <gbutton>按钮</gbutton>
  </div>
</template>

<script>
import button from '@/components/button'

export default {
  components: {
    gbutton: button,
    
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="less" scoped>

</style>
