# Tabs 标签页 <Common-SourceCodeLink comp="tabs" />

## 基本使用

<Common-Democode>
  <tabs-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <a-tabs v-model="activeKey" @change="onChange">
        <a-tab-item title="tab 1" name="1">
          content of tab 1
        </a-tab-item>
        <a-tab-item title="tab 2" name="2">
          content of tab 2
        </a-tab-item>
      </a-tabs>
    </template>
    <script>
    export default {
      data () {
        return {
          activeKey: '1'
        }
      },
      methods: {
        onChange(activeKey) {
          console.log('activeKey', activeKey);
        }
      }
    }
    </script>
  </highlight-code>
</Common-Democode>


## 禁用某一项

<Common-Democode>
  <tabs-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <a-tabs>
        <a-tab-item title="tab 1" name="1">
          content of tab 1
        </a-tab-item>
        <a-tab-item title="tab 2" name="2" disabled>
          content of tab 2
        </a-tab-item>
        <a-tab-item title="tab 3" name="3" :disabled="false">
          content of tab 3
        </a-tab-item>
      </a-tabs>
    </template>
  </highlight-code>
</Common-Democode>




## API

### ATabs

### 属性

| 属性               | 说明                                         | 类型   | 默认值     |
| :----------------- | :------------------------------------------- | :----- | :--------- |
| `defaultActiveKey` | 初始化选中面板的 key，如果没有设置 activeKey | String | 第一个面板 |
| `v-model`          | 当前激活 tab 面板的 name                      | String | -          |

#### 事件

| 事件名称 | 说明           | 回调参数                 |
| :------- | :------------- | :----------------------- |
| `change` | 切换面板的回调 | `Function(activeKey) {}` |


### ATabItem

| 属性       | 说明             | 类型    | 默认值 |
| :--------- | :--------------- | :------ | :----- |
| `title`    | 选项卡头显示文字 | String  | -      |
| `name`      | 对应 activeKey   | String  | -      |
| `disabled` | 禁用此面板       | Boolean | false  |
