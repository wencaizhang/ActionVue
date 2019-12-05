<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-item header="This is item header 1" name="1">
        <p>{{text}}</p>
      </a-collapse-item>
      <a-collapse-item header="This is item header 2" name="2" :disabled="false">
        <p>{{text}}</p>
      </a-collapse-item>
      <a-collapse-item header="This is item header 3" name="3" disabled>
        <p>{{text}}</p>
      </a-collapse-item>
    </a-collapse>
  </div>
</template>

<script>
export default {
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
