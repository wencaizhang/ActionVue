# Input 输入框 <Common-SourceCodeLink comp="input" />

## 基本使用

<Common-Democode title="" description="">
  <input-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <a-input
        v-model="value"
        placeholder="Basic usage"
      />
    </template>

    <script>
    export default {
      data () {
        return {
          value: '张三',
        }
      }
    }
    </script>
  </highlight-code>
</Common-Democode>


## 前缀和后缀
<Common-Democode title="" description="在输入框上添加前缀或后缀图标。">
  <input-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <a-input v-model="userName" placeholder="Basic usage" style="width: 200px" ref="userNameInput">
        <a-icon slot="prefix" name="user" />
        <a-icon v-if="userName" slot="suffix" name="close-circle" @click="emitEmpty" />
      </a-input>
    </template>
    <script>
    export default {
      data() {
        return {
          userName: ""
        };
      },
      methods: {
        emitEmpty() {
          this.$refs.userNameInput.focus();
          this.userName = "";
        }
      }
    };
    </script>
    <style>
    .a-icon {
      cursor: pointer;
      color: #ccc;
      transition: color 0.3s;
      font-size: 12px;
    }
    .a-icon:hover {
      color: #999;
    }
    .a-icon:active {
      color: #666;
    }
    </style>
  </highlight-code>
</Common-Democode>


## API

| 属性             | 说明                                           | 类型    | 默认值  |
| :--------------- | :--------------------------------------------- | :------ | :------ |
| `type`           | 声明 input 类型，同原生 input 标签的 type 属性 | String  | `text`  |
| `disabled`       | 是否禁用状态                                   | Boolean | `false` |
| `readonly`       | 是否只读状态                                   | Boolean | `false` |
| `value(v-model)` | 输入框内容                                     | String  | -       |
| `prefix`         | input 的前缀图标                           | slot  | -       |
| `suffix`         | input 的后缀图标                           | slot  | -       |

### 事件

| 事件名称 | 说明                   | 回调参数      |
| :------- | :--------------------- | :------------ |
| `change` | 输入框内容变化时的回调 | `function(e)` |
| `focus` | 输入框聚焦时的回调 | `function(e)` |
| `blur` | 输入框失去焦点的回调 | `function(e)` |