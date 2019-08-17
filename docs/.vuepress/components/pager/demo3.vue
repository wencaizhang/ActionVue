<template>
  <div>
    <div style="margin-bottom: 8px;">
      当只有一页时隐藏分页：
      <a-switch v-model="hideIfOnePage" active-text="on" inactive-text="off"/>
    </div>
    <a-pager
      :totalPage="1"
      :currPage="currPage"
      :hideIfOnePage="hideIfOnePage"
      @onChange="onPageChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currPage: 1,
      hideIfOnePage: true,
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