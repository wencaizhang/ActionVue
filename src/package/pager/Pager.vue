<template>
  <div class="a-pager-wraper" v-if="!hideIfOnePage || totalPage > 1">
    <span
      class="a-pager a-prev-page"
      :class="{ disabled: currPage === 1 }"
      @click="onClick(currPage - 1)"
    >上一页</span>
    <template v-if="mode === 'normal'">
      <span
        class="a-pager"
        :class="{ 'a-curr-page': item == currPage, 'a-separator': item === '...'}"
        v-for="(item, index) in pages"
        :key="item + index"
        @click="onClick(item)"
      >
        {{ item }}
      </span>
    </template>
    <span v-else>
      {{ currPage }} / {{ totalPage }}
    </span>
    <span 
      class="a-pager a-next-page"
      :class="{ disabled: currPage === totalPage }"
      @click="onClick(currPage + 1)"
    >下一页</span>
  </div>
</template>

<script>
export default {
  name: 'pager',
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currPage: {
      type: Number,
      default: 1
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'normal',
      validator (v) {
        if (['normal', 'simple'].includes(v)) {
          return v
        }
        return 'normal'
      }
    }
  },
  filters: {
    currPage (v) {

    }
  },
  computed: {
    pages () {
      const { currPage, totalPage } = this
      const pages = [1, currPage - 2, currPage - 1, currPage, currPage + 1, currPage + 2, totalPage]
      return this.uniq(pages.filter(item => item <= totalPage && item > 0))
        .sort((a, b) => a - b)
        .reduce((prev, curr, index, array) => {
          prev.push(curr)
          array[index + 1] && array[index + 1] - curr > 1 && prev.push('...')
          return prev
        }, [])
    }
  },
  methods: {
    uniq (arr) {
      const ret = []
      arr.forEach(item => !ret.includes(item) && ret.push(item))
      return ret
    },
    onClick (item) {
      if (this.pages.includes(item)) {
        this.$emit('onChange', item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #1890ff;                         // 全局主色
.a-pager-wraper {
  display: flex;
  user-select: none;
  font-size: 12px;
  line-height: 30px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.a-pager {
  display: inline-flex;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 4px;
  margin: 0 4px;
  min-width: 20px;
  height: 20px;
  line-height: 18px;
  min-width: 32px;
  height: 32px;
  line-height: 30px;
  cursor: pointer;

  &.a-separator {
    border: none;
    cursor: default;
  }
  &.a-curr-page {
    color: $primary-color;
    border-color: $primary-color;
    pointer-events: none;
  }
  &:hover {
    border-color: $primary-color;
  }
  &.disabled {
    cursor: not-allowed;
    pointer-events: none;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.25);
  }
  &.a-prev-page {
    margin-left: 0;
  }
  &.a-next-page {
    margin-right: 0;
  }
}

</style>
