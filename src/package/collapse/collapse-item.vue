<template>
  <section class="a-collapse-item" :class="active ? 'a-collapse-item-active' : ''">
    <div class="a-collapse-header" @click="onClick">
      <a-icon type="right" class="a-collapse-arrow" /> {{ header }}
    </div>
    <div v-if="active" class="a-collapse-content">
      <slot />
    </div>
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
      active: false,
    }
  },
  methods: {
    onClick () {
      this.active = !this.active;
    }
  }
}
</script>

<style lang="scss" scope>
.a-collapse-item {
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-radius: 4px;
  }
  &.a-collapse-item-active {
    .a-collapse-arrow {
      transform: rotate(90deg);
    }
  }
  .a-collapse-arrow {
    transition: all .1s ease-in-out;
  }
  .a-collapse-header {
    padding: 12px;
    cursor: pointer;
    background-color: #f2f2f2;
  }
  .a-collapse-content {
    border-top: 1px solid #ccc;
    padding: 12px;
  }
}

</style>