<template>
  <div class="wraper">
    <span class="a-input-affix-wrapper" v-if="$slots.prefix || $slots.suffix">
      <span v-if="$slots.prefix" class="a-input-prefix">
        <slot name="prefix"></slot>
      </span>
      <input
        class="a-input"
        ref="input"
        :type="type"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
      <span v-if="$slots.suffix" class="a-input-suffix">
        <slot name="suffix" />
      </span>
    </span>

    <template v-else>
      <input
        class="a-input"
        ref="input"
        :type="type"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: "ginput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  },
};
</script>

<style lang="less" scoped>
.a-input {
  padding: 4px 11px;
  outline: none;
  border: 1px solid #d9d9d9;
  display: inline-block;
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    border-color: #1890ff; 
  }
  &:focus {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }

  &:not(:first-child) {
    padding-left: 30px;
  }
}

.a-input-affix-wrapper {
  position: relative;

  .a-input-prefix {
    left: 12px;
  }
  .a-input-suffix {
    right: 12px;
  }
  .a-input-prefix,
  .a-input-suffix {
    position: absolute;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);
    line-height: 0;
    color: rgba(0, 0, 0, 0.65);
  }
}

</style>

