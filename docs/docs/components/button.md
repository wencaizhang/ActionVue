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


## 禁用状态

<Common-Democode title="" description="">
  <button-disabled-demo />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <a-button type="primary">Primary</a-button>
        <a-button type="primary" disabled>Primary(disabled)</a-button>
        <br />
        <a-button>Default</a-button>
        <a-button disabled>Default(disabled)</a-button>
        <br />
        <a-button type="dashed">Dashed</a-button>
        <a-button type="dashed" disabled>Dashed(disabled)</a-button>
        <br />
        <a-button type="danger">Danger</a-button>
        <a-button type="danger" disabled>Danger(disabled)</a-button>
      </div>
    </template>
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
    <template>
      <div>
        <a-button-group>
          <a-button>Cancel</a-button>
          <a-button type="primary">OK</a-button>
        </a-button-group>
        <a-button-group>
          <a-button disabled>L</a-button>
          <a-button disabled>M</a-button>
          <a-button disabled>R</a-button>
        </a-button-group>
        <a-button-group>
          <a-button type="primary">L</a-button>
          <a-button>M</a-button>
          <a-button>M</a-button>
          <a-button type="dashed">R</a-button>
        </a-button-group>
        
        <h4>With Icon</h4>
        <a-button-group>
          <a-button type="primary">
            <a-icon type="left" />Go back
          </a-button>
          <a-button type="primary">
            Go forward<a-icon type="right" />
          </a-button>
        </a-button-group>
        <a-button-group>
          <a-button type="primary" icon="home" />
          <a-button type="primary" icon="setting" />
        </a-button-group>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

## API

参数 | 说明 | 类型 | 默认值
:--- | :--- | :--- | :---
`type` | 设置按钮类型，可选值为 `primary` `dashed` `danger` | String | -
`loading` | 设置按钮载入状态 | Boolean | `false`
`disabled` | 按钮禁用状态 | Boolean | `false`
`block` | 将按钮宽度调整为其父宽度的选项 | Boolean | `false`
`icon` | 设置按钮的图标类型 | String | -

### 事件

事件名 | 说明 | 回调参数
:--- | :--- | :---
`click` | 点击按钮时的回调 | `function()`
