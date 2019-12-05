# Switch 开关 <Common-SourceCodeLink comp="switch" />

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基本用法

<Common-Democode description="最简单的用法">
  <switch-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-switch v-model="value" @change="onChange" />
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          value: true,
        };
      },
      methods: {
        onChange() {
          console.log(this.value);
        }
      }
    };
    </script>
  </highlight-code>
</Common-Democode>


## 禁用状态

<Common-Democode>
  <switch-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="switch-demo">
        <a-switch v-model="value1" :disabled="disabled" />
        <a-switch v-model="value2" :disabled="disabled" />
        <br />
        <a-button @click="disabled = !disabled">Toggle Disabled</a-button>
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          value1: true,
          value2: false,
          disabled: true,
        };
      },
    };
    </script>
    <style>
    .switch-demo .a-switch {
      margin: 8px 0;
    }
    </style>
  </highlight-code>
</Common-Democode>

## 颜色

使用 `active-color` 属性与 `inactive-color` 属性来设置开关的颜色。

<Common-Democode>
  <switch-demo7 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-switch v-model="value" />
        <a-switch v-model="value"
          active-color="#13ce66"
          inactive-color="#f5222d"
        />
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          value: true,
        };
      },
    };
    </script>
  </highlight-code>
</Common-Democode>


## 文字

使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述，这样可以有效扩大开关的点击范围，更容易触发开关。

使用 `textInline` 来设置文字在开关内部，还是在开关外部。

<Common-Democode>
  <switch-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="switch-demo">
        <a-switch v-model="value1" :textInline="textInline" activeText="按年付费" inactiveText="按月付费" />
        <br />
        <a-switch v-model="value2" :textInline="textInline" activeText="开" inactiveText="关" />
        <br />
        <a-switch v-model="value2" :textInline="textInline" activeText="1" inactiveText="0" />
        <br />
        <a-button @click="textInline = !textInline">Toggle TextInline</a-button>
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          value1: true,
          value2: true,
          value3: true,
          textInline: false,
        };
      },
    };
    </script>
    <style>
    .switch-demo .a-switch {
      margin: 8px 0;
    }
    </style>
  </highlight-code>
</Common-Democode>

## value 类型扩展

设置 `active-value` 和 `inactive-value` 属性，接受 Boolean, String 或 Number 类型的值。这样可以使 switch 的值更加灵活。

<Common-Democode>
  <switch-demo8 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-switch v-model="value1"
          activeText="1"
          inactiveText="0"
          active-value="1"
          inactive-value="0"
          @change="onChange1"
        />
        <br />
        <a-switch v-model="value2"
          activeText="on"
          inactiveText="off"
          active-value="on"
          inactive-value="off"
          @change="onChange2"
        />
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          value1: true,
          value2: true,
        };
      },
      methods: {
        onChange1 () {
          console.log(this.value1);
        },
        onChange2 () {
          console.log(this.value2);
        }
      }
    };
    </script>
  </highlight-code>
</Common-Democode>

## 图标

使用 `active-icon` 属性与 `inactive-icon` 属性来设置开关显示的图标，此时分别会忽略 `active-text` 和 `inactive-text`，图标显示在开关内部。

*文字和图标可以混合使用*

<Common-Democode>
  <switch-demo5 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="switch-demo">
        <a-switch v-model="value"
          active-icon="check-circle"
          inactive-icon="close-circle"
        />
        <a-switch v-model="value"
          active-icon="check-circle"
          inactive-text="关"
        />
        <a-switch v-model="value"
          active-text="开"
          inactive-icon="close-circle"
        />
        <a-switch v-model="value"
          active-text="开"
          inactive-text="关"
        />
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          value: true,
        };
      },
      methods: {
        onChange() {
          console.log(this.value);
        }
      }
    };
    </script>
    <style>
    .switch-demo .a-switch {
      margin: 8px 0;
    }
    </style>
  </highlight-code>
</Common-Democode>


## 加载中

加载中状态说明开关操作仍在执行中

<Common-Democode>
  <switch-demo6 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="switch-demo">
        Loading: <a-switch v-model="loading" active-text="on" inactive-text="off"/>
        <br />
        <a-switch v-model="value1" loading />
        <a-switch v-model="value2" loading />
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          value1: true,
          value2: false,
        };
      },
      methods: {
        onChange() {
          console.log(this.value1);
        }
      }
    };
    </script>
    <style>
    .switch-demo .a-switch {
      margin: 8px 0;
    }
    </style>
  </highlight-code>
</Common-Democode>

## API

| 属性             | 说明                    | 类型                      | 默认值  |
| :--------------- | :---------------------- | :------------------------ | :------ |
| `v-model`        | 绑定值                  | Boolean                   | `true`  |
| `disabled`       | 是否禁用                | Boolean                   | `false` |
| `loading`        | 加载中                  | Boolean                   | `false` |
| `active-color`   | switch 打开时的背景色   | String                    | `#1890ff`  |
| `inactive-color` | switch 关闭时的背景色   | String                    | `#ddd`  |
| `active-value`   | switch 打开时的值       | Boolean / String / Number | `true`  |
| `inactive-value` | switch 关闭时的值       | Boolean / String / Number | `false` |
| `active-text`    | switch 打开时的文字描述 | String                    | -       |
| `inactive-text`  | switch 关闭时的文字描述 | String                    | -       |
| `textInline`  | switch 文字描述是否在 switch 内部 | Boolean               | `true`       |
| `active-icon`    | switch 打开时所显示图标的类名，<br/>设置此项会忽略 `active-text` | String                    | -       |
| `inactive-icon`  | switch 关闭时所显示图标的类名，<br/>设置此项会忽略 `inactive-text` | String                    | -       |


### 事件

| 事件名称 | 说明                            | 回调参数                    |
| :------- | :------------------------------ | :-------------------------- |
| `change` | switch 状态发生变化时的回调函数 | `Function(checked:Boolean)` |
