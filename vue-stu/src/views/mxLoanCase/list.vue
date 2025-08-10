<template>
  <el-table :data="list" height="100%" border>
    <el-table-column label="id" prop="id"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="用户类型" prop="userType"></el-table-column>
    <el-table-column label="线索状态" prop="caseStatus"></el-table-column>
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
    this.caseStatusEnum = {
      0: '系统催收中', // 线索进入催收系统默认状态
      1: '分配给催收公司未分配给员工', // 分配给各个公司
      2: '委外员工催收中', // 分配给公司下属员工
      3: '已停催',
      4: '已关闭'
    }
    return {
      list: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `测试${i + 1}`,
        userType: i % 2 === 0 ? '老用户' : '新用户',
        caseStatus: this.caseStatusEnum[i % 5]
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
