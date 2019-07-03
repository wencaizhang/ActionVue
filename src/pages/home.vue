<template>
  <div class="wrapper">
    <div class="menu">
      <h3>目录</h3>
      <a @click="$router.go(-1)">&lt;- 返回</a>
      <router-link :to="{ name: 'button' }">Button Demo</router-link>
      <router-link :to="{ name: 'input' }">input Demo</router-link>
      <router-link :to="{ name: 'icon' }">icon Demo</router-link>
      <router-link :to="{ name: 'toast' }">toast Demo</router-link>
      <router-link :to="{ name: 'grid' }">Grid Demo</router-link>
      <router-link :to="{ name: 'pager' }">pager Demo</router-link>
      <router-link :to="{ name: 'collapse' }">collapse Demo</router-link>
      <router-link :to="{ name: 'sticky' }">sticky Demo</router-link>
    </div>

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

<style lang="less">
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
