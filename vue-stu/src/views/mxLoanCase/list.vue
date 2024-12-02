<template>
  <el-table :data="list" height="100%" border>
    <el-table-column label="id" prop="id"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button type="text" size="mini" @click="handleDetail(scope.$index, scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'MxLoanCaseList',
  data() {
    return {
      list: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `测试${i + 1}`
      }))
    }
  },
  methods: {
    handleDetail(index, row) {
      this.$router.push(`/mxLoanCase/detail/${row.id}`)
    }
  }
}
</script>
<style lang=""></style>
