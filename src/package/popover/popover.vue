<template>
  <div class="a-popover" ref="wraper">
    <div
      v-if="visible"
      class="a-popover-content"
      :class="[`a-popover-content-${position}`]"
      ref="content"
      @click.stop
    >
      <div class="a-popover-arrow" :class="[`a-popover-arrow-${position}`]"></div>
      <div class="a-popover-inner">
        <slot name="content" />
      </div>
    </div>
    <div class="a-popover-reference" ref="trigger">
      <slot />
    </div>
  </div>
</template>

<script>
const positionList = [
  "topLeft",
  "top",
  "topRight",
  "leftTop",
  "left",
  "leftBottom",
  "rightTop",
  "right",
  "rightBottom",
  "bottomLeft",
  "bottom",
  "bottomRight",
]

export default {
  data () {
    return {
      visible: false,
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator (v) {
        return positionList.includes(v);
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (v) {
        return [ 'click', 'hover' ].includes(v);
      }
    }
  },
  mounted () {
    this.bindEvent();
  },
  methods: {
    bindEvent () {
      if (this.trigger === 'click') {
        // 这里不能阻止事件冒泡，否则在多个 popover 的场景下会出现点击其他 popover 无法关闭当前 popover 的问题
        this.$refs.wraper.addEventListener('click', this.open);
      } else {
        this.$refs.wraper.addEventListener('mouseenter', this.open);
        this.$refs.wraper.addEventListener('mouseleave', this.close)
      }
    },
    listenDocClick () {
      // 点击 外面 关闭 popover
      document.addEventListener('click', e => {
        // 判断点击位置，如果是在 popover 内部，则无视，否则关闭 popover
        if (this.$refs.wraper && (this.$refs.wraper === e.target || this.$refs.wraper.contains(e.target))) { return }
        this.close();
      })
    },
    open () {
      if (this.visible) { return; }
      this.visible = true;
      this.$nextTick(() => {
        this.appendContent();
        this.listenDocClick();
      })
    },
    close () {
      this.visible = false;
    },

    appendContent () {
      const { content, trigger } = this.$refs;

      // 直接 appendChild 以便于后面 getBoundingClientRect 方法会获取到准确到值
      document.body.appendChild(content);
      let { left, top, right, bottom, width, height } = trigger.getBoundingClientRect();
      let { width: selfWidth, height: selfHeight } = content.getBoundingClientRect();

      const style = {
        topLeft: {
          top: top + window.scrollY - selfHeight - 10,
          left: left + window.scrollX,
        },
        top: {
          top: top + window.scrollY - selfHeight - 10,
          left: left + window.scrollX - (selfWidth - width) / 2,
        },
        topRight: {
          top: top + window.scrollY - selfHeight - 10,
          left: left + window.scrollX + width - selfWidth,
        },
        leftTop: {
          top: top + window.scrollY,
          left: left + window.scrollX - selfHeight - 10,
        },
        left: {
          top: top + window.scrollY - (selfHeight - height) / 2,
          left: left + window.scrollX - selfHeight - 10,
        },
        leftBottom: {
          top: top + window.scrollY + height - selfHeight,
          left: left + window.scrollX - selfHeight - 10,
        },
        rightTop: {
          top: top + window.scrollY,
          left: left + window.scrollX + width + 10,
        },
        right: {
          top: top + window.scrollY - (selfHeight - height) / 2,
          left: left + window.scrollX + width + 10,
        },
        rightBottom: {
          top: top + window.scrollY + height - selfHeight,
          left: left + window.scrollX + width + 10,
        },
        bottomLeft: {
          top: top + window.scrollY + height + 10,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + window.scrollY + height + 10,
          left: left + window.scrollX - (selfWidth - width) / 2,
        },
        bottomRight: {
          top: top + window.scrollY + height + 10,
          left: left + window.scrollX + width - selfWidth,
        },
      }
      console.log(top ,window.scrollY , selfHeight );

      content.style.top = style[this.position].top + 'px';
      content.style.left = style[this.position].left + 'px';
    },
  }
};
</script>

<style lang="less" scoped>
.a-popover {
  position: relative;
  display: inline-block;
}
.a-popover-content {
  display: inline-block;
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;


  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: .5em 1em;
  border-radius: 4px;
  max-height: 100px;
  max-width: 100px;

  &-topLeft,
  &-top,
  &-topRight {
    padding-bottom: 10px;

    .a-popover-inner {
      margin-top: 10px;
    }
  }
  &-bottomLeft,
  &-bottom,
  &-bottomRight {
    padding-top: 10px;

    .a-popover-inner {
      margin-bottom: 10px;
    }
  }
  &-leftTop,
  &-left,
  &-leftBottom {
    padding-right: 10px;

    .a-popover-inner {
      margin-left: 10px;
    }
  }
  &-rightTop,
  &-right,
  &-rightBottom {
    padding-left: 10px;

    .a-popover-inner {
      margin-right: 10px;
    }
  }

    .a-popover-arrow {
      // border-top-color: transparent;
      // border-right-color: #fff;
      // border-bottom-color: #fff;
      // border-left-color: transparent;
      box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);

      position: absolute;
      display: block;
      width: 8px;
      height: 8px;
      background: transparent;
      background: #fff;
      // background: lightcoral;
      // border-width: 4.24264069px;
      // border-style: solid;

      &-topLeft {
        left: 10px;
        bottom: 0;
        transform: translate(0, 50%) rotate(45deg);
      }
      &-top {
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 50%) rotate(45deg);
      }
      &-topRight {
        right: 10px;
        bottom: 0;
        transform: translate(0, 50%) rotate(45deg);
      }
      &-bottomLeft {
        left: 10px;
        top: 0;
        transform: translate(0, -50%) rotate(45deg);
      }
      &-bottom {
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &-bottomRight {
        right: 10px;
        top: 0;
        transform: translate(0, -50%) rotate(45deg);
      }
      &-leftTop {
        right: 0;
        top: 10px;
        transform: translate(50%, 0) rotate(45deg);
      }
      &-left {
        right: 0;
        top: 50%;
        transform: translate(50%, -50%) rotate(45deg);
      }
      &-leftBottom {
        right: 0;
        bottom: 10px;
        transform: translate(50%, 0) rotate(45deg);
      }
      &-rightTop {
        top: 10px;
        left: 0;
        transform: translate(-50%, 0) rotate(45deg);
      }
      &-right {
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &-rightBottom {
        left: 0;
        bottom: 10px;
        transform: translate(-50%, 50%) rotate(45deg);
      }
    }
  .a-popover-inner {
    position: relative;

  }
}
</style>