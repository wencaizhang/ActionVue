
<template>
  <div class="a-swipe">
    <swipe-nav
      :prevAble="prevAble"
      :nextAble="nextAble"
      :length="childrenLength"
      :currKey.sync="currKey"
      @toPrev="toPrev"
      @toNext="toNext"
    />
    <div
      class="a-swipe-content"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
      @touchstart="onTouchstart"
      @touchmove="onTouchmove"
      @touchend="onTouchend"
      ref="content"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import SwipeNav from "./swipe-nav";
import { clearTimeout } from 'timers';
export default {
  components: { SwipeNav },
  props: {
    loop: {
      type: Boolean,
      default: true,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 3000,
    },
  },
  data () {
    return {
      currKey: 0,
      ASwipeItemName: 'a-swipe-item',
      swipeItemList: [],
      childrenLength: 0,

      reverse: false,
      timerId: null,
      startTouch: null,
    }
  },
  watch: {
    currKey (currKey, oldKey) {
      this.onChange(currKey, oldKey);
    }
  },
  mounted () {
    this.initial();
    this.execAutoPlay();
  },
  computed: {
    prevAble () {
      return this.currKey <= 0 && !this.loop ? false : true;
    },
    nextAble () {
      return this.currKey + 1 >= this.childrenLength && !this.loop ? false : true;
    },
  },
  methods: {
    initial () {
      let ASwipeItemName = this.ASwipeItemName;
      this.swipeItemList = this.$children.filter(item => item.$options.name === ASwipeItemName);
      this.childrenLength = this.swipeItemList.length;
      this.onChange();
    },
    execAutoPlay () {
      if (!this.autoPlay) { return; }
      if (this.timerId) return;
      let run = () => {
        this.toNext();
        this.timerId = setTimeout(run, this.interval);
      }
      this.timerId = setTimeout(run, this.interval);
    },
    pause () {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    },

    toPrev () {
      this.currKey = this.currKey <= 0 ? this.childrenLength - 1 : --this.currKey
    },
    toNext () {
      this.currKey = this.currKey + 1 >= this.childrenLength ? 0 : ++this.currKey
    },
    onChange (currKey=0, oldKey=0) {
      this.swipeItemList[oldKey].$data.visible = false;
      this.swipeItemList[currKey].$data.visible = true;

      this.swipeItemList.forEach((item, index) => {
        item.$data.reverse = this.getReverseHelper(currKey, index);
      })

      this.$emit('change', currKey, oldKey);
    },
    getReverseHelper (currKey, oldKey) {
      if (currKey === this.childrenLength - 1 && oldKey === 0) {
        // 最后一个跳转到第一个
        return true;
      }
      if (currKey === 0 && oldKey === this.childrenLength - 1) {
        // 第一个跳转到最后一个
        return false;
      }
      return oldKey > currKey
    },
    onMouseleave () {
      this.execAutoPlay();
    },
    onMouseenter () {
      this.pause();
    },
    onTouchstart (e) {
      this.pause();
      if (e.touches.length > 1) { return; }
      this.startTouch = e.touches[0];
    },
    onTouchmove (e) {
    },
    onTouchend (e) {
      let endTouch = e.changedTouches[0];
      let { clientX: x1, clientY: y1 } = this.startTouch;
      let { clientX: x2, clientY: y2 } = endTouch;

      let distance = Math.sqrt(Math.pow(x2 - x1, x2) + Math.pow(y2 - y1, y2))
      let deltaY = Math.abs(y2 - y1);
      let rate = distance / deltaY;

      if (rate > 2) {
        if (x2 > x1) {
          this.toPrev();
        } else {
          this.toNext();
        }
      };

      this.$nextTick(() => {
        this.execAutoPlay();
      })
    },
  },
}
</script>

<style lang="scss" scoped>

$primary-color: #1890ff;
$transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
.a-swipe {
  position: relative;
  overflow: hidden;

  &-content {
    width: 100%;
    position: relative;
  }

}
</style>
