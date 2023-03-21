<template lang="">
  <el-form :model="form" :size="size">
    <el-descriptions class="margin-top" contentClassName="stu-descripts" title="带边框列表" :column="3" :size="size" :border="border">
      <template slot="extra">
        <el-button type="primary">操作</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        kooriookami
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        18100000000
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        苏州市
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          备注
        </template>
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        <el-form-item>
          <el-input v-model="form.address" />
        </el-form-item>
      </el-descriptions-item>
    </el-descriptions>
  </el-form>
</template>
<script>
export default {
  name: 'ElDescripts',
  data() {
    return {
      size: 'small',
      border: true,
      form: {
        address: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.el-descriptions {
  .el-form-item {
    margin-bottom: 0;
  }
}
</style>
