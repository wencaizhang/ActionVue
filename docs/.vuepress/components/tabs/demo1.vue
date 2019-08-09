<template>
  <a-tabs v-model="activeKey" @change="onChange">
    <a-tab-item title="tab 1" name="1">
      content of tab 1
    </a-tab-item>
    <a-tab-item title="tab 2" name="2">
      content of tab 2
    </a-tab-item>
  </a-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeKey: '1'
    }
  },
  methods: {
    onChange(activeKey) {
      console.log('activeKey', activeKey);
    }
  }
}
</script>
