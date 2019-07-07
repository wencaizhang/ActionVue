<template>
  <button
    class="dt-button"
    @click="handleClick"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      size ? 'dt-button--' + size : '',
      type ? 'dt-button--' + type : '',
      {
        'is-disabled': disabled,
        'is-round': round,
        'is-plain': plain
      }
    ]">
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'DtButton',

  props: {
    size: String,
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    round: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  },
  mounted () {
    this.$emit('click', event)
  }
}
</script>