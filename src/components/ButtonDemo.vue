<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick">你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>大小</h1>
  <div>
    <div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </div>
  <h1>类型</h1>
  <div>
    <dir>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </dir>
    <dir>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </dir>
    <dir>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </dir>
  </div>
  <h1>禁用</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <h1>加载</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>

  <hr style="margin: 20px 0;" />

  <h1>API</h1>

  <table>
    <tr>
      <td>参数</td>
      <td>说明</td>
      <td>类型</td>
      <td>默认值</td>
    </tr>
    <tr>
      <td>theme</td>
      <td>按钮类型，支持 link / text / button </td>
      <td>string</td>
      <td>button</td>
    </tr>
    <tr>
      <td>size</td>
      <td>按钮大小，支持 big / normal / small</td>
      <td>string</td>
      <td>normal</td>
    </tr>
    <tr>
      <td>level</td>
      <td>按钮类型，支持 main / normal / danger</td>
      <td>string</td>
      <td>normal</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>按钮是否禁用</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>按钮加载状态</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </table>
</template>
<script lang="ts">
import Button from "../libs/Button.vue";

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>