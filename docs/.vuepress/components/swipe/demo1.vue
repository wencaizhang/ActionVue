<template>
  <a-swipe :seleted.async="selected" @change="onChange">
    <a-swipe-item class="blue" name="1a">content of swipe 1</a-swipe-item>
    <a-swipe-item class="red" name="2b">content of swipe 2</a-swipe-item>
    <a-swipe-item class="green" name="3c">content of swipe 3</a-swipe-item>
  </a-swipe>
</template>
<script>
export default {
  data () {
    return {
      selected: '1a',
    }
  },
  methods: {
    onChange(a, b) {
      // console.log(a, b);
    }
  }
}
</script>

<style lang="scss" scoped>
.a-swipe-item {
  min-height: 160px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.blue {
    background: #364d79;
  }
  &.red {
    background: red;
  }
  &.green {
    background:green;
  }
}
</style>
