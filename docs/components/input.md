# Input 输入框

<Common-Democode title="" description="">
  <input-demo1 />
  <highlight-code slot="codeText" lang="vue">
  </highlight-code>
</Common-Democode>


## API

| 属性             | 说明                                           | 类型    | 默认值  |
| :--------------- | :--------------------------------------------- | :------ | :------ |
| `type`           | 声明 input 类型，同原生 input 标签的 type 属性 | String  | `text`  |
| `disabled`       | 是否禁用状态                                   | Boolean | `false` |
| `readonly`       | 是否只读状态                                   | Boolean | `false` |
| `value(v-model)` | 输入框内容                                     | String  | -       |

### 事件

| 事件名称 | 说明                   | 回调参数      |
| :------- | :--------------------- | :------------ |
| `change` | 输入框内容变化时的回调 | `function(e)` |