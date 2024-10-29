<template>
  <div>
    <LabelValue
      class="top-tip"
      label="待处理工单总数"
      label-width="120px"
      value-class="primaryButton"
      :value="statistic.pendingQuantity"
    />
    <LabelValue
      class="top-tip"
      label="个人平均处理时长"
      label-width="130px"
      value-class="primaryButton"
      :value="statistic.avgProcessTime"
    />

    <div class="tab-wrap">
      <el-tabs
        v-model="activeName"
        @tab-click="queryList"
      >
        <el-tab-pane
          v-for="(tab, index) in tabs"
          :key="tab.name"
          :name="tab.name"
        >
          <template slot="label">
            {{ tab.label }}
            <el-badge
              v-if="!tab.hidden"
              :value="statistic[tab.valueKey]"
            />
          </template>
        </el-tab-pane>
      </el-tabs>
      <el-button
        class="export-btn"
        type="primary"
        size="small"
        @click="apply"
      >工单申请</el-button>
      <tables
        class="query-table"
        :config="{
          tableData,
          tableList,
          border: true,
          limit,
          pageNo,
          total,
          background: '#edf2ff'
        }"
        @currentChange="currentChange"
        @sizeChange="sizeChange"
      >
        <template #workPlanLevel="{ data }">
          {{ WorkOrderLevelMap[data.workPlanLevel] }}
        </template>
        <template #workPlanStatus="{ data }">
          {{ WorkOrderStatusMap[data.workPlanStatus] }}
        </template>
        <template
          slot="operation"
          slot-scope="scope"
        >
          <!-- 1、对于自己发起的事项，操作中可以进行“查看、催办、撤回”
            查看：进入详情页
            催办：系统发送催办邮件到当前节点
            撤回：流程中单据撤消，状态变回草稿 -->
          <div
            v-if="userId == scope.data.creator"
            class="btn-list"
          >
            <el-button
              type="text"
              style="color: #4e60f6"
              size="small"
              @click.stop="viewDetail(scope.data)"
            > 查看 </el-button>
            <el-button
              v-if="scope.data.workPlanStatus == 'pendding' || scope.data.workPlanStatus == 'processing'"
              size="small"
              style="color: #4e60f6"
              type="text"
              @click="toUrge(scope.data)"
            >催办</el-button>
            <el-button
              v-if="scope.data.workPlanStatus == 'pendding' || scope.data.workPlanStatus == 'processing'"
              size="small"
              style="color: #f5222d"
              type="text"
              @click="toReview(scope.data)"
            >撤回</el-button>
          </div>
          <div
            v-else
            class="btn-list"
          >
            <el-button
              type="text"
              style="color: #4e60f6"
              size="small"
              @click.stop="viewDetail(scope.data)"
            >
              {{ isToDoTab ? '处理' : '详情' }}
            </el-button>
          </div>
        </template>
      </tables>
    </div>
  </div>
</template>
<script>
import LabelValue from './LabelValue.vue'
import { myWorkPlanCount, queryMyWorkPlan, queryWorkPlanType, pressToDo, review } from '@/api/devops-center/workOrder'
import tables from '@/components/table/index'
import { WorkOrderStatusList, WorkOrderLevelList, WorkOrderLevelMap, WorkOrderStatusMap } from '../const'

