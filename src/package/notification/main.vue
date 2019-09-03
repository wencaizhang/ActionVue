<template>
  <section class="a-notification">
    <div v-for="item in notices" :key="item.id">
      <h4>{{ item.title }}</h4>
      <span>{{ item.message }}</span>
    </div>
  </section>
</template>

<script>
let seed = 0;
function getUid() {
  return seed++;
}
export default {
  name: "",
  data() {
    return {
      notices: []
    };
  },
  methods: {
    add(options) {
      let id = getUid();
      let _notice = Object.assign({ id }, options);
      this.notices.push(_notice);
      // this.setTimer(_notice);
    },
    remove(id) {
      let index = this.notices.findIndex(item => item.id === id);
      index >= 0 && this.notices.splice(index, 1);
    },
    setTimer(_notice) {
      setTimeout(() => {
        this.remove(_notice.id);
      }, _notice.duration * 1000);
    }
  }
};
</script>

<style scoped>
.a-notification {
  position: fixed;
  top: 10px;
  right: 0;
  right: 16px;
  z-index: 100;
  background-color: #ccc;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  background-color: #fff;

  overflow: hidden;
}

.left {
  left: 16px;
}
.right {
  right: 16px;
}
</style>
