<template>
  <div
    class="a-back-top"
    @click="goTop"
    name="button"
    v-show="visible"
    :style="customStyle"
  >
    <slot>
      <svg width="16" height="16" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="back-icon" aria-hidden="true" style="height: 16px; width: 16px;">
        <g>
          <path d="M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z" fill-rule="evenodd"></path>
        </g>
      </svg>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    rate: { // 速率
      type: Number,
      default: 6
    },
    customStyle: {
      type: Object,
      default () {
        return {

        }
      }
    }
  },
  data () {
    return {
      scrollTop: 0,
      visible: false,
      interval: null,
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    handleScroll () {
      this.visible = window.pageYOffset > this.visibilityHeight
      this.scrollTop = window.pageYOffset
    },
    goTop (e) {
      this.beforeScroll();
      this.interval = setInterval(() => {
        this.scrollTop = this.scrollTop + (-this.scrollTop) / this.rate
        window.scrollTo(0, this.scrollTop)

        if (this.scrollTop <= 0) {
          window.scrollTo(0, 0)
          clearInterval(this.interval)
          this.scrolled();
        }
      }, 1000 / 60)
    },
    beforeScroll () {
      this.$emit('beforeScroll');
      console.log('beforeScroll');
    },
    scrolled () {
      this.$emit('scrolled');
      console.log('scrolled');
    }
  }
}
</script>

<style lang="scss">
.a-back-top{
  position: fixed;
  z-index: 100;
  right: 50px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  line-height: 45px;
  background: #e7eaf1;
  text-align: center;
  cursor: pointer;

  .back-icon{
    fill: #9aaabf;
    background: none;
  }
}
</style>