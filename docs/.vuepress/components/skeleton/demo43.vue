<template>
  <div>
    <a-skeleton :paragraph="{rows: 4, width: '80%'}"/>
  </div>
</template>

<script>
import ASkeleton from "./ASkeleton";

export default {
  components: { ASkeleton },
};
</script>

