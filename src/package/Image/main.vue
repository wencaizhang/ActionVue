<template>
  <div>
    <div class="img-wrapper">
      <!-- <div v-if="!loading && !error" class="mask">
        <a-icon @click="handlePreview" class="action" type="eye" />
      </div> -->

      <slot v-if="loading" name="placeholder">
        <a-spin />
      </slot>

      <slot v-else-if="error" name="error">
        <div style="text-align: center;">
          <a-icon type="picture" />
        </div>
      </slot>

      <img v-else :src="src" alt="alt">
    </div>
    <!-- <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal> -->
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: String,
  },
  data () {
    return {
      // previewVisible: false,
      // previewImage: '',

      loading: false,
      error: false,
    }
  },
  mounted () {
    this.loadImage();
  },
  methods: {
    loadImage () {
      this.loading = true;
      this.error = false;

      const img = new Image();
      img.onload = e => this.handleLoad(e, img);
      img.onerror = this.handleError.bind(this);

      img.src = this.src;
    },
    handleLoad (e, img) {
      this.imageWidth = img.width;
      this.imageHeight = img.height;
      this.loading = false;
      console.log(img);
    },
    handleError (e) {
      this.loading = false;
      this.error = true;
      this.$emit('error', e);
      console.log(e);
    },

    // handleCancel () {
    //   this.previewVisible = false
    // },
    // handlePreview (file) {
    //   this.previewImage = this.src;
    //   this.previewVisible = true
    // },
  }
}
</script>

<style scoped>
.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  width: 100px;
  height: 100px;
  border-radius: 4px;
}
.img-wrapper img {
  max-width: 100%;
  max-height: 100%;
}
.img-wrapper .mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  width: 100%;
  height: 100%;
  width: 100px;
  height: 100px;
  opacity: 0;
  border: 5px solid transparent;
}
.img-wrapper:hover .mask {
  opacity: 1;
}

.img-wrapper .mask .action {
  display: inline-block;
  z-index: 10;
  width: 16px;
  height: 16px;
  padding: 0;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 4px;
}
</style>
