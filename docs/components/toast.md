# Toast 轻提示

## 简单使用

默认情况下，toast 提示会在 3 秒后自动关闭。

<Common-Democode title="基本使用" description="">
  <toast-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button @click="onClick">简单 Toast</a-button>
      </div>
    </template>
    <script>
    export default {
      methods: {
        onClick() {
          this.$toast("This is a toast");
        }
      }
    };
    </script>
  </highlight-code>
</Common-Democode>


## 指定位置


<Common-Democode>
  <toast-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button @click="onClick('top')">上方弹出</a-button>
        <a-button @click="onClick('middle')">中间弹出</a-button>
        <a-button @click="onClick('bottom')">下方弹出</a-button>
      </div>
    </template>
    <script>
    export default {
      methods: {
        onClick (dir) {
          this.$toast({
            message: "This is a toast",
            position: dir || 'top',
          });
        },
      }
    };
    </script>
  </highlight-code>
</Common-Democode>


## 自定义关闭按钮文字和回调函数

<Common-Democode>
  <toast-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button @click="onClick">设置关闭按钮文案</a-button>
      </div>
    </template>
    <script>
    export default {
      methods: {
        onClick () {
          this.$toast({
            message: "终于等到你，还好我没放弃QAQ",
            closeText: '我来了',
            onClose () {
              this.$toast('众里寻她千百度，蓦然回首，那人却在灯火阑珊处。')
            }
          });
        },
      }
    };
    </script>
  </highlight-code>
</Common-Democode>

## 解析HTML

<Common-Democode>
  <toast-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button @click="onClick">解析HTML</a-button>
      </div>
    </template>
    <script>
    export default {
      methods: {
        onClick() {
          this.$toast({
            message: `
              <div style="text-align: center;">
                <p>给你我的小心心</p>
                <svg xmlns="https://www.w3.org/2000/svg"
                  xmlns:xlink="https://www.w3.org/1999/xlink"
                  version="1.1" id="Capa_1" x="0px" y="0px" width="50px" height="50px"
                  viewBox="0 0 60 60" style="enable-background:new 0 0 50 50;"
                  xml:space="preserve" width="512px" height="512px"
                >
                  <g id="heart">
                    <path style="fill:#C03A2B;" d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543  c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503  c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
                      />
                    <path style="fill:#ED7161;" d="M6,18.078c-0.553,0-1-0.447-1-1c0-5.514,4.486-10,10-10c0.553,0,1,0.447,1,1s-0.447,1-1,1  c-4.411,0-8,3.589-8,8C7,17.631,6.553,18.078,6,18.078z" />
                  </g>
                </svg>
              </div>
            `,
            enableHtml: true,
            autoClose: false,
            closeText: "收下"
          });
        }
      }
    };
    </script>
    <style>
    svg {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
    #heart {
      animation-name: beat;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
    }
    @keyframes beat {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    </style>
  </highlight-code>
</Common-Democode>

## 单例模式

Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例：


<Common-CodeBlock>
  <highlight-code slot="codeText" lang="javascript">
    // main.js
    Vue.prototype.$toast.allowMultiple();
  </highlight-code>
</Common-CodeBlock>


`allowMultiple` 方法接收一个 Boolean 类型参数来决定是否允许同时存在多个 Toast，参数默认值是 `true`。

组件中调用方式不变。

<Common-CodeBlock>
  <highlight-code slot="codeText" lang="javascript">
    this.$toast('第一个 Toast');
    this.$toast('第二个 Toast');
  </highlight-code>
</Common-CodeBlock>


## API

:::tip 提示
引入 Toast 组件后，会自动在 `Vue` 的 `prototype` 上挂载 `$toast` 方法，便于在组件内调用。
:::

最简单的调用方式：

<Common-CodeBlock>
  <highlight-code slot="codeText" lang="javascript">
    this.$toast('this is a toast')
  </highlight-code>
</Common-CodeBlock>

或者传入一个对象：

<Common-CodeBlock>
  <highlight-code slot="codeText" lang="javascript">
    this.$toast({
      message: 'this is a toast',
      durition: 2
    })
  </highlight-code>
</Common-CodeBlock>


下面是详细的参数：

| 属性         | 说明                                     | 类型    | 默认值  |
| :----------- | :--------------------------------------- | :------ | :------ |
| `durition`   | 默认自动关闭延时，单位秒                   | Number  | `3`     |
| `autoClose`  | 是否自动关闭                             | Boolean | `true`  |
| `showClose`  | 是否显示关闭按钮                          | Boolean | `true`  |
| `position`   | 弹出位置，可选 `top`, `middle`, `bottom` | String  | `top`   |
| `closeText`  | 确认按钮文字                             | String  | `top`   |
| `enableHtml` | 是否允许解析 HTML                        | Boolean | `false` |

### 事件

| 事件名称  | 说明             | 回调参数 |
| :-------- | :--------------- | :------- |
| `onClose` | 关闭时的回调函数 | null     |
