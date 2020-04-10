<template>
  <div class="demo-block">

    <div class="meta">
      <div class="highlight" ref="highlight">
        <span class="copy-code-btn" :class="className" title="点击复制代码">
          <i class="css-icon icon-copy"></i>
        </span>
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

.css-icon {
  display: inline-block;
  height: 1em; width: 1em;
  font-size: 16px;
  box-sizing: border-box;
  text-indent: -9999px;
  vertical-align: middle;
  position: relative;
}
.css-icon::before,
.css-icon::after {
  content: '';
  box-sizing: inherit;
  position: absolute;
  left: 50%; top: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.icon-copy::before {
  width: .7em; height: .8em;
  border: 1px solid;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-radius: .1em;  
  left: 40%; top: 40%;
}
.icon-copy::after {
  width: .7em; height: .8em;
  border: 1px solid;
  border-radius: .1em;
  left: 60%; top: 60%;
}
.icon-copy:hover::before,
.icon-copy:hover::after {
  color: #a626a4;
}
.icon-copy:active::before,
.icon-copy:active::after {
  opacity: .8;
  margin-top: 1px;
}
</style>
