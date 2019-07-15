<template>
  <div>

      <a-button-group>
        <a-button :loading="loading1" @click.native="loading1 = !loading1">按钮</a-button>
        <a-button
          icon="home"
          iconPosition="right"
          :loading="loading2"
          @click.native="loading2 = !loading2"
        >Home</a-button>
        <a-button icon="user" :loading="loading3" @click.native="loading3 = !loading3">User</a-button>
      </a-button-group>
  </div>
</template>

<script>
import AButton from "../../../../src/package/button/button";
import AButtonGroup from "../../../../src/package/button/button-group";
export default {
  components: { AButton, AButtonGroup},
  data () {
    return {
      loading: false
    }
  }
};
</script>