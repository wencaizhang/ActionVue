<template>
  <div>
    <a-button :loading="loading" @click="loading = !loading">加载中</a-button>
  </div>
</template>

<script>
import AButton from "../../../../src/package/button/button";
export default {
  components: { AButton },
  data () {
    return {
      loading: false
    }
  }
};
</script>