export default {
  name: 'MyWorkOrder',
  components: {
    LabelValue,
    tables
  },
  data() {
    this.WorkOrderStatusList = WorkOrderStatusList
    this.WorkOrderLevelList = WorkOrderLevelList
    this.WorkOrderLevelMap = WorkOrderLevelMap
    this.WorkOrderStatusMap = WorkOrderStatusMap
    this.tableList = [
      {
        prop: 'workPlanMark',
        label: '工单编号',
        align: 'center',
        fixed: null
      },
      {
        prop: 'workName',
        label: '工单标题',
        align: 'center',
        showOverflowTooltip: true,
        fixed: null
      },
      {
        prop: 'workTypeName',
        label: '工单类型',
        align: 'center',
        fixed: null
      },
      {
        prop: 'workPlanLevel',
        label: '优先级',
        align: 'center',
        fixed: null,
        slotName: 'workPlanLevel',
        type: 'slot'
      },
      {
        prop: 'workPlanStatus',
        label: '工单状态',
        align: 'center',
        fixed: null,
        slotName: 'workPlanStatus',
        type: 'slot'
      },
      {
        prop: 'currentNode',
        label: '当前处理人',
        align: 'center',
        showOverflowTooltip: true,
        fixed: null
        // slotName: 'qr',
        // type: 'slot'
      },
      {
        prop: 'createTime',
        label: '创建时间',
        align: 'center',
        fixed: null
        // slotName: 'qr',
        // type: 'slot'
      },
      {
        prop: 'operation',
        label: '操作',
        align: 'center',
        fixed: 'right',
        slotName: 'operation',
        type: 'slot'
      }
    ]
    this.tabs = [
      {
        label: '我的发起',
        name: 'created',
        valueKey: 'myInitiationQuantity',
        hidden: true
      },
      {
        label: '我的待办',
        name: 'todo',
        valueKey: 'pendingQuantity',
        hidden: false
      },
      {
        label: '我的已办',
        name: 'completed',
        valueKey: 'completedQuantity',
        hidden: true
      },
      {
        label: '全部工单',
        name: 'all',
        valueKey: 'totalQuantity',
        hidden: true
      }
    ]
    return {
      urgeLoading: false,
      activeName: 'todo',
      statistic: {
        // 总数量
        totalQuantity: 0,
        // 待处理数量
        pendingQuantity: 0,
        // 已完成数量
        completedQuantity: 0,
        avgProcessTime: '',
        // 我的发起
        myInitiationQuantity: 0
      },
      tableData: [],
      limit: 10,
      pageNo: 1,
      total: 0,

      // type
      typeDialogVisible: false
    }
  },
  computed: {
    userId() {
      return '195243'
    },
    hasHandlePer() {
      return true
      return this.$store.state.poros.btnAuth.includes('assignmentRejection') || this.$store.state.poros.btnAuth.includes('inputDetail')
    },
    isToDoTab() {
      return this.activeName == 'todo'
    }
  },
  created() {
    this.queryList()
    this.queryMyWorkPlanCount()
  },
  methods: {
    toReview(row) {
      this.$confirm('您确定要撤回吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.handleRevert(row)
        })
        .catch(() => {})
    },
    toUrge(row) {
      this.$confirm('您确定要催办吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.handleUrge(row)
        })
        .catch(() => {})
    },
    viewDetail(row) {
      if (row.workPlanStatus === 'init' && this.userId == row.creator) {
        this.$emit('rowClick', row, true, true)
      } else if (this.isToDoTab) {
        this.$emit('rowClick', row, false, true)
      } else {
        this.$emit('rowClick', row, false, false)
      }
    },
    handleRevert(row) {
      console.log('handleRevert', row)
      review({ id: row.id }).then((res) => {
        if (res?.code == 0) {
          this.$message.success('撤回成功')
          this.$emit('reloadTableData')
        }
      })
    },
    handleUrge(row) {
      console.log('handleUrge', row)
      if (this.urgeLoading) {
        this.$message.warning('任务催办中, 请稍后')
        return
      }
      this.urgeLoading = true
      pressToDo({ id: row.id })
        .then((res) => {
          if (res?.code == 0) {
            this.$message.success('催办成功')
          }
        })
        .finally(() => {
          this.urgeLoading = false
        })
    },
    apply() {
      this.$emit('update:typeDialogVisible', true)
    },
    // 分页数量
    sizeChange(val) {
      this.limit = val
      this.queryList(false)
    },
    // 分页页数
    currentChange(val) {
      this.pageNo = val
      this.queryList(false)
    },
    queryMyWorkPlanCount() {
      myWorkPlanCount()
        .then((res) => {
          this.statistic = res.data || {}
          if (this.statistic.pendingQuantity <= 0) {
            this.activeName = 'created'
            this.queryList()
          }
        })
        .catch((err) => {
          this.statistic = {
            // 总数量
            totalQuantity: 0,
            // 待处理数量
            pendingQuantity: 0,
            // 已完成数量
            completedQuantity: 0,
            avgProcessTime: '',
            // 我的发起
            myInitiationQuantity: 0
          }
        })
    },
    queryList(initPagination = true) {
      if (initPagination) {
        this.pageNo = 1
        this.limit = 10
        this.total = 0
      }
      queryMyWorkPlan({
        tabType: this.activeName,
        pageNo: this.pageNo,
        limit: this.limit
      })
        .then((res) => {
          this.tableData = res.data.list || []
          this.total = res.data.total
        })
        .catch((err) => {
          this.tableData = []
          this.total = 0
        })
    },
    handleExport() {}
  }
}
</script>
<style lang="less" scoped>
.top-tip {
  display: inline-block;
  padding: 0 10px;
  border-style: none;
  border-color: unset;
  font-size: 14px;
  text-align: center;
  font-weight: normal;
  vertical-align: top;
  font-style: normal;
  background: rgba(64, 149, 229, 0.18);
  margin-right: 20px;
}

.tab-wrap {
  position: relative;
}
.export-btn {
  position: absolute;
  top: 4px;
  right: 0;
}
</style>
