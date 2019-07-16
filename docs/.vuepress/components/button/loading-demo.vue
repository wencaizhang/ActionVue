<template>
  <div>
    <a-button :loading="loading" @click="loading = !loading">加载中</a-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  }
};
</script>