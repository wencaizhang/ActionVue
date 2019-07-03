<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel header="This is panel header 1" name="1">
        <p>{{text}}</p>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 2" name="2" :disabled="false">
        <p>{{text}}</p>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 3" name="3" disabled>
        <p>{{text}}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import ACollapse from "@/package/collapse/ACollapse";
import ACollapsePanel from "@/package/collapse/ACollapsePanel";
export default {
  components: {
    ACollapse,
    ACollapsePanel
  },
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ["1"]
    };
  },
  watch: {
    activeKey(key) {
      console.log(key);
    }
  },
};
</script>
