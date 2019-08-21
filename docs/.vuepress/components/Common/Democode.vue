<template>
  <div class="demo-block" @mouseenter="showCtrl = true" @mouseleave="showCtrl = false">
    <div class="source">
      <slot></slot>
    </div>

    <!-- 代码块 -->
    <transition name="expand">
      <div v-show="isShowCode" class="meta">
        <!-- 描述 -->
        <div v-show="description" class="desc">
          <small>{{ description }}</small>
        </div>
        <div class="highlight" ref="highlight">
          <span class="copy-code-btn" :class="className" title="点击复制代码">复制</span>
            <slot name="codeText"></slot>
        </div>
      </div>
    </transition>

    <!-- 显示隐藏控制按钮 -->
    <div class="demo-block-control" @click="isShowCode = !isShowCode">
      <a-icon :type="iconType" :class="{ hovering: showCtrl }"></a-icon>
      <transition name="text-slide">
        <span v-show="showCtrl">{{ codeTextBtn }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
let uid = 0;

import ClipboardJS from 'clipboard';
export default {
  name: "DemoPage",
  props: ["title", "description"],
  data() {
    return {
      isShowCode: false,
      clip: null,
      showCtrl: false,
    };
  },
  computed: {
    iconType () {
      return this.isShowCode ? "up" : "down";
    },
    codeTextBtn() {
      return this.isShowCode ? "隐藏代码" : "显示代码";
    },
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
.demo-block {
  margin-bottom: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: #f2f2f2;
  border-image: initial;
  border-radius: 3px;
  transition: all 0.2s ease 0s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6),
      0 2px 4px 0 rgba(232, 237, 250, .5);
  }
  .source {
    padding: 24px;
  }

  .meta {
    background-color: rgb(250, 250, 250);
    border-top: 1px solid #f2f2f2;
    overflow: hidden;
    transition: height 0.2s ease 0s;

    .desc {
      box-sizing: border-box;
      font-size: 14px;
      line-height: 22px;
      color: rgb(102, 102, 102);
      word-break: break-word;
      background-color: rgb(255, 255, 255);
      padding: 20px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(235, 235, 235);
      border-image: initial;
      border-radius: 3px;
      margin: 10px;
    }
  }

  .demo-block-control:hover {
    color: rgb(25, 137, 250);
    color: #409eff;
    background-color: #f9fafc;
  }

  .demo-block-control {
    position: relative;
    height: 44px;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: rgb(211, 220, 230);
    cursor: pointer;
    border-top: 1px solid #f2f2f2;
    & > .a-icon {
      font-size: 16px;
      height: 44px;
      line-height: 44px;
      transition: .3s;

      &.hovering {
        transform: translateX(-40px);
      }
    }
    & > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: .3s;
      display: inline-block
    }
  }
}

// 代码块展开收缩动画
// .expand-enter-active,
// .expand-leave-active {
//   transition-duration: 1s;
//   transition-timing-function: ease-in;
//   // transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
// }

// .expand-enter,
// .expand-leave-to {
//   // transform: translateY(-100%);
// }

.demo-block .demo-block-control .text-slide-enter,
.demo-block .demo-block-control .text-slide-leave-active {
    opacity: 0;
    transform: translateX(10px)
}

// .slide-enter-active,
// .slide-leave-active {
//   transition-duration: 0.3s;
//   transition-timing-function: ease-in;
//   // transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
// }

// .slide-enter,
// .slide-leave {
//   opacity: 1;
//   transform: translateX(100%);
// }

</style>
