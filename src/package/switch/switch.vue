<template>
  <div
    class="a-switch"
    :class="{'a-switch-disabled': disabled}"
    @click="switchValue"
  >
    <input
      @change="handleChange"
      ref="input"
      class="a-switch_input"
      type="checkbox"
      :true-value="activeValue"
      :false-value="inactiveValue"
    />
    <span
      ref="core"
      class="a-switch_core"
      :class="{'is-checked': checked }"
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
    activeColor: {
      type: String,
      default: "#000"
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
  },
  created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit("input", this.inactiveValue);
    }
  },
  computed: {
    checked() {
      return this.value === this.activeValue;
    }
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
    }
  },
  methods: {
    handleChange(event) {
      this.$emit(
        "input",
        !this.checked ? this.activeValue : this.inactiveValue
      );
      this.$emit(
        "change",
        !this.checked ? this.activeValue : this.inactiveValue
      );
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked;
      });
    },
    switchValue() {
      !this.disabled && this.handleChange();
    },
    setBackgroundColor() {
      let newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    }
  },
  mounted() {
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  }
};
</script>

<style lang="scss" scoped>
.a-switch {
  display: inline-flex;
  position: relative;
  cursor: pointer;
  width: 40px;
  &.a-switch-disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  .a-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .a-switch_core {
    width: 100%;
    height: 20px;
    background: #dcdfe6;
    border-radius: 10px;
    border: 1px solid #ccc;
    &.is-checked::after {
      left: 100%;
      margin-left: -18px;
    }
    &::after {
      content: "";
      display: block;
      background-color: #fff;
      width: 16px;
      height: 16px;
      position: absolute;
      transition: all 0.3s;
      top: 2px;
      left: 2px;
      border-radius: 50%;
    }
  }
}
</style>