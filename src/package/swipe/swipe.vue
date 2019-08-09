
<template>
  <div class="a-swipe">
    <div class="a-swipe-navigation">
      <div
        class="prev"
        :class="{ 'prev-disabled': !prevAble }"
        :disabled="!prevAble"
        @click="toPrev"
      >
        <a-icon type="left" />
      </div>
      <div
        class="next"
        :class="{ 'next-disabled': !nextAble }"
        :disabled="!nextAble"
        @click="toNext"
      >
        <a-icon type="right" />
      </div>
    </div>
    <div class="a-swipe-content" ref="content">

      <slot />

    </div>
  </div>
</template>

<script>
export default {
  props: {
    loop: {
      type: Boolean,
      default: true,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    delay: {
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

      newSlotList: [],
    }
  },
  watch: {
    currKey () {
      this.onChange();
    }
  },
  mounted () {
    this.initial();
    const slotList = this.$slots.default.filter(slot => {
      if (slot.componentInstance) {
        console.log(slot.componentInstance.$options.name);
      }
      return slot.componentInstance && slot.componentInstance.$options.name === this.ASwipeItemName
    })
    this.newSlotList = [ slotList[slotList.length - 1], ...slotList, ...slotList]

    if (this.autoPlay) {
      setInterval(() => {
        this.toNext();
      }, this.delay);
    }
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
    },
    toPrev () {
      this.currKey = this.currKey <= 0 ? this.childrenLength - 1 : --this.currKey
    },
    toNext () {
      this.currKey = this.currKey + 1 >= this.childrenLength ? 0 : ++this.currKey
    },
    onChange (name) {
      this.$refs.content.style.marginLeft = `-${this.currKey * 100}%`
    }
  },
}
</script>

<style lang="scss" scoped>

$primary-color: #1890ff;
$transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
.a-swipe {
  position: relative;
  overflow: hidden;

  .a-swipe-content {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    transition: $transition;
  }

  .a-swipe-navigation {
    & > div {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      font-size: 2em;
      color: $primary-color;
    }
    .prev {
      left: 10px;
    }
    .next {
      right: 10px;
    }
    .prev-disabled,
    .next-disabled {
      color: #ccc;
      cursor: not-allowed;
      pointer-events: none;
    }
  }
}
</style>
