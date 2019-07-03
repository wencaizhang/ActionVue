<template>
  <div>
    <div>
      <h3>按钮</h3>
      <gbutton :loading="loading1" @click.native="loading1 = !loading1">按钮</gbutton>
      <gbutton
        icon="home"
        iconPosition="right"
        :loading="loading2"
        @click.native="loading2 = !loading2"
      >Home</gbutton>
      <gbutton icon="user" :loading="loading3" @click.native="loading3 = !loading3">User</gbutton>
    </div>

    <div>
      <h3>按钮组</h3>
      <buttonGroup>
        <gbutton :loading="loading1" @click.native="loading1 = !loading1">按钮</gbutton>
        <gbutton
          icon="home"
          iconPosition="right"
          :loading="loading2"
          @click.native="loading2 = !loading2"
        >Home</gbutton>
        <gbutton icon="user" :loading="loading3" @click.native="loading3 = !loading3">User</gbutton>
      </buttonGroup>
    </div>
  </div>
</template>

<script>
import button from "./button";
import buttonGroup from "./button-group";
export default {
  components: {
    gbutton: button,
    buttonGroup
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
