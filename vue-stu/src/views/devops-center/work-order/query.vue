<template lang="">
  <div class="workorder-manage page">
    <div v-show="!detailVisible && !applyVisible">
      <el-tabs v-model="activeName" @tab-click="change">
        <el-tab-pane lazy label="工单查询" name="WorkOrderQuery">
          <WorkOrderQuery ref="WorkOrderQuery" @rowClick="rowClick" />
        </el-tab-pane>
        <el-tab-pane lazy label="工作量查询" name="WorkLoadQuery"
          ><WorkLoadQuery ref="WorkLoadQuery"></WorkLoadQuery>
        </el-tab-pane>
        <el-tab-pane lazy label="我的工单" name="MyWorkOrder"
          ><MyWorkOrder
            ref="MyWorkOrder"
            @rowClick="rowClick"
            :typeDialogVisible.sync="typeDialogVisible"
            @reloadTableData="change"
          >
          </MyWorkOrder>
        </el-tab-pane>
      </el-tabs>
    </div>
    <WorkOrderDetail
      :isEdit="isEdit"
      :visible.sync="detailVisible"
      v-if="detailVisible"
      :rowData="rowData"
      @reloadTableData="change"
    />
    <WorkOrderApply
      :isEdit="isEdit"
      :visible.sync="applyVisible"
      v-if="applyVisible"
      :rowData="rowData"
      :initData="initData"
      @reloadTableData="change"
    />
    <ApplyDialog
      :visible.sync="typeDialogVisible"
      @selected="tagSelected"
      @changeWorkPlanType="changeWorkPlanType"
    />
  </div>
</template>
<script>
import WorkOrderQuery from './components/WorkOrderQuery.vue'
import WorkLoadQuery from './components/WorkLoadQuery.vue'
import MyWorkOrder from './components/MyWorkOrder.vue'
import WorkOrderDetail from './components/WorkOrderDetail.vue'
import ApplyDialog from './components/ApplyDialog.vue'
import WorkOrderApply from './components/WorkOrderApply.vue'

export default {
  name: 'WorkorderManage',
  components: {
    WorkOrderQuery,
    WorkLoadQuery,
    MyWorkOrder,
    WorkOrderDetail,
    ApplyDialog,
    WorkOrderApply
  },
  data() {
    return {
      // 判断是否需要调用详情接口
      isEdit: false,
      activeName: 'WorkOrderQuery',

      // detail
      detailVisible: false,
      rowData: {},

      // apply
      applyVisible: false,
      typeDialogVisible: false,
      initData: {}
    }
  },
  methods: {
    change(tab) {
      this.$refs[this.activeName]?.queryList?.()
      this.$refs[this.activeName]?.queryMyWorkPlanCount?.()
    },
    rowClick(row, isApply, isEdit = false) {
      this.isEdit = isEdit
      if (isApply) {
        this.applyVisible = true
      } else {
        this.detailVisible = true
      }
      this.rowData = row
    },
    tagSelected(initData) {
      this.typeDialogVisible = false
      this.applyVisible = true
      this.initData = initData
      this.isEdit = false
    },
    // 新增工单类型时 刷新工单查询中的工单类型
    changeWorkPlanType() {
      this.$refs.WorkOrderQuery?.$refs.workTypeSelect?.getDicts()
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.query.id) {
      next((vm) => {
        vm.rowClick({ ...to.query }, false, false)
      })
    } else {
      next()
    }
  }
}
</script>
<style lang=""></style>
