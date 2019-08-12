<template>
  <div class="a-swipe-navigation">
    <div
      class="prev"
      :class="{ 'prev-disabled': !prevAble }"
      :disabled="!prevAble"
      @click="$emit('toPrev')"
    >
      <a-icon type="left" />
    </div>
    <div
      class="next"
      :class="{ 'next-disabled': !nextAble }"
      :disabled="!nextAble"
      @click="$emit('toNext')"
    >
      <a-icon type="right" />
    </div>

    <div class="dots">
      <span
        v-for="n in length"
        :key="n"
        class="dot"
        :class="{ 'selected': currKey === n - 1 }"
        @click="$emit('update:currKey', n - 1)"
      >
        {{ n }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'prevAble', 'nextAble', 'length', 'currKey'],
  methods: {

  }
}
</script>

<style lang="scss" scoped>
$primary-color: #1890ff;
.a-swipe-navigation {
  & > div {
    position: absolute;
    top: 50%;
    z-index: 10;
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
  .dots {
    position: absolute;
    top: auto;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);

    .dot {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      min-width: 20px;
      text-align: center;
      border-radius: 50%;
      background-color: #ccc;
      color: #333;
      font-size: 14px;
      margin: 0 4px;
      &:hover {
        cursor: pointer;
      }

      &.selected {
        background-color: #000;
        color: #fff;

        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
