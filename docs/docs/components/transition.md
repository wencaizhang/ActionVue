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
