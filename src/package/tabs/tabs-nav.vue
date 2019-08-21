<template>
  <div class="a-tabs-nav">
    <div class="a-tabs-ink-bar" ref="bar"></div>
    <div class="a-tabs-tab-list" ref="nav-list">
      <div
        v-for="item in navList"
        :key="item.name"
        class="a-tabs-tab"
        :ref="`a-tabs-nav-${item.name}`"
        :class="item | clazz(selectedKey)"
        @click="onClick(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
    },
    selectedKey: {
      type: String,
    }
  },
  data () {
    return {

    }
  },
  filters: {
    clazz (item, selectedKey) {
      return {
        'a-tabs-tab-selected': selectedKey === item.name,
        'a-tabs-tab-disabled': item.disabled
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.selectChange();
    })
  },
  watch: {
    selectedKey () {
      this.selectChange();
    }
  },
  methods: {
    getSelectedRefName () {
      return `a-tabs-nav-${this.selectedKey}`
    },
    onClick (item) {
      if (item.disabled) { return; }
      this.$emit('update:selectedKey', item.name);
    },
    selectChange () {
      let ref = this.getSelectedRefName();
      let { width, left } = this.$refs[ref][0].getBoundingClientRect();
      let { left: left2 } = this.$refs['nav-list'].getBoundingClientRect();

      this.$refs.bar.style.width = `${width}px`
      this.$refs.bar.style.left = `${left - left2}px`
    }
  },
}
</script>

<style lang="scss" scoped>
$primary-color: #1890ff;
$transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

.a-tabs-nav {
  position: relative;
  margin: 0 0 16px 0;

  .a-tabs-tab-list {
    border-bottom: 1px solid rgb(232, 232, 232);

    .a-tabs-tab {
      display: inline-block;
      cursor: pointer;
      margin-right: 32px;
      padding: 12px 16px;
      &:last-child {
        margin-right: 0;
      }
  
      &.a-tabs-tab-selected {
        color: $primary-color;
        font-weight: bold;
      }
      &.a-tabs-tab-disabled {
        color: rgba(0, 0, 0, 0.25);
        cursor: not-allowed;
        pointer-events: none;
      }
    }
  }
  .a-tabs-ink-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    transition: $transition;

    // width: 40px;
    box-sizing: border-box;
    background-color: $primary-color;
    height: 2px;
  }
}
</style>


