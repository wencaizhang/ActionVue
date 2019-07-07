<template>
  <a-pager
    :totalPage="100"
    :currPage="currPage"
    :hideIfOnePage="false"
    mode="simple"
    @onChange="onPageChange"
  />
</template>

<script>
import APager from "../../../../src/package/pager/pager";

export default {
  components: { APager },
  data() {
    return {
      currPage: 30
    };
  },
  methods: {
    onPageChange(item) {
      this.currPage = item;
      console.log("onPageChange", item);
    }
  }
};
</script>