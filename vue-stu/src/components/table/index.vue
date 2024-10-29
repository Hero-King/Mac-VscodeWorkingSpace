<template>
  <div>
    <div class="box-table">
      <el-table
        ref="tables"
        v-loading="config.loading ? config.loading : false"
        :data="config.tableData"
        stripe
        :height="config.height ? config.height : tableHeight"
        :border="config.border || true"
        :row-key="getRowKey"
        style="width: 100%"
        :default-expand-all="config.defaultExpandAll || false"
        :expand-row-keys="config.expands || []"
        :tree-props="config.treeProps || {}"
        :span-method="config.spanMethod"
        :header-cell-style="{ 'background-color': config.background || '#edf2ff', color: '#000' }"
        @selection-change="handleSelectionChange"
        :key="key"
      >
        <template v-for="item in config.tableList">
          <el-table-column
            v-if="item.type === 'slot'"
            :key="item.label"
            :prop="item.prop"
            :type="item.status"
            :width="item.width"
            :label="item.label"
            :align="item.align"
            :fixed="item.fixed"
            :show-overflow-tooltip="item.showOverflowTooltip"
            :selectable="(row) => (row.enable ? false : true)"
            :render-header="addRedStar"
          >
            <!-- <template slot-scope="{ row ,$index}"> -->
            <template slot-scope="scope">
              <slot
                :name="item.slotName"
                :data="scope.row"
                :index="scope.$index"
              />
            </template>
          </el-table-column>
          <el-table-column
            :key="item.label"
            v-else
            :prop="item.prop"
            :type="item.status"
            :width="item.width"
            :label="item.label"
            :align="item.align"
            :fixed="item.fixed"
            :show-overflow-tooltip="item.showOverflowTooltip"
            :reserve-selection="true"
            :selectable="(row) => (row.enable ? false : true)"
            :render-header="addRedStar"
          />
        </template>
        <template slot="empty">
          <el-empty />
        </template>
      </el-table>
    </div>
    <div
      v-if="config.total > 10"
      class="box-pagination"
    >
      <el-pagination
        :current-page="config.pageNo"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="config.limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="Number(config.total)"
        @size-change="sizeChange"
        @current-change="currentChange"
      />
    </div>
  </div>
</template>
<script>
/* config:{ //所有数据
    tableData:请求数据
    tableList:{
        prop: 'operation',
          label: '操作',
          align: 'center',//居中 居左居右
          width: '180px',//宽度
          fixed: 'right',//固定位置
          slotName: 'operation',//插槽名称
          type: 'slot' //对应添加插槽
          multipleSelection:[],//复选已选中的数据
          diffHeight: 130,//offsetTop
          className:'.page',//获取元素的类名与diffHeight同时使用
    }
} */
// 格创 table组件
export default {
  props: {
    config: {
      type: Object,
      default: {}
    },
    clearSelection: {
      type: Boolean,
      default: false
    },
    multipleSelection: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      con: {
        total: 400
      },
      tableHeight: null,
      expands: [],
      key: null
    }
  },
  watch: {
    // multipleSelection: {
    //   handler(val) {
    //     console.log(val, '分摊模型',暂时没有地方用)
    //     if (this.config.tableData.length > 0) {
    //       let set = new Set(val.map((i) => i.id))
    //       this.$nextTick(() => {
    //         this.config.tableData.forEach((item) => {
    //           if (set.has(item.id)) {
    //             this.$refs.tables.toggleRowSelection(item, true)
    //           } else {
    //             this.$refs.tables.toggleRowSelection(item, false)
    //           }
    //         })
    //       })
    //     }
    //   },

    //   // immediate: true,
    //   deep: true
    // },
    config: {
      handler(val) {
        // console.log(val,'config');

        this.key = null
        if (val.multipleSelection && val.multipleSelection.length > 0) {
          if (this.config.tableData.length > 0) {
            const set = new Set(val.multipleSelection.map((i) => i.id))
            this.$nextTick(() => {
              this.config.tableData.forEach((item) => {
                if (set.has(item.id)) {
                  this.$refs.tables.toggleRowSelection(item, true)
                } else {
                  this.$refs.tables.toggleRowSelection(item, false)
                }
              })
            })
          }
          // val.multipleSelection.forEach((row) => {
          //   this.$refs.tables.toggleRowSelection(row)
          // })
        }
        if (val.diffHeight) {
          this.getTableMaxHeight()
        }
        if (val.scrollTop) {
          this.key = Math.random()
        }
        this.$nextTick(() => {
          this.$refs.tables.doLayout() // 对表格重新布局
        })
      },

      // immediate: true,
      deep: true
    },
    clearSelection: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.tables.clearSelection()
          })
        }
      },

      immediate: true,
      deep: true
    }
  },
  mounted() {
    window.onresize = () => {
      // 用于使表格高度自适应的方法
      this.getTableMaxHeight() // 获取容器当前高度，重设表格的最大高度
    }
  },
  methods: {
    addRedStar(h, { column }) {
      if (this.config.isNeedStar && this.config.isNeedStar.indexOf(column.label) != -1) {
        return [h('span', { style: 'color: red' }, '*'), h('span', ' ' + column.label)]
      } else {
        return [h('span', ' ' + column.label)]
      }
    },
    // clearSelectionOption(){
    //   this.$refs.tables.clearSelection();
    // },
    getTableMaxHeight() {
      this.$nextTick(() => {
        if (this.config.className) {
          const box = document.querySelector(this.config.className).attributes
          const box_clientHeight = box[0].ownerElement.clientHeight
          console.log(box)
          this.tableHeight = box_clientHeight - this.config.diffHeight
          console.log(this.tableHeight)
        }
      })
    },
    // 有头部选择框的change事件
    handleSelectionChange(val) {
      this.$emit('handleSelection', val)
    },
    // 分页数量
    sizeChange(val) {
      this.$emit('sizeChange', val)
    },
    // 分页页数
    currentChange(val) {
      this.$refs.tables.bodyWrapper.scrollTop = 0
      this.$emit('currentChange', val)
    },
    // 默认选择 退后优化一下
    selectEnable(row) {
      // 复选框可选情况
      if (row.enable == '1') {
        return true
      } else {
        return false
      }
    },
    getRowKey(row) {
      return row.id
    },
    defaultSelect(row) {
      return
    }
  }
}
</script>
<style scoped lang="less">
.box-table {
  margin-top: 20px;
  background-color: #fff;
  /deep/.poros-empty-image {
    height: 62px;
  }
}

.box-pagination {
  padding-top: 15px;
  display: flex;
  justify-content: center;
  background-color: #fff;
}
</style>
