<template>
  <div class="wrapper">

    <div class="content">
      <router-view />
      
    </div>

  </div>
</template>

<script>
export default {
  components: {

  },
  mounted() {}
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 20px;
}
.wrapper {
  display: flex;
}
.menu {
  border: 1px solid yellowgreen;
  margin-bottom: 20px;
  margin-right: 20px;
  padding: 10px;
  min-width: 200px;

  a {
    display: block;
    margin-bottom: 10px;
  }
}
.content {
  flex-grow: 1;
}

</style>
