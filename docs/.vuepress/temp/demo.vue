<template>
  <div class="demo">
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot/>
      </div>

      <div v-if="codeVisible" class="code-content">
        <div class="code-content-height">
          <div class="code-user-desc" v-if="codeDesc">{{ codeDesc }}</div>
          <pre><code>{{ code }}</code></pre>
          <!-- <slot name="code" /> -->
        </div>
      </div>

      <div class="lock-code" @click="codeVisible = !codeVisible">
        <span class="icon" :class="[ codeVisible ? 'icon-down' : 'icon-up' ]"></span>
        <span class="lock-code-word">{{ codeVisible ? '隐藏代码' : '显示代码' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  components: {
    // GIcon,
  },
  props: {
    code: {
      type: String,
      default: "// some code"
    },
    codeDesc: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      codeVisible: false
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@iconBorderColor: #d3dce6;
@iconBorderColorHover: #409eff;

.icon {
  position: relative;
  display: inline-block;
  margin-left: 10px;
  width: 0;
  height: 0;
  border-width: 6px;
  border-style: solid;
}

.icon-down {
  top: 1px;
  border-color: @iconBorderColor transparent transparent transparent;
  // box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
}
.icon-up {
  bottom: 1px;
  border-color: transparent transparent @iconBorderColor transparent;
}
.lock-code:hover .icon-down {
  border-top-color: @iconBorderColorHover;
}
.lock-code:hover .icon-up {
  border-bottom-color: @iconBorderColorHover;
}

.component-wrapper {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;

  .component-wrapper-demo {
    padding: 24px 24px 15px 24px;
  }

  h4 {
    margin: 55px 0 20px;
  }

  &:hover {
    .lock-code .lock-code-word {
      font-size: 14px;
      // transform: translateX(-40px);
      opacity: 1;
    }

    .lock-code .icon-down {
      // transform: translateX(-40px);
    }

    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
  }

  .code-content {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    transition: height .2s;

    .code-content-height {
      .code-user-desc {
        background: #ffffff;
        margin: 10px 10px 0 10px;
        padding: 5px 10px;
        font-size: 14px;
        line-height: 26px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
      }

      > pre {
        background: none;

        > code {
          color: #3182bd;
        }
      }
    }
  }

  .lock-code {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    line-height: 44px;
    color: #d3dce6;

    &:hover {
      background-color: #f9fafc;

      .lock-code-word {
        color: #409eff;
      }

      .icon-down {
        fill: #409eff;
      }
    }

    .icon-down {
      transform: translateX(0px);
      transition: all .1s;
    }

    text-align: center;

    .lock-code-word {
      font-size: 0px;
      // margin-left: 15px;
      display: inline-block;
      transition: all .1s;
      opacity: 0;
    }
  }
}
</style>