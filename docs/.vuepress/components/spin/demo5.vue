<template>
  <div>
    <div>
      Loading state：<a-switch v-model="spinning"></a-switch>
    </div>
    <a-spin :spinning="spinning">
      <div class="spin-content">
        可以点击‘切换’按钮，控制本区域的spin展示。
      </div>
    </a-spin>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        spinning: false
      }
    },
  }
</script>
<style scoped>
  .spin-content{
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>