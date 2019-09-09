<template>
  <div>
    <a-button v-on:click="shuffle">Shuffle</a-button>
    <a-button v-on:click="add">Add</a-button>
    <a-button v-on:click="remove">Remove</a-button>
    <transition-group name="a-flip-list" tag="p">
      <span v-for="item in items" v-bind:key="item" class="a-flip-list-item">{{ item }}</span>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function() {
      this.items.sort(() => Math.random() - 0.5)
    }
  }
};
</script>
<style>
.a-flip-list-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
</style>