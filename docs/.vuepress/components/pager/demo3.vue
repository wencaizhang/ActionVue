<template>
  <div>
    <label>
      当只有一页时隐藏分页
      <input type="checkbox" v-model="hideIfOnePage">
    </label>
    <a-pager
      :totalPage="1"
      :currPage="currPage"
      :hideIfOnePage="hideIfOnePage"
      @onChange="onPageChange"
    />
  </div>
</template>

<script>
import APager from "../../../../src/package/pager/pager";

export default {
  components: { APager },
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