# Transition 过渡动画

内置丰富的过渡动画，可以直接作用于 `<transition>` 组件。

## fade 淡入淡出

<Common-Democode>
  <transition-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button @click="show = !show">Click Me</a-button>
        <div style="height: 100px;">
          <transition name="a-fade-in">
            <div v-show="show" class="transition-box">.a-fade-in</div>
          </transition>
        </div>
      </div>
    </template>
    <script>
    export default {
      data: () => ({
        show: true
      })
    };
    </script>
    <style>
    .transition-box {
      margin-bottom: 10px;
      width: 200px;
      height: 100px;
      border-radius: 4px;
      background-color: #409eff;
      text-align: center;
      color: #fff;
      padding: 40px 20px;
      box-sizing: border-box;
      margin-right: 20px;
    }
    </style>
  </highlight-code>
</Common-Democode>

## zoom 缩放

<Common-Democode>
  <transition-demo1-2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button @click="show = !show">Click Me</a-button>
        <div style="height: 100px;">
          <transition name="a-fade-in">
            <div v-show="show" class="transition-box">.a-fade-in</div>
          </transition>
        </div>
      </div>
    </template>
    <script>
    export default {
      data: () => ({
        show: true
      })
    };
    </script>
    <style>
    .transition-box {
      margin-bottom: 10px;
      width: 200px;
      height: 100px;
      border-radius: 4px;
      background-color: #409eff;
      text-align: center;
      color: #fff;
      padding: 40px 20px;
      box-sizing: border-box;
      margin-right: 20px;
    }
    </style>
  </highlight-code>
</Common-Democode>

## slide 滑入滑出

<Common-Democode>
  <transition-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="anim-demo-wrapper">
        <div>
          <a-button @click="show1 = !show1">显示动画</a-button>
          <transition name="a-slide-up">
            <div v-show="show1" class="transition-box-demo2">向上</div>
          </transition>
        </div>
        <div>
          <a-button @click="show2 = !show2">显示动画</a-button>
          <transition name="a-slide-down">
            <div v-show="show2" class="transition-box-demo2">向下</div>
          </transition>
        </div>
        <div>
          <a-button @click="show3 = !show3">显示动画</a-button>
          <transition name="a-slide-left">
            <div v-show="show3" class="transition-box-demo2">向左</div>
          </transition>
        </div>
        <div>
          <a-button @click="show4 = !show4">显示动画</a-button>
          <transition name="a-slide-right">
            <div v-show="show4" class="transition-box-demo2">向右</div>
          </transition>
        </div>
      </div>
    </template>
    <script>
    export default {
      data: () => ({
        show1: true,
        show2: true,
        show3: true,
        show4: true
      })
    };
    </script>
    <style>
    .transition-box-demo2 {
      margin-bottom: 10px;
      height: 100px;
      line-height: 100px;
      border-radius: 4px;
      background-color: #409eff;
      text-align: center;
      color: #fff;
      box-sizing: border-box;
    }
    .anim-demo-wrapper {
      display: flex;
      justify-content: space-between;
    }
    .anim-demo-wrapper > div {
      width: 22%;
    }
    </style>
  </highlight-code>
</Common-Democode>

## fold 折叠

