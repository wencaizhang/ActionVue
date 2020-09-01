<template>
  <h1>Switch 示例</h1>
  <DemoCode description="按钮是否禁用">
    <Switch v-model:value="bool" />
  </DemoCode>
</template>
<script lang="ts">
import DemoCode from "../components/DemoCode.vue";
import Switch from "../libs/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch, DemoCode },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>
