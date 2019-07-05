<template>
  <div class="pay-tool">
    <div class="header">
      <span class="icon icon-back" @click="backHandle"></span>
      <strong>请输入交易密码</strong>
    </div>
    <div class="input">
      <div class="pay-tool-inputs">
        <div class="item" v-for="i in items" :key="i">
          <span class="icon_dot" v-if="values[i]">
            <template v-if="type === 'input'">
              {{ values[i] }}
            </template>
            <template v-else>
              *
            </template>
          </span>
        </div>
      </div>
    </div>
    <div class="keyboard">
      <ul>
        <li
          @click="onKeyClick(key)"
          v-for="key in keys"
          :key="key"
        >
          {{ key }}
        </li>
        <li class="del" @click="onDelClick">
          <span class="icon-del">删除</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [0, 1, 2, 3, 4, 5],
      values: []
    };
  },
  props: {
    random: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'password',
      validator (str) {
        return ['input', 'password'].includes(str);
      }
    }
  },
  computed: {
    keys () {
      var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      this.random && nums.sort(() => Math.random > 0.5);
      nums.splice(-1, 0, '');
      console.log(nums);
      return nums;
    }
  },
  methods: {
    backHandle() {
      this.clearPasswordHandle(); // 返回时清除password
      this.$emit("backFnc"); // 返回上级
    },
    clearValues () {
      this.values = [];
    },
    getValues () {
      return parseInt(this.values.join(""))
    },
    onKeyClick(key) {
      let len = this.values.length;
      if (!key || len >= 6) return;
      this.values.push(key);
      this.values.length >= 6 && this.$emit('onCompleted', this.getValues());
    },
    onDelClick() {
      this.values.length && this.values.pop();
    },
  }
};
</script>

<style lang="less" scoped>

.pay-tool {
  position: relative;
  height: 120vw;
  width: 100vw;

  background-color: #fff;
  overflow: hidden;

  .header {
    width: 100%;
    height: 2.08888888rem;
    padding: 0 0.8rem;
    line-height: 2.08888888rem;
    text-align: center;
    overflow: hidden;
    .icon {
      float: left;
      margin-top: 0.72222222rem;
    }
    strong {
      font-size: 0.8rem;
    }
  }

  .input {
    .pay-tool-inputs {
      width: 14.46666666rem;
      height: 2.31111111rem;
      margin: 1.28888888rem auto 0;
      border: 1px solid #b9b9b9;
      border-radius: 0.26666666rem;
      box-shadow: 0 0 1px #e6e6e6;
      display: flex;
      .item {
        width: 16.66666666%;
        height: 2.31111111rem;
        border-right: 1px solid #b9b9b9;
        line-height: 2.31111111rem;
        text-align: center;
        &:last-child {
          border-right: none;
        }
        .icon_dot {
          display: inline-block;
          width: 0.51111111rem;
          height: 0.51111111rem;
          // background: url("../../assets/images/icon_dot.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .pay-tool-link {
      padding: 0.53333333rem 0.8rem 0;
      text-align: right;
      .link {
        font-size: 0.66666666rem;
        color: #3c8cfb;
      }
    }
  }
  .keyboard {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        list-style-type: none;
        width: 33.3333%;
        height: 2.25442834rem;
        line-height: 2.25442834rem;
        text-align: center;
        border-right: 1px solid #aeaeae;
        border-bottom: 1px solid #aeaeae;
        font-size: 0.8rem;
        font-weight: bold;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          border-top: 1px solid #eee;
        }
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(9),
        &:nth-child(12) {
          border-right: none;
        }
        &:nth-child(10),
        &:nth-child(11),
        &:nth-child(12) {
          border-bottom: none;
        }
        &:nth-child(10),
        &:nth-child(12),
        &:active {
          background-color: #d1d4dd;
        }
        &:nth-child(12):active {
          background-color: #fff;
        }
      }
    }
  }
}
</style>