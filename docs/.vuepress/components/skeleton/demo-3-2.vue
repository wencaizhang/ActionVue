<template>
  <div style="padding-top: 16px;">
    <vue-skeleton :title="{width: '80%'}"/>
  </div>
</template>

<script>
import VueSkeleton from "./VueSkeleton";

export default {
  components: { VueSkeleton },
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
