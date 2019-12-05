<template>
  <GitHubLink :repo="url" />
</template>

<script>
import GitHubLink from "./GitHubLink";
export default {
  name: 'SourceCodeLink',
  components: { GitHubLink },
  props: {
    comp: {
      type: String,
      required: true,
    },
  },
  computed: {
    url () {
      return 'wencaizhang/ActionVue/tree/master/src/package/' + this.comp;
    }
  },
}
</script>

<style scoped>

</style>