# 如何发布到 npm 

## 发布流程

1. 创建项目时初始化，用于创建 `package.json`，也可以手动创建此文件。

```sh
npm init # 初始化
```

2. 开发过程中可能需要安装一些依赖包（如 vue）

```sh
npm install vue # 安装依赖
```

3. 开发完成，在发布前需要在命令行中登录 npm 账号（需提前注册账号）：

```sh
npm login # 登录 npm 账号
```

4. 发布：

```sh
npm publish # 发布 npm 包
```

## package.json 字段

+ `name`

  必需，npm 包的名字

+ `version`
  
  必需，npm 包的版本，每次发布时都要修改这个字段

+ `main`
  
  npm 包入口文件，它就是将来别人使用我们的 npm 包时，通过 `require` 或者 `import` 引入的文件。

+ `keywords` 

  关键字，Array 类型，npm 包的关键字，方便别人通过搜索看到我们的 npm 包。

+ `repository`

  npm 源码托管地址，别人会根据它来查看我们的源码

+ `license`

  开源协议，为你的 npm 包选择一个合适的协议非常重要

下面是一个简单的 `package.json` 例子：

```json
{  
  "name": "actionvue",
  "version": "0.1.1",
  "description": "UI components Base on vue.js",
  "license": "MIT",
  "author": "wencaizhang <1052642137@qq.como>",
  "main": "./src/index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wencaizhang/ActionVue.git"
  },
  "license": "MIT"
}
```

## 深入学习

+ [关于package.json中main字段的指向问题](https://jingsam.github.io/2018/03/12/npm-main.html)
+ [开发组件库时 Vue 应该放哪儿: devDependencies or peerDependencies？](https://jingsam.github.io/2016/11/01/peerDependencies-in-Vue-components.html)