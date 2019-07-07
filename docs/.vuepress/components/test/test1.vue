<template>
  <div class="demo-button">
    <div>
      <dt-button>默认按钮</dt-button>
      <dt-button type="primary">主要按钮</dt-button>
      <dt-button type="success">成功按钮</dt-button>
      <dt-button type="info">信息按钮</dt-button>
      <dt-button type="warning">警告按钮</dt-button>
      <dt-button type="danger">危险按钮</dt-button>
    </div>
  </div>
</template>

<script>
import DtButton from '../src/button'
export default {
  name: 'buttonWrap',
  components: {
    DtButton
  }
}
</script>

<style lang="less" scoped>
.demo-button{
  width: 100%;
  text-align: center;
  div {
    margin: 10px 0;
  }
}
</style>

