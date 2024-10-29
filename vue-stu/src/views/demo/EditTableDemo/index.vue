<template>
  <div class="demo-edit-table">
    <el-button @click="add">添加行</el-button>
    <EditTable
      ref="table"
      :data.sync="data"
      :form.sync="form"
      :delete-request-api="deleteRequestApi"
    >
      <edit-table-column
        v-model="form.date"
        prop="date"
        label="日期"
        width="180"
        field-type="ElDatePicker"
        :form-item-config="{ rules: [{ required: true, message: '请选择日期' }] }"
        value-format="yyyy-MM-dd"
        clearable
        type="date"
        placeholder="选择日期"
      />
      <edit-table-column
        v-model="form.name"
        prop="name"
        label="姓名"
        width="180"
        :form-item-config="{ rules: [{ required: true, message: '请输入姓名' }] }"
      />
      <edit-table-column
        v-model="form.age"
        prop="age"
        label="年龄"
        disabled
      />
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
      data: [],
      form: {}
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
