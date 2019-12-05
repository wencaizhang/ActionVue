<template>
  <section class="a-collapse">
    <slot />
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
.a-collapse {
  border: 1px solid #ccc;
  border-bottom: 0;
  border-radius: 4px;
}
</style>
