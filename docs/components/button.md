# Button 按钮


## 基本用法

<Common-Democode title="" description="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
  <button-type-demo />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button type="primary">Primary</a-button>
        <a-button>Default</a-button>
        <a-button type="dashed">Dashed</a-button>
        <a-button type="danger">Danger</a-button>
      </div>
    </template>
  </highlight-code>
</Common-Democode>


## 加载中状态

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


## 图标按钮

<Common-Democode title="" description="">
  <button-icon-demo />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button type="primary" icon="home">Home</a-button>
        <a-button icon="setting">Setting</a-button>
        <a-button icon="download">Download</a-button>
        <a-button icon="upload">Upload</a-button>
      </div>
    </template>
  </highlight-code>
</Common-Democode>


## block 按钮

<Common-Democode title="" description="block属性将使按钮适合其父宽度。">
  <button-block-demo />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button block type="primary">Primary</a-button>
        <a-button block>Default</a-button>
        <a-button block type="dashed">Dashed</a-button>
        <a-button block type="danger">Danger</a-button>
      </div>
    </template>
  </highlight-code>
</Common-Democode>


## 按钮组

<Common-Democode title="" description="">
  <button-group-demo />
  <highlight-code slot="codeText" lang="vue">
  </highlight-code>
</Common-Democode>
