<template>
  <div>
    <a-button @click="onClick('top')">上方弹出</a-button>
    <a-button @click="onClick('middle')">中间弹出</a-button>
    <a-button @click="onClick('bottom')">下方弹出</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick (dir) {
      this.$toast({
        message: "This is a toast",
        position: dir || 'top',
      });
    },
  }
};
</script>