<Common-Democode>
  <transition-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="anim-demo-wrapper">
        <div>
          <a-button @click="show1 = !show1">显示动画</a-button>
          <div style="height: 100px; overflow: hidden;">
            <transition name="a-slide-up">
              <div v-show="show1" class="transition-box-demo2">向上</div>
            </transition>
          </div>
        </div>
        <div>
          <a-button @click="show2 = !show2">显示动画</a-button>
          <div style="height: 100px; overflow: hidden;">
            <transition name="a-slide-down">
              <div v-show="show2" class="transition-box-demo2">向下</div>
            </transition>
          </div>
        </div>
        <div>
          <a-button @click="show3 = !show3">显示动画</a-button>
          <div style="height: 100px; overflow: hidden;">
            <transition name="a-slide-left">
              <div v-show="show3" class="transition-box-demo2">向左</div>
            </transition>
          </div>
        </div>
        <div>
          <a-button @click="show4 = !show4">显示动画</a-button>
          <div style="height: 100px; overflow: hidden;">
            <transition name="a-slide-right">
              <div v-show="show4" class="transition-box-demo2">向右</div>
            </transition>
          </div>
        </div>
      </div>
    </template>
    <script>
    export default {
      data: () => ({
        show1: true,
        show2: true,
        show3: true,
        show4: true,
      })
    };
    </script>
    <style>
    .transition-box-demo2 {
      margin-bottom: 10px;
      height: 100px;
      line-height: 100px;
      border-radius: 4px;
      background-color: #409eff;
      text-align: center;
      color: #fff;
      box-sizing: border-box;
    }
    .anim-demo-wrapper {
      display: flex;
      justify-content: space-between;
    }
    .anim-demo-wrapper > div {
      width: 22%;
    }
    </style>
  </highlight-code>
</Common-Democode>

## flip 列表过渡

关于列表过渡，请参考文档：[列表过渡](https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%97%E8%A1%A8%E8%BF%87%E6%B8%A1)

<Common-Democode>
  <transition-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button v-on:click="shuffle">Shuffle</a-button>
        <a-button v-on:click="add">Add</a-button>
        <a-button v-on:click="remove">Remove</a-button>
        <transition-group name="a-flip-list" tag="p">
          <span v-for="item in items" v-bind:key="item" class="a-flip-list-item">{{ item }}</span>
        </transition-group>
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          nextNum: 10
        };
      },
      methods: {
        randomIndex: function() {
          return Math.floor(Math.random() * this.items.length);
        },
        add: function() {
          this.items.splice(this.randomIndex(), 0, this.nextNum++);
        },
        remove: function() {
          this.items.splice(this.randomIndex(), 1);
        },
        shuffle: function() {
          this.items.sort(() => Math.random() - 0.5)
        }
      }
    };
    </script>
    <style>
    .a-flip-list-item {
      transition: all 1s;
      display: inline-block;
      margin-right: 10px;
    }
    </style>
  </highlight-code>
</Common-Democode>

例子来源：[列表的排序过渡](https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%97%E8%A1%A8%E7%9A%84%E6%8E%92%E5%BA%8F%E8%BF%87%E6%B8%A1)


## 旋转

给任意组件或者 DIV 添加 `a-spin` 类名，即可使其旋转。

<Common-Democode>
  <transition-demo7 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <section>
        <a-button class="a-spin">按钮</a-button>
        <a-icon type="loading" class="a-spin" />
        <a-icon type="setting" class="a-spin" />
      </section>
    </template>
  </highlight-code>
</Common-Democode>

## API

| 属性         | 说明                                     | 类型    | 默认值  |
| :----------- | :--------------------------------------- | :------ | :------ |
| `name`   | `<transition>` 或者 `<transition-group>` 组件属性                   | String  | -     |


### `name` 可选值：

| `name` 值 | 说明 |
| :--- | :--- |
| `a-fade-in` | 淡入淡出 |
| `a-zoom` | 缩放 |
| `a-spin` | 旋转，注意：直接添加类名即可 |
| `a-slide-up` | 向上滑入滑出 |
| `a-slide-down` | 向下滑入滑出 |
| `a-slide-left` | 向左滑入滑出 |
| `a-slide-right` | 向右滑入滑出 |
| `a-fold` | 居中折叠 |
| `a-fold-up` | 向上折叠 |
| `a-fold-down` | 向下折叠 |
| `a-fold-left` | 向左折叠 |
| `a-fold-right` | 向右折叠 |
| `a-flip-list` | 列表过渡，适用于 `<transition-group>` 组件 |
