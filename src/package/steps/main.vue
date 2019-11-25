<template>
  <section class="steps">
    <div v-for="(item, index) in data" :key="item.text" :class="index | clazz(current)">
      <div class="bg_bar">
        <div class="number_ball">{{ index + 1 }}</div>
      </div>
      <div class="progress_text">{{ item.text }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "",
  props: {
    current: {
      type: Number,
      default: 1,
    },
    data: {
      type: Array,
    }
  },
  data() {
    return {
    };
  },
  filters: {
    clazz (index, current) {
      console.log(current);
      if (current > index + 1) {
        return 'complete';
      }
      if (current === index + 1) {
        return 'current';
      }
      if (current < index + 1) {
        return 'wait';
      }
    }
  },
  computed: {

  },
  methods: {}
};
</script>

<style scoped lang="less">
.steps {
  display: flex;
  & > div:first-child .bg_bar {
    border-top-left-radius: 1.5px;
    border-bottom-left-radius: 1.5px;
  }
  & > div:last-child .bg_bar {
    border-top-right-radius: 1.5px;
    border-bottom-right-radius: 1.5px;
  }

  .bg_bar {
    background-color: #ffaab8;
  }
  .bg_bar {
    position: relative;
    width: 98px;
    height: 3px;
  }
  .number_ball {
    background-color: #ffaab8;
    color: #ffffff;
  }
  .number_ball {
    position: absolute;
    left: 39px;
    top: -8px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    font-size: 12px;
  }
  .progress_text {
    font-size: 12px;
    margin-top: 20px;
    color: #c8c8c8;
    text-align: center;
  }

}


.complete {
  .bg_bar {
    background-color: #9AB9FF;
  }
  .number_ball {
    background-color: #9AB9FF;
    color: #ffffff;
  }
  .progress_text {
    color: #c8c8c8;
  }
}

.current {
  .bg_bar {
    background-color:#5184F6;
  }
  .number_ball {
    background-color:#5184F6;
    color: #ffffff;
  }
  .progress_text {
    color: #666;
  }
}

.wait {
  .bg_bar {
    background-color: #C8C8C8;
  }
  .number_ball {
    color: #999;
    background-color: #dcdcdc;
  }
  .progress_text {
    color: #c8c8c8;
  }
}
</style>