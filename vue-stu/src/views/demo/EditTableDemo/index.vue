<template>
  <div class="demo-edit-table">
    <el-button @click="add">添加行</el-button>
    <EditTable :data.sync="data" ref="table">
      <edit-table-column prop="date" label="日期" width="180"> </edit-table-column>
      <edit-table-column prop="name" label="姓名" width="180"> </edit-table-column>
      <edit-table-column prop="age" label="年龄"> </edit-table-column>
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
