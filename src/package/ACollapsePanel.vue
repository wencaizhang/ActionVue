<template>
  <section>
    <h3>{{ name }}{{ header }}</h3>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'a-collapse-panel',
  props: {
    header: {
      type: String
    },
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  components: {

  },
  computed: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>
