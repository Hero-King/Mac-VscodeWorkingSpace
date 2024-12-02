<template>
  <div>
    <div>
      <el-button size="mini" type="primary" @click="$router.push('9')">Call </el-button>
      <el-button size="mini" type="primary" @click="$router.push('9')">Call Conclusion</el-button>
      <el-button size="mini" type="primary" @click="$router.push('9')">Apply Derate</el-button>
    </div>
    <el-collapse style="border: none" v-model="collapseList">
      <el-tabs v-model="tabName" style="margin-top: 10px">
        <el-tab-pane label="基本信息" :name="TabName.Base">
          <BaseInfo :isActive="tabName === TabName.Base"></BaseInfo>
        </el-tab-pane>
        <el-tab-pane label="减免信息" :name="TabName.DerateInfo">
          <DerateInfo :isActive="tabName === TabName.DerateInfo"></DerateInfo>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-collapse>
  </div>
</template>

<script>
import BaseInfo from './components/BaseInfo.vue'
import DerateInfo from './components/DerateInfo.vue'
export default {
  props: {
    id: String
  },
  components: { BaseInfo, DerateInfo },
  data() {
    this.TabName = {
      Base: 'Base',
      DerateInfo: 'DerateInfo'
    }
    return {
      tabName: this.TabName.Base,
      collapseList: ['baseInfo', 'extendInfo']
    }
  },
  methods: {}
}
</script>
