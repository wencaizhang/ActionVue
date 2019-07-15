<template>
  <div>
    <a-skeleton :title="{width: '80%'}"/>
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
