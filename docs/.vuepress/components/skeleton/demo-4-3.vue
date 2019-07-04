<template>
  <div style="padding-top: 16px;">
    <vue-skeleton :paragraph="{rows: 4, width: '80%'}"/>
  </div>
</template>

<script>
import VueSkeleton from "./VueSkeleton";

export default {
  components: { VueSkeleton },
};
</script>

