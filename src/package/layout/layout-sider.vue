<template>
  <div class="a-layout-sider">
    <slot />
  </div>
</template>

<script>
export default {
  name: "a-layout-sider"
};
</script>

<style lang="scss" scoped>
$siderWidth: 200px;

.a-layout-sider {
  width: $siderWidth;
}
</style>
