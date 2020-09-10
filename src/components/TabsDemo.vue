<template>
<div>Tabs 示例</div>
<h1>示例1</h1>
<Tabs v-model:selected="x">
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../libs/Tabs.vue'
import Tab from '../libs/Tab.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('导航2')
    return {
      x
    }
  }
}
</script>