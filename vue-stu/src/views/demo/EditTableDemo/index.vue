<template>
  <div class="demo-edit-table">
    <el-button @click="add">添加行</el-button>
    <EditTable :data.sync="data" ref="table" :deleteRequestApi="deleteRequestApi">
      <edit-table-column
        prop="date"
        label="日期"
        width="180"
        fieldType="ElDatePicker"
        :formItemConfig="{ rules: [{ required: true, message: '请选择日期' }] }"
        value-format="yyyy-MM-dd"
        clearable
        type="date"
        placeholder="选择日期"
      >
      </edit-table-column>
      <edit-table-column prop="name" label="姓名" width="180" :formItemConfig="{ rules: [{ required: true, message: '请输入姓名' }] }"> </edit-table-column>
      <edit-table-column prop="age" label="年龄" disabled> </edit-table-column>
    </EditTable>
  </div>
</template>
<script>
import EditTable from '@/components/EditTable'
import EditTableColumn from '@/components/EditTable/EditTableColumn'
export default {
  name: 'EditTableDemo',
  components: {
    EditTable,
    EditTableColumn
  },
  data() {
    return {
      data: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    deleteRequestApi(id) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res({ code: 200 })
        }, 2000)
      })
    },
    getData() {
      this.$http
        .get('getTableData')
        .then((result) => {
          this.data = result.data
        })
        .catch((err) => {})
    },
    add() {
      this.$refs.table.handleAdd()
    }
  }
}
</script>
<style lang=""></style>
