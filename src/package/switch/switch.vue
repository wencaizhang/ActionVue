<template>
  <div class="a-switch" :class="switchClazz" @click="switchValue">
    <span v-if="!inner" class="a-switch__label a-switch__label-left">{{ activeText }}</span>
    <span ref="core" class="a-switch_core" :class="coreClazz" :style="styles">
      <span class="a-switch-loading-icon">
        <a-icon v-if="loading" type="loading"></a-icon>
      </span>
      <span v-if="inner"
        class="a-switch-inner"
      >
        <span v-show="checked">
          <a-icon v-show="activeIcon" :type="activeIcon"></a-icon>
          <template v-show="!activeIcon">{{ activeText }}</template>
        </span>
        <span v-show="!checked">
          <a-icon v-show="inactiveIcon" :type="inactiveIcon"></a-icon>
          <template v-show="!inactiveIcon">{{ inactiveText }}</template>
        </span>
      </span>
    </span>
    <span v-if="!inner" class="a-switch__label a-switch__label-right">{{ inactiveText }}</span>
    <input
      ref="checkbox"
      class="a-switch_input"
      type="checkbox"
      :true-value="activeValue"
      :false-value="inactiveValue"
    />
  </div>
</template>

<script>
export default {
  name: "a-switch",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: "#1890ff"
    },
    inactiveColor: {
      type: String,
      default: "#ddd"
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeText: {
      type: String
    },
    inactiveText: {
      type: String
    },
    textInline: {
      type: Boolean,
      default: true
    },
    activeIcon: {
      type: String
    },
    inactiveIcon: {
      type: String
    },
  },
  created() {
    if (![this.activeValue, this.inactiveValue].includes(this.value)) {
      this.$emit("input", this.inactiveValue);
    }
  },
  mounted() {
    this.updateCheckbox();
  },
  computed: {
    checked() {
      return this.value === this.activeValue;
    },
    styles() {
      let newColor = this.checked ? this.activeColor : this.inactiveColor;
      return {
        borderColor: newColor,
        backgroundColor: newColor
      };
    },
    coreClazz () {
      return { 'is-checked': this.checked }
    },
    switchClazz() {
      let { disabled, loading } = this;
      return {
        "a-switch-disabled": disabled,
        "a-switch-loading": loading
      };
    },
    inner () {
      return this.textInline || this.activeIcon || this.inactiveIcon
    }
  },
  watch: {
    checked() {
      this.updateCheckbox();
    }
  },
  methods: {
    updateCheckbox() {
      this.$refs.checkbox.checked = this.checked;
    },
    getValue() {
      return !this.checked ? this.activeValue : this.inactiveValue;
    },
    switchValue() {
      if (this.disabled || this.loading) { return; }
      this.$emit("input", this.getValue());
      this.$emit("change", this.getValue());
    }
  }
};
</script>

<style lang="scss" scoped>
.a-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  &.a-switch-loading,
  &.a-switch-disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  .a-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .a-switch_core {
    position: relative;
    overflow: hidden;
    min-width: 40px;
    height: 20px;
    background: #ddd;
    border-radius: 10px;
    border: 1px solid #ddd;
    .a-switch-inner {
      text-align: right;
      color: #fff;
      font-size: 12px;
      margin-left: 24px;
      margin-right: 6px;
      display: block;
      user-select: none;
    }
    &.is-checked .a-switch-inner {
      text-align: left;
      margin-left: 6px;
      margin-right: 24px;
    }
    &.is-checked .a-switch-loading-icon,
    &.is-checked::after {
      left: 100%;
      transform: translateX(-100%);
      margin-left: -1px;
    }
    & .a-switch-loading-icon,
    &::after {
      position: absolute;
      right: auto;
      left: 2px;
      top: 50%;
      margin-top: -8px;
      content: "";
      display: block;
      background-color: #fff;
      width: 16px;
      height: 16px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-radius: 50%;
    }
    & .a-switch-loading-icon {
      z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
      .a-icon {
        animation: spin 1s infinite linear;
      }
    }
  }
}

.a-switch__label-left {
  margin-right: 10px;
}
.a-switch__label-right {
  margin-left: 10px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>