<template>
  <div>

    <button style="padding: 10px 20px;"
      @click="showToast"
    >点我</button>

    <!-- <div>
      <gbutton :loading="loading1" @click.native="loading1 = !loading1">按钮</gbutton>
      <gbutton
        icon="home"
        iconPosition="right"
        :loading="loading2"
        @click.native="loading2 = !loading2"
      >Home</gbutton>
      <gbutton icon="user" :loading="loading3" @click.native="loading3 = !loading3">User</gbutton>
      <gicon name="download"/>
      <hr style="margin: 20px 0">
      <div>
        <buttonGroup>
          <gbutton :loading="loading1" @click.native="loading1 = !loading1">按钮</gbutton>
          <gbutton
            icon="home"
            iconPosition="right"
            :loading="loading2"
            @click.native="loading2 = !loading2"
          >Home</gbutton>
          <gbutton icon="user" :loading="loading3" @click.native="loading3 = !loading3">User</gbutton>
        </buttonGroup>
      </div>

      <div>
        <a-collapse v-model="activeKey">
          <a-collapse-panel header="This is panel header 1" name="1">
            <p>{{text}}</p>
          </a-collapse-panel>
          <a-collapse-panel header="This is panel header 2" name="2" :disabled="false">
            <p>{{text}}</p>
          </a-collapse-panel>
          <a-collapse-panel header="This is panel header 3" name="3" disabled>
            <p>{{text}}</p>
          </a-collapse-panel>
        </a-collapse>
      </div>

      <hr style="margin: 10px 0">

      <ginput value="张三"/>
    </div> -->
  </div>
</template>

<script>
import button from '@/package/button'
import buttonGroup from '@/package/button-group'
import input from '@/package/input/input'
import icon from '@/package/icon'
import ACollapse from '@/package/ACollapse'
import ACollapsePanel from '@/package/ACollapsePanel'

export default {
  components: {
    gbutton: button,
    ginput: input,
    gicon: icon,
    buttonGroup,
    ACollapse,
    ACollapsePanel
  },
  data () {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ['1']
    }
  },
  watch: {
    activeKey (key) {
      console.log(key)
    }
  },
  mounted () {},
  methods: {
    showToast () {
      this.$toast('我是toast', {
        closeButton: {
          text: '已阅',
          callback () {
            console.log('朕知道了！退下吧！')
          }
        }
      })
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 20px;
}
</style>
