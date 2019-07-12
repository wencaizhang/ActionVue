# Image 图片

<Common-Democode title="基本用法一" description="简洁模式">
  <image-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-image">
        <div class="block" v-for="fit in fits" :key="fit">
          <span class="demonstration">{{ fit }}</span>
          <a-image :src="src" :fit="fit" />
        </div>
      </div>
    </template>
    <script>
    export default {
      data () {
        return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        }
      }
    };
    </script>
  </highlight-code>
</Common-Democode>

