<template>
  <h1>Button 示例</h1>
  <h2>示例1</h2>

  <DemoCode description="按钮主题，支持 link / text / button"
    :code="code1"
  >
    <div>
      <Button @click="onClick">你好</Button>
      <Button theme="button">你好</Button>
      <Button theme="link">你好</Button>
      <Button theme="text">你好</Button>
    </div>

  </DemoCode>


  <h2>大小</h2>

  <DemoCode description="按钮大小，支持 big / normal / small">
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
  </DemoCode>
  <h2>类型</h2>

  <DemoCode description="按钮类型，支持 main / normal / danger">
    <div>
      <div>
        <Button type="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button type="danger">危险按钮</Button>
      </div>
      <div>
        <Button theme="link" type="main">主要链接按钮</Button>
        <Button theme="link">普通链接按钮</Button>
        <Button theme="link" type="danger">危险链接按钮</Button>
      </div>
      <div>
        <Button theme="text" type="main">主要文字按钮</Button>
        <Button theme="text">普通文字按钮</Button>
        <Button theme="text" type="danger">危险文字按钮</Button>
      </div>
    </div>
  </DemoCode>

  <h2>禁用</h2>

  <DemoCode description="按钮是否禁用">
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
  </DemoCode>

  <h2>加载</h2>

  <DemoCode description="按钮加载状态">
    <div style="display: flex;">
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
  </DemoCode>

  <h2>API</h2>

  <table>
    <tr>
      <td>参数</td>
      <td>说明</td>
      <td>类型</td>
      <td>默认值</td>
    </tr>
    <tr>
      <td>theme</td>
      <td>按钮主题，支持 link / text / button</td>
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
      <td>type</td>
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
import DemoCode from "../components/DemoCode.vue";

export default {
  components: { Button, DemoCode },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    const code1 = `<div>
  <Button @click="onClick">你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
</div>`
    return { onClick, code1 };
  },
};
</script>