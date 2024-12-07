<template>
  <div>
    <el-collapse-item name="derateInfo">
      <template slot="title"> 平台减免信息 </template>
      <mini-table :columns="deratePcColumns" :requestParams="deratePcInfoParams" :loading="loading || $attrs.loading" style="width: 100%"> </mini-table>
    </el-collapse-item>

    <el-collapse-item name="appDerateInfo">
      <template slot="title"> APP减免信息 </template>
      <mini-table :columns="derateAppColumns" :requestParams="derateAppInfoParams" :loading="loading || $attrs.loading" style="width: 100%"> </mini-table>
    </el-collapse-item>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import MiniTable from './mini-table.vue'
export default {
  name: 'DerateInfo',
  components: { MiniTable },
  props: {
    isActive: Boolean
  },
  inject: ['globalComParent'],
  data() {
    this.deratePcColumns = [
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
    this.derateAppColumns = this.deratePcColumns
    return {
      deratePcInfoParams: null,
      derateAppInfoParams: null
    }
  },
  created() {
    //  订阅事件
  },
  computed: {
    // 获取 caseDetail 模块的状态
    ...mapState('caseDetail', ['loading', 'caseDetail'])
  },
  methods: {
    getData() {
      if (!this.isActive) {
        return
      }
      this.deratePcInfoParams = {
        id: this.caseDetail.id,
        name: this.caseDetail.name
      }
      this.derateAppInfoParams = {
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
