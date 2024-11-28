<template>
  <el-form
    ref="form"
    :model="form"
  >
    <el-table
      ref="table"
      border
      :data="data"
      :row-key="id"
    >
      <slot />
      <el-table-column
        fixed="right"
        label="操作"
        width="200"
      >
        <template slot-scope="scope">
          <template v-if="scope.row.isEdit">
            <el-button
              type="text"
              size="small"
              @click="handleSave(scope.row, scope.column, scope.$index)"
            >
              保存
            </el-button>
            <el-button
              type="text"
              size="small"
              @click="handleCancel(scope.row, scope.column, scope.$index)"
            >
              取消
            </el-button>
          </template>
          <template v-else>
            <el-button
              type="text"
              size="small"
              @click="handleEdit(scope.row, scope.column, scope.$index)"
            >
              编辑
            </el-button>
          </template>
          <el-button
            type="text"
            size="small"
            @click="handleDelete(scope.row, scope.column, scope.$index)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>
<script>
import EditTableColumn from './EditTableColumn.vue'
export default {
  name: 'EditTable',
  components: {
    EditTableColumn
  },
  props: {
    form: {
      type: Object
    },
    data: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      default: 'id'
    },
    deleteRequestApi: {
      type: Function
    },
    deleteParamFormatter: {
      type: Function
    },
    needRefreshTable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      deleteLoading: false,
      saveLoading: false
    }
  },
  computed: {
    isTableEdit() {
      return this.data.some((i) => i.isEdit)
    }
  },
  methods: {
    resetForm() {
      this.$emit('update:form', {})
    },
    refreshTableList() {
      this.resetForm()
      console.log('refreshTableList')
    },
    handleAdd() {
      if (this.isTableEdit) {
        return this.$message.error('只能同时编辑一行')
      }
      const newItem = {
        [this.id]: this._.uniqueId(this.id + '_'),
        isAdd: true,
        isEdit: true
      }
      this.handleEdit(newItem)
      this.$emit('update:data', [newItem].concat(this.data))
    },
    handleEdit(row, column, $index) {
      this.$set(row, 'isEdit', true)
      this.$emit('update:form', this._.cloneDeep(row))
    },
    handleDelete(row, column, $index) {
      if (this.deleteLoading) {
        return
      }
      this.$confirm(`是否确认删除该项？`, '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteLoading = true
        let { deleteParamFormatter } = this
        if (!deleteParamFormatter) {
          deleteParamFormatter = (rowItem) => rowItem[this.id]
        }
        const params = deleteParamFormatter(row)
        this.deleteRequestApi(params)
          .then(({ code, msg }) => {
            if (code === 200) {
              this.$message.success(msg || '操作成功')
              if (this.needRefreshTable) {
                this.refreshTableList()
              } else {
                this.$emit(
                  'update:data',
                  this.data.filter((i) => i[this.id] !== row[this.id])
                )
              }
            } else {
              this.$octo.$modal.msgError(msg || '系统错误')
            }
          })
          .finally(() => {
            this.deleteLoading = false
            this.resetForm()
          })
      })
    },
    handleCancel(row, column, $index) {
      // 如果是新增的 还没有保存到数据库中
      if (String(row[this.id]).includes(this.id + '_')) {
        this.$emit(
          'update:data',
          this.data.filter((i) => i[this.id] !== row[this.id])
        )
        return
      }
      this.$set(row, 'isEdit', false)
    },
    handleSave(row, column, $index) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.saveLoading) {
            return
          }
          Object.keys(this.form).forEach((i) => {
            row[i] = this.form[i]
          })
          this.resetForm()

          // this.saveLoading = true
          this.$set(row, 'isEdit', false)
          // 调用接口
        } else {
        }
      })
    }
  }
}
</script>
