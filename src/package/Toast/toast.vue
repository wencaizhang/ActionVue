<template>
  <section class="toast">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: '',
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

<style scoped >
  /* $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75); */

  .toast {
    font-size:14px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    position: fixed;
    left: 50%;
    top: 15px;
    transform: translate(-50%);
    line-height: 1.8;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-radius: 4px;
  }
</style>
