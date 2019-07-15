<template>
  <div>
    <button @click="loading = !loading">Toggle Skeleton</button>
    <a-skeleton :loading="loading" :paragraph="{rows: 2}">
      <p><strong>静夜思</strong></p>
      <p>床前明月光，疑是地上霜。</p>
      <p>举头望明月，低头思故乡。</p>
    </a-skeleton>
  </div>
</template>

<script>
import ASkeleton from "./ASkeleton";

export default {
  components: { ASkeleton },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
p {
  margin: 0;
}
</style>
