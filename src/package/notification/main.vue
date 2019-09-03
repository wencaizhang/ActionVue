<template>
  <section class="a-notification-container">
    <div
      v-for="item in notices"
      :key="item.id"
    >
      {{ item.text }}
    </div>
  </section>
</template>

<script>
let seed = 0;
function getUid () {
  return seed++
}
export default {
  name: '',
  data () {
    return {
      notices: [
        { id: '', text: '注意' }
      ]
    }
  },
  methods: {
    add (option) {
      let id = getUid();
      let _notice = Object.assign({ id, text: 'xxxx' }, option);
      this.notices.push(_notice)
      this.setTimer(_notice);
    },
    remove(id) {
      let index = this.notices.findIndex(item => item.id === id);
      index >= 0 && this.notices.splice(index, 1)
    },
    setTimer (_notice) {
      setTimeout(() => {
        this.remove(_notice.id);
      }, _notice.duration * 1000);
    }
  },
}
</script>

<style scoped>
.a-notification-container {
  position: fixed;
  top: 10px;
  right: 0;
  z-index: 100;
  background-color: #ccc;
}
</style>
