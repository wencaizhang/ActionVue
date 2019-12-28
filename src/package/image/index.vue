<template>
  <div class="a-img-wrapper" :class="clazz">
    <img v-if="loaded" :src="imgSrc" v-bind="$attrs" :style="{ 'object-fit': fit }" />
    <div v-if="loading" class="a-img__loading">
      <slot name="loading">
        加载中...
      </slot>
    </div>
    <div v-if="error" class="a-img__error">
      <slot name="error">
        加载失败
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default:
        "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1565061553&di=a7d802393fbe4d61b27b50b8d3619b08&src=http://5b0988e595225.cdn.sohucs.com/images/20180118/a0163c6be9d247918669229bed6c7280.png"
    },
    fit: {
      type: String
    },
    round: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    clazz () {
      return { 'a-img-wrapper__round': this.round }
    },
    imgSrc() {
      return this.src;
    }
  },
  data() {
    return {
      loading: false,
      error: false,
      loaded: false,
    };
  },
  mounted() {
    this.loadImage();
  },
  methods: {
    loadImage() {
      const img = new Image();
      img.onload = e => {
        this.loading = true;
        this.handleLoad(e, img);
      };
      img.onerror = this.handleError.bind(this);

      img.src = this.imgSrc;
    },
    handleLoad(e, img) {
      // 原始尺寸
      this.imageWidth = img.width;
      this.imageHeight = img.height;

      this.loading = false;
      this.loaded = true;
      this.$emit("load", e);
    },
    handleError(e) {
      this.loading = false;
      this.error = true;
      this.$emit("error", e);
    },
  }
};
</script>

<style scoped>
.a-img-wrapper {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  font-size: 14px;
  overflow: hidden;
  color: #969799;
}
.a-img-wrapper.a-img-wrapper__round {
  border-radius: 50%;
}
.a-img-wrapper img {
  max-width: 100%;
  max-height: 100%;
}
.a-img-wrapper .mask {
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
.a-img-wrapper:hover .mask {
  opacity: 1;
}

.a-img-wrapper .mask .action {
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

.a-img__loading,
.a-img__error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
}
</style>
