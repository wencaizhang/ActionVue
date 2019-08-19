<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <div class="logo">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        >

        <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>
      </div>
      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <a-button
          class="action-button"
          type="primary"
        >
          <NavLink
            style="color: #fff;"
            class="action-button"
            :item="actionLink"
          />
        </a-button>
        <!-- Place this tag where you want the button to render. -->
        <github-button href="https://github.com/wencaizhang/ActionVue" data-size="large" data-show-count="true" aria-label="Star wencaizhang/ActionVue on GitHub">Star</github-button>
      </p>
    </header>
    
    <div class="index-bg-footer"><img src="https://file.iviewui.com/dist/1dd818d51d9a168714dd715897b4d769.png"></div>

    <Content class="theme-default-content custom"/>

    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import GithubButton from 'vue-github-button'


export default {
  components: { NavLink, GithubButton},
  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">

.home {
  min-width 100vw
  min-height 100vh
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index 30; // 覆盖 navbar
  background-color: #fff;
  background-image: url(https://file.iviewui.com/dist/dc1e877946dd4568404a432623fca8fc.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;

  display flex
  flex-direction column
  justify-content space-between

  .hero {
    padding-left 10%
    padding-top 10%
  }

  .description {
    margin-bottom 50px
    font-size 24px
  }
  .logo {
    display flex
    align-items center;
    img {
      width 100px
      height 100px
    }
    h1 {
      display inline-block
      font-size 3rem
    }
  }
    
}
.index-bg-footer {
    width: 260px;
    height: 90px;
    position: absolute;
    bottom: 0;
    left: 0
}
.action {
  display flex
  align-items center
}
.footer
  padding 2.5rem
  text-align center
  color lighten($textColor, 25%)
  z-index 10

</style>
