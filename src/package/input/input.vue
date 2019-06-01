<template>
  <div class="wraper">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" />
  </div>
</template>

<script>
export default {
  name: 'ginput',
  props: {
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    value: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
