# vue 插件

我们通过插件的方式来为 Vue 扩展功能，比如给 Vue 构造函数添加方法，给 Vue 原型添加方法，添加全局指令，添加全局 mixins。这是官方推荐的一种方式：[插件](https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6)

## 插件开发非常简单

插件只需要暴露一个对象，对象有一个 `install` 属性，`install` 是一个函数，第一个参数是 Vue 构造函数，第二个参数是调用插件时传入的配置选项。

```js
// plugin.js
export default {
  install (vue, options) {
    // do something
  }
}
```