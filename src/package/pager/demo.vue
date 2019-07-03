<template>
  <div>
    <h3>正常模式模式</h3>
    <Pager :totalPage="100" :currPage="currPage" :hideIfOnePage="false" @onChange="onPageChange" />
    <h3>简洁模式</h3>
    <Pager
      :totalPage="100"
      :currPage="currPage"
      :hideIfOnePage="false"
      mode="simple"
      @onChange="onPageChange"
    />
  </div>
</template>

<script>
import Pager from "./Pager";
export default {
  components: {
    Pager
  },
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

