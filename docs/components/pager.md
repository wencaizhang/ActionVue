# Pager 分页器


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
        <label>
          当只有一页时隐藏分页
          <input type="checkbox" v-model="hideIfOnePage">
        </label>
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