# pager 分页器

<Common-Democode title="基本用法一" description="简洁模式">
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


<Common-Democode title="基本用法二" description="正常模式">
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