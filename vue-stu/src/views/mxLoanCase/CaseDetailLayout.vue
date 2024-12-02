<template>
  <div class="details-layout">
    <div class="left">
      <el-table
        v-loading="loading"
        ref="table"
        :data="list"
        height="100%"
        stripe
        border
        @row-click="handleRowClick"
        highlight-current-row
        :row-style="{ cursor: 'pointer' }"
      >
        <el-table-column label="姓名" prop="name" show-overflow-tooltip align="center"></el-table-column>
      </el-table>
    </div>
    <!-- 加载详情数据时页面loading -->
    <div class="right" v-loading="$store.state.caseDetail.loading" element-loading-background="rgba(255, 255, 255, 0.5)">
      <router-view />
      <!-- 渲染子路由内容 -->
    </div>
  </div>
</template>

<script>
import { isElementVisibleInContainer } from '@/utils/utils'
export default {
  name: 'CaseDetailLayout',
  data() {
    return {
      list: [],
      loading: true
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  created() {
    this.loading = true
    // 模拟数据
    setTimeout(async () => {
      this.list = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `测试${i + 1}`
      }))
      this.loading = false
      await this.$nextTick()
      this.highlightCurrentRow()
      this.$store.dispatch('caseDetail/getDetail', this.id)
    }, 500)
  },
  methods: {
    handleRowClick(row) {
      if (this.id !== String(row.id)) {
        // 跳转到对应的详情页
        this.$router.push(`${row.id}`)
      }
    },
    highlightCurrentRow() {
      const curRow = this.list.find((i) => this.id === String(i.id))
      if (curRow) {
        this.$refs.table.setCurrentRow(curRow)
        this.$nextTick(this.currentRowScrollIntoView)
      }
    },
    currentRowScrollIntoView() {
      const dom = this.$el.querySelector('.el-table__row.current-row')
      if (!dom) {
        return
      }
      // 两种方式判断元素是否在视口
      if (Math.random() > 0.5) {
        if (isElementVisibleInContainer(dom, this.$refs.table.$refs.bodyWrapper, true)) {
          return
        }
        dom.scrollIntoView({
          scrollBehavior: 'smooth',
          block: 'center'
        })
      } else {
        this.observer.observe(dom)
      }
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.scrollIntoView({
              scrollBehavior: 'smooth',
              block: 'center'
            })
          }
          this.observer.unobserve(entry.target)
        })
      },
      {
        root: this.$refs.table.$refs.bodyWrapper,
        threshold: 1 // 当元素有 10% 可见时触发回调
      }
    )
  },
  watch: {
    id(val) {
      this.highlightCurrentRow()
      this.$store.dispatch('caseDetail/getDetail', val)
    }
  },
  beforeDestroy() {
    this.observer.disconnect()
  }
}
</script>

<style lang="scss" scoped>
.details-layout {
  display: flex;
  height: 100%;
}
.left {
  width: 250px;
  border-right: 1px solid #ddd;
}
.right {
  flex: 1;
  margin-left: 20px;
  ::v-deep > .el-loading-mask {
    > .el-loading-spinner {
      display: none;
    }
  }
  ::v-deep .el-collapse {
    .el-collapse-item {
      &:last-child {
        margin-bottom: 0;
      }
      + .el-collapse-item {
        margin-top: 10px;
      }
    }
    .el-collapse-item__header {
      // border-bottom: none;
      height: 32px;
      line-height: 1;
      background: #ebeaea;
      padding-left: 10px;
    }
    .el-collapse-item__content {
      padding-bottom: 0px;
      border-left: 1px solid #ebeef5;
      border-right: 1px solid #ebeef5;
      padding: 8px;
    }
  }
}
</style>
