<template>
  <div class="demo-block" @mouseenter="showCtrl = true" @mouseleave="showCtrl = false">
    <div class="source">
      <slot></slot>
    </div>

    <!-- 代码块 -->
    <transition name="expand">
      <div ref="meta" class="meta" :style="metaStyle">
        <!-- 描述 -->
        <div v-if="description" class="desc">
          <small>{{ description }}</small>
        </div>
        <!-- <div class="highlight" ref="highlight">
          <span class="copy-code-btn" :class="className" title="复制代码">
            <i class="css-icon icon-copy"></i>
          </span>
          <slot name="codeText"></slot>

        </div> -->
      </div>
    </transition>

    <!-- 显示隐藏控制按钮 -->
    <!-- <div class="demo-block-control" @click="isShowCode = !isShowCode">
      <i class="css-icon" :class="[ iconType, showCtrl ? 'hovering' : '' ]"></i>
      <transition name="text-slide">
        <span v-show="showCtrl">{{ codeTextBtn }}</span>
      </transition>
    </div> -->
  </div>
</template>

<script>
let uid = 0;

// import ClipboardJS from 'clipboard';
export default {
  name: "DemoPage",
  props: ["title", "description", "code"],
  data() {
    return {
      isShowCode: true,
      clip: null,
      showCtrl: false,
      metaHeight: 0,
      computedHeight: false,
    };
  },
  computed: {
    iconType () {
      return this.isShowCode ? "icon-arrow-up" : "icon-arrow-down";
    },
    codeTextBtn() {
      return this.isShowCode ? "隐藏代码" : "显示代码";
    },
    className () {
      return 'copy-code-btn' + (uid++);
    },
    metaStyle () {
      // 没有计算高度时
      if (!this.computedHeight) {
        return {
          visibility: 'hidden',
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
        }
      }
      if (!this.isShowCode) {
        return {
          height: '0px'
        }
      }
      if (this.isShowCode) {
        return {
          height: this.metaHeight + 'px'
        }
      }
    }
  },
  mounted () {
    this.getHeight()
    // this.initCopyCode({});
  },
  methods: {
    getHeight () {
      let { height } = this.$refs.meta.getBoundingClientRect()
      this.metaHeight = height;
      this.computedHeight = true;
    },
    initCopyCode({ success, error }) {
      this.clip = new ClipboardJS("." + this.className, {
        target(trigger) {
          return trigger.parentNode.querySelector("pre");
        }
      });
      this.clip.on("success", e => {
        e.clearSelection();
        this.$toast({ message: '复制成功', showClose: false })
      });
      this.clip.on("error", e => {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// @import url(./code.css);
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
    & > .css-icon {
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
<style>

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
.icon-arrow-up::before {
  height: .65em; width: .65em;
  border-style: solid;
  border-width: 1px 0 0 1px;
  -ms-transform: translate(-50%, -25%) rotate(45deg);
  transform: translate(-50%, -25%) rotate(45deg);
}
.icon-arrow-down::before {
  height: .65em; width: .65em;
  border-style: solid;
  border-width: 1px 0 0 1px;
  -ms-transform: translate(-50%, -75%) rotate(225deg);
  transform: translate(-50%, -75%) rotate(225deg);
}
</style>
