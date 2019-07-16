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

export default {
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