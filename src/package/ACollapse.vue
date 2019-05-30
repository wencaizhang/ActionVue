<template>
  <section>
    <slot />
    {{ value }}
  </section>
</template>

<script>
export default {
  name: 'a-collapse',
  props: {
    value: {
      type: Array,
      default () {

      }
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
