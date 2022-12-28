<template>
  <el-table border ref="table" :data="tableData" :row-key="id">
    <slot></slot>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <template v-if="scope.row.isEdit">
          <el-button type="text" size="small" @click="handleSave(scope.row, scope.column, scope.$index)">保存</el-button>
          <el-button type="text" size="small" @click="handleCancel(scope.row, scope.column, scope.$index)">取消</el-button>
        </template>
        <template v-else>
          <el-button type="text" size="small" @click="handleEdit(scope.row, scope.column, scope.$index)">编辑</el-button>
        </template>
        <el-button type="text" size="small" @click="handleDelete(scope.row, scope.column, scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import EditTableColumn from './EditTableColumn.vue'
export default {
  name: 'EditTable',
  components: {
    EditTableColumn
  },
  data() {
    return {
      editRows: {}
    }
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      default: 'id'
    }
  },
  computed: {
    tableData() {
      return this.data.filter((i) => {
        return !i.isDeleted
      })
    }
  },
  methods: {
    handleAdd() {
      const newItem = {
        [this.id]: this._.uniqueId(this.id + '_'),
        isAdd: true,
        isEdit: true
      }
      this.$emit('update:data', this.data.concat(newItem))
    },
    handleEdit(row, column, $index) {
      this.$set(row, 'isEdit', true)
      this.$set(this.editRows, row[this.id], this._.cloneDeep(row))
    },
    handleDelete(row, column, $index) {
      this.$set(row, 'isDeleted', true)
      this.$emit(
        'update:data',
        this.data.filter((i) => i[this.id] !== row[this.id])
      )
      //   确认删除弹框
      // TODO 调用删除接口
    },
    handleCancel(row, column, $index) {
      Object.keys(row).forEach((key) => {
        row[key] = this.editRows[row[this.id]][key]
      })
      this.$set(row, 'isEdit', false)
    },
    handleSave(row, column, $index) {
      this.$set(row, 'isEdit', false)
    }
  }
}
</script>
