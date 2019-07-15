<template>
  <div class="demo-wrapper">

    <div>
      <a-button>按钮</a-button>
      <a-button loading>按钮</a-button>
    </div>



    <hr />
    <div>
      <h3>按钮</h3>
      <a-button :loading="loading1" @click.native="loading1 = !loading1">按钮</a-button>
      <a-button
        icon="home"
        iconPosition="right"
        :loading="loading2"
        @click.native="loading2 = !loading2"
      >Home</a-button>
      <a-button icon="user" :loading="loading3" @click.native="loading3 = !loading3">User</a-button>
    </div>

    <div>
      <h3>按钮组</h3>
      <a-buttonGroup>
        <a-button :loading="loading1" @click.native="loading1 = !loading1">按钮</a-button>
        <a-button
          icon="home"
          iconPosition="right"
          :loading="loading2"
          @click.native="loading2 = !loading2"
        >Home</a-button>
        <a-button icon="user" :loading="loading3" @click.native="loading3 = !loading3">User</a-button>
      </a-buttonGroup>
    </div>
  </div>
</template>

<script>
import AButton from "./button";
import AButtonGroup from "./button-group";
export default {
  components: {
    AButton,
    AButtonGroup
  },

  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false
    };
  }
};
</script>

<style scoped>
.demo-wrapper > div {
  margin: 20px;
}
</style>
