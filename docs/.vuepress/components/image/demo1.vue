<template>
  <div class="demo-image">
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="demonstration">{{ fit }}</span>
      <a-image :src="src" :fit="fit" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      src:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  }
};
</script>

<style scoped>
.demo-image .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
}
</style>
