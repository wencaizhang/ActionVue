# button 按钮



## 基本用法

<Common-Democode title="" description="">
  <button-type-demo />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button>默认按钮</a-button>
        <a-button>主要按钮</a-button>
        <a-button>次要按钮</a-button>
        <a-button>危险按钮</a-button>
      </div>
    </template>
  </highlight-code>
</Common-Democode>


## 加载中

<Common-Democode title="" description="">
  <button-loading-demo />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button :loading="loading" @click="loading = !loading">加载中</a-button>
      </div>
    </template>
    <script>
    export default {
      data () {
        return {
          loading: false
        }
      }
    };
    </script>
  </highlight-code>
</Common-Democode>



## 加载中

<Common-Democode title="" description="">
  <button-group-demo />
  <highlight-code slot="codeText" lang="vue">
  </highlight-code>
</Common-Democode>
