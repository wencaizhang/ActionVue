<template>
  <div style="padding-top: 16px;">
    <vue-skeleton :avatar="{shape: 'square'}"/>
  </div>
</template>

<script>
import VueSkeleton from "./VueSkeleton";

export default {
  components: { VueSkeleton },
};
</script>