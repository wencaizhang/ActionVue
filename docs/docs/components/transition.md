# Transition 过渡动画

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

## slide 滑入滑出

<Common-Democode>
  <transition-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button @click="show = !show">Click Me</a-button>
        <div style="height: 100px; overflow: hidden;">
          <transition name="a-slide">
            <div v-show="show" class="transition-box">.a-slide</div>
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