<template>
  <div class="demo2-image">
    <div
      class="block"
      v-for="fit in fitList"
      :key="fit"
    >
      <p class="fit-title">{{ fit }}</p>
      <a-image
        :fit="fit"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        width="100"
        height="100"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fitList: [ 'fill', 'contain', 'cover', 'none', 'scale-down', ]
    }
  }
}
</script>

<style>
  .demo2-image .block {
    display: inline-block;
    text-align: center;
    width: 20%;
  }
</style>
