# Pager 分页器 <Common-SourceCodeLink comp="pager" />


## 简洁模式
<Common-Democode title="" description="">
  <pager-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <a-pager
        :totalPage="100"
        :currPage="currPage"
        :hideIfOnePage="false"
        @onChange="onPageChange"
      />
    </template>
    <script>
      export default {
        data() {
          return {
            currPage: 30
          };
        },
        methods: {
          onPageChange(item) {
            this.currPage = item;
            console.log("onPageChange", item);
          }
        }
      };
    </script>
  </highlight-code>
</Common-Democode>

## 正常模式

<Common-Democode title="" description="">
  <pager-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <a-pager
        :totalPage="100"
        :currPage="currPage"
        :hideIfOnePage="false"
        mode="simple"
        @onChange="onPageChange"
      />
    </template>
    <script>
      export default {
        data() {
          return {
            currPage: 30
          };
        },
        methods: {
          onPageChange(item) {
            this.currPage = item;
            console.log("onPageChange", item);
          }
        }
      };
    </script>
  </highlight-code>
</Common-Democode>


## 当只有一页时隐藏分页

当只有一页时，通过设置 hide-on-single-page 属性来隐藏分页。

<Common-Democode title="" description="">
  <pager-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <div style="margin-bottom: 8px;">
          当只有一页时隐藏分页：
          <a-switch v-model="hideIfOnePage" active-text="on" inactive-text="off"/>
        </div>
        <a-pager
          :totalPage="1"
          :currPage="currPage"
          :hideIfOnePage="hideIfOnePage"
          @onChange="onPageChange"
        />
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          currPage: 1,
          hideIfOnePage: true,
        };
      },
      methods: {
        onPageChange(item) {
          this.currPage = item;
          console.log("onPageChange", item);
        }
      }
    };
    </script>
  </highlight-code>
</Common-Democode>


## API

属性 |	说明	| 类型 |	默认值
:--- | :--- | :--- | :---
`totalPage` | 总页数 | Number | -
`currPage` | 当前页数 | Number | -
`hideIfOnePage` | 只有一页是否自动隐藏 | Boolean | `true`
`mode` | 页码模式，有 `sample` `normal` | String | simple normal


### 事件

事件名称 |	说明	| 回调参数
:--- | :--- | :--- 
`onChange` | 页码发生变化时调用 | `Function(currPage:Number)`