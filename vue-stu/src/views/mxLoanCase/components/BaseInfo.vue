<template>
  <div>
    <el-collapse-item name="baseInfo">
      <template slot="title"> 基本信息 <i class="header-icon el-icon-info"></i> </template>
      <el-descriptions size="small" v-loading="loading">
        <el-descriptions-item label="用户名">{{ caseDetail.name }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ caseDetail.phone }}</el-descriptions-item>
        <el-descriptions-item label="居住地">{{ caseDetail.address }}</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" :span="1">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </el-descriptions>
    </el-collapse-item>

    <el-collapse-item name="extendInfo">
      <template slot="title">
        <div style="width: 100px">展期信息</div>
        <el-button size="mini">申请展期</el-button>
      </template>
      <mini-table :columns="extendInfoColumns" :requestParams="extendInfoParams" :loading="loading" style="width: 100%"> </mini-table>
    </el-collapse-item>
    <el-collapse-item name="callRecordInfo">
      <template slot="title">
        <div style="width: 100px">催收记录</div>
      </template>
      <mini-table :columns="callRecordInfoColumns" :requestParams="callRecordInfoParams" :loading="loading" style="width: 100%"> </mini-table>
    </el-collapse-item>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import MiniTable from './mini-table.vue'
export default {
  name: 'BaseInfo',
  components: { MiniTable },
  props: {
    isActive: Boolean
  },
  inject: ['globalComParent'],

  data() {
    this.extendInfoColumns = [
      {
        label: '姓名',
        prop: 'name'
      },
      {
        label: '年龄',
        prop: 'age'
      },
      {
        label: '性别',
        prop: 'sex'
      }
    ]
    this.callRecordInfoColumns = this.extendInfoColumns

    return {
      extendInfoParams: null,
      callRecordInfoParams: null
    }
  },
  computed: {
    // 获取 caseDetail 模块的状态
    ...mapState('caseDetail', ['loading', 'caseDetail'])
  },
  created() {
    this.globalComParent.$on('refresh:callRecordInfo', this.refreshCallRecordInfoParams)
    this.globalComParent.$on('refresh:extendInfo', this.refreshExtendInfoParams)
  },
  beforeDestroy() {
    this.globalComParent.$off('refresh:callRecordInfo', this.refreshCallRecordInfoParams)
    this.globalComParent.$off('refresh:extendInfo', this.refreshExtendInfoParams)
  },
  methods: {
    refreshExtendInfoParams() {
      if (!this.isActive) {
        return
      }
      this.refreshExtendInfoParams && (this.refreshExtendInfoParams = { ...this.refreshExtendInfoParams })
    },
    refreshCallRecordInfoParams() {
      if (!this.isActive) {
        return
      }
      this.callRecordInfoParams && (this.callRecordInfoParams = { ...this.callRecordInfoParams })
    },
    getData() {
      if (!this.isActive) {
        return
      }
      this.extendInfoParams = {
        id: this.caseDetail.id,
        name: this.caseDetail.name
      }
      this.callRecordInfoParams = {
        id: this.caseDetail.id,
        name: this.caseDetail.name
      }
    }
  },
  watch: {
    caseDetail: {
      handler: 'getData'
    },
    isActive: {
      handler: 'getData'
    }
  }
}
</script>
<style lang=""></style>
