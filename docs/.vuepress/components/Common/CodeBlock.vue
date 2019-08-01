<template>
  <div class="demo-block">

    <div class="meta">

      <div  class="highlight" ref="highlight">
        <span class="copy-code-btn" :class="className" title="点击复制代码">复制</span>
        <transition name="slide">
          <slot name="codeText"></slot>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
let uid = 0;

import ClipboardJS from 'clipboard';
export default {
  name: "DemoPage",
  data() {
    return {
      clip: null,
    };
  },
  computed: {
    className () {
      return 'copy-code-btn' + (uid++);
    },
  },
  mounted () {
    this.initCopyCode({});
  },
  methods: {
    initCopyCode({ success, error }) {
      this.clip = new ClipboardJS("." + this.className, {
        target(trigger) {
          return trigger.parentNode.querySelector("pre");
        }
      });
      this.clip.on("success", e => {
        e.clearSelection();
        this.$message.success({ content: '复制成功'})
      });
      this.clip.on("error", e => {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
      });
    }
  }
};
</script>


<style lang="less" scoped>
@import url(./code.css);

</style>
