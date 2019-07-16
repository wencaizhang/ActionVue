<template>
  <div>
    <p>页数较少时的效果</p>
    <a-pager
      :totalPage="7"
      :currPage="currPage"
      :hideIfOnePage="false"
      @onChange="onPageChange"
    />
    <p>大于 7 页时的效果</p>
    <a-pager
      :totalPage="100"
      :currPage="currPage"
      :hideIfOnePage="false"
      @onChange="onPageChange"
    />
  </div>
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