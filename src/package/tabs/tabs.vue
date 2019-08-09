<template>
  <div class="a-tabs">
    <a-tabs-nav
      :navList="navList"
      :selectedKey="selectedKey"
      @update:selectedKey="onChange"
    />
    <div class="a-tabs-content" ref="content">
      <slot />
    </div>
  </div>
</template>

<script>
import ATabsNav from './tabs-nav';
export default {
  components: { ATabsNav },
  props: {
    // selectedKey: {
    //   type: String,
    //   default: '1',
    // },
    value: {
      type: String,
    },
  },
  data () {
    return {
      navList: [],
      ATabItemName: 'a-tab-item',
      selectedKey: '1',
    }
  },
  mounted () {
    let ATabItemName = this.ATabItemName;
    this.navList = this.$children
      .filter(item => item.$options.name === ATabItemName)
      .map(item => ({
        title: item.title,
        name: item.name,
        disabled: this.getBool(item.$options.propsData.disabled)
      }))
    this.selectedKey = this.value || this.navList[0].name;
  },
  methods: {
    getBool (v) {
      // TODO
      // 问题调查
      // disabled 简写时：<a-tab-item title="tab 2" name="2" disabled>
      // 通过 propsData 得到的 disabled 值是 ""
      // 而通过 this.disabled 得到的是正常的 true 和 false
      if (v === void(0)) {
        return false;
      }
      if (v === '') {
        return true;
      }
      return !!v;
    },
    onChange (name) {
      this.selectedKey = name;
      let index = this.navList.findIndex(item => item.name === name);
      this.$refs.content.style.marginLeft = `-${index * 100}%`
      this.$emit('input', name);
      this.$emit('change', name);
    }
  },
}
</script>

<style lang="scss" scoped>
$primary-color: #1890ff;
$transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
.a-tabs {
  overflow: hidden;

  .a-tabs-content {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    transition: $transition;
  }
}
</style>
