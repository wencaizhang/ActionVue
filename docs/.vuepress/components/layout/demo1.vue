<template>
  <div id="components-layout-demo-basic">
    <a-layout style="height: 50vh;">
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

    <hr />

    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
    <hr />

    <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .a-layout-header,
#components-layout-demo-basic .a-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .a-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .a-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .a-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .a-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .a-layout:last-child {
  margin: 0;
}
</style>