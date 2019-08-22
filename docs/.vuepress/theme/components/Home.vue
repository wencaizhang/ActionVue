<template>
  <main class="home flex-center" aria-labelledby="main-title">
    <bubbles-effect v-if="show" :options="options"></bubbles-effect>
    <div class="main">
      <div class="flex-center">
        <img
            class="logo"
            v-if="data.heroImage"
            :src="$withBase(data.heroImage)"
            :alt="data.heroAlt || 'hero'"
          />
        <h1 v-if="data.heroText !== null" id="main-title">
          {{ data.heroText || $title || 'Hello' }}
        </h1>
      </div>

      <p class="description">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>

      <div class="action flex-center" v-if="data.actionText && data.actionLink">
        <!-- Place this tag where you want the button to render. -->
        <github-button
          href="https://github.com/wencaizhang/ActionVue"
          data-size="large"
          data-show-count="true"
          aria-label="Star wencaizhang/ActionVue on GitHub"
        >Star</github-button>
        <div style="margin-left: 20px;"></div>
        <div class="nav-link">
          <NavLink class="action-button" :item="actionLink" />
          <div class="scroll-hover"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import GithubButton from "vue-github-button";
import Vue from "vue";
export default {
  components: { NavLink, GithubButton },
  mounted() {
    const self = this;
    import('vue-canvas-effect').then(module => {
      Vue.use(module)
      self.show = true;
      // use code
    })
  },
  data() {
    return {
      show: false,
      options: {
        color: "rgba(225,225,225,0.5)", //Bubble color
        radius: 15, //Bubble radius
        densety: 0.3, // The larger the bubble density, the greater the density (suggest no more than 1).
        clearOffset: 0.2 // The larger the bubble disappears [0-1], the longer it disappears.
      }
    };
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>


<style lang="stylus">
.home {
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 30; // 覆盖 navbar
  background-color: #5a7bef;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.flex-center {
  display flex
  align-items center
  justify-content center
}

.main {
  text-align: center;
  padding-bottom: 80px;
}

.main .logo {
  display: inline-block;
  width: 200px;
  height: 200px;
}

.main h1 {
  font-family: 'bariol-regular', 'helvetica', sans-serif;
  text-align: center;
  padding: 0;
  margin-bottom: 0;
  font-size: 10rem;
  color: #fff;
  line-height: 200px;
  margin-top: 2.1875rem;
}

.main .description {
  color: #fff;
  text-align: center;
  line-height: 80%;
  font-weight: 100;
  font-size: 3.375rem;
  margin-bottom: 3.125rem;
  font-family: 'bariol-thin', 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
}
.main .nav-link {
  position relative
  display inline-block
  // margin-left 16px
  overflow hidden
  font-size 0
}
.main .action-button {
  color: #fff;
  width: auto;
  background: none;
  box-shadow: none;
  border: 2px solid #fff;
  overflow: hidden;
  position: relative;
  font-family: 'lato-regular', helvetica, arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.875rem;
  padding: 15px 45px;
  transition: all 600ms ease-in-out;
  background-color: #5a7bef;
}

.main .scroll-hover {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 100%;
  left: 0;
  transition: all 600ms ease-in-out;
  background-color: #fff;
}
.main .action-button:hover {
  background-color: #fff;
  color: #5a7bef;
}

.main .nav-link:hover .scroll-hover {
  top: 0;
}
</style>
