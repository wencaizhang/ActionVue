<template>
  <ul class="icon-list">
    <li
      v-for="type in iconList"
      :key="type"
    >
      <a-icon :type="type" />
      <span>{{ type }}</span>
    </li>
  </ul>
</template>

<script>
import ClipboardJS from 'clipboard';
export default {
  data () {
    return {
      iconList: ["down", "up", "left", "right", "close-circle", "check-circle", "loading", "error", "download", "upload", "user", "eye", "warning-circle", "info-circle", "setting", "home"],
    }
  },
  mounted () {
    this.initCopyCode({});
  },
  methods: {
    initCopyCode({ success, error }) {
      this.clip = new ClipboardJS(".icon-list li", {
        target (trigger) {

        },
        text (trigger) {
          let span = trigger.querySelector("span")
          return `<a-icon type="${span.innerText}" />`
        }
      });
      this.clip.on("success", e => {
        e.clearSelection();
        this.$message.success({ content: `${e.text} copied 🎉`})
      });
      this.clip.on("error", e => {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #1890ff;
.icon-list {
  font-size: 3em;
  margin: 0;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.icon-list li {
  display: inline-block;
  width: 16.66%;
  list-style: none;
  cursor: pointer;
  text-align: center;
  padding: 0 16px 5px;
  border-radius: 4px;
}
.icon-list li:hover {
  background-color: $primary-color;
  color: #fff;
}
.icon-list li span {
  display: block;
  font-size: 14px;
}
</style>
