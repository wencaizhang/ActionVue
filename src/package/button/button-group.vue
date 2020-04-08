<template>
  <div class="a-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  mounted () {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`a-button-group 的子元素应当全部是 a-button，而你这里使用了 ${name}！`)
      }
    }
  }
}
</script>

<style lang="less">
.a-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .a-button {
    border-radius: 0;
    &:not(:last-child) {
      margin-right: 0;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &.a-button-primary:last-child:not(:first-child),
    &.a-button-primary + .a-button-primary {
      border-left-color: #40a9ff;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

}
</style>
