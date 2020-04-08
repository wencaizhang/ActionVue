<template>
  <section class="a-notification" ref="notification">
    <transition-group name="a-slide-left">
      <div
        class="a-notification-item"
        v-for="item in notices"
        :key="item.id"
        @click="item.onClick()"
      >
        <a class="a-notification-close" @click.stop="remove(item.id)">
          <a-icon type="close-circle" />
        </a>
        <div class="a-notification-title">{{ item.title }}</div>
        <div class="a-notification-message">{{ item.message }}</div>
      </div>
    </transition-group>
  </section>
</template>

<script>
let seed = 0;
function getUid() {
  return seed++;
}
export default {
  name: "a-notification",
  data() {
    return {
      notices: [],
      duration: 3,
    };
  },
  methods: {
    add(options) {
      let id = getUid();
      let _notice = Object.assign({ id, duration: this.duration }, options);
      this.notices.push(_notice);
      this.setTimer(_notice);

      // let { top, height } = this.$refs.notification.getBoundingClientRect();
    },
    remove(id) {
      let index = this.notices.findIndex(item => item.id === id);
      if (index >= 0 ) {
        let onClose = this.notices[index]['onClose']
        this.notices.splice(index, 1);
        onClose && onClose();
      }
    },
    setTimer(_notice) {
      let duration = _notice.duration;
      // duration 为 0 ，禁止自动关闭
      if (duration === 0) { return }
      setTimeout(() => {
        this.remove(_notice.id);
      }, duration * 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.a-notification {
  position: fixed;
  top: 10px;
  right: 0;
  z-index: 100;

  overflow: hidden;

  &-item {
    position: relative;
    background-color: #ccc;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 12px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid #ebeef5;
    background-color: #fff;
    margin-bottom: 10px;
    margin-right: 16px;
    width: 330px;

    &:last-child {
      margin-bottom: 0;
    }

    .a-notification-title {
      padding: 0;
      margin: 0;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 8px;
      line-height: 24px;
      display: inline-block;
      padding-right: 24px;
      font-weight: bold;

      margin-left: 13px;
    }
    .a-notification-message {
      color: #606266;
      margin-left: 13px;
    }

    .a-notification-close {
      position: absolute;
      top: 18px;
      right: 15px;
      cursor: pointer;
      color: #909399;
      font-size: 16px;

      &:hover {
        color: rgba(0, 0, 0, 0.67);
      }
    }

  }
}

.left {
  left: 16px;
}
.right {
  right: 16px;
}

.a-slide-left-enter-active,
.a-slide-left-leave-active {
  transition: all .3s ease-out;
}
.a-slide-left-enter {
  transform: translateX(100%);
}
.a-slide-left-leave-to {
  opacity: 0;
}

</style>
