<template>
  <div class="page">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      @submit.native.prevent
    >
      <el-row>
        <SelectFormContent
          :conf="taskNotesQueryFormFields"
          :form="form"
        />
      </el-row>
    </el-form>

    <tables
      ref="table"
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
      @handleSelection="handleSelection"
    >
      <template
        slot="workName"
        slot-scope="scope"
      >
        <el-link
          :underline="false"
          type="primary"
          @click="viewWorkOrder(scope.data)"
        >
          {{
            scope.data.workName
          }}
        </el-link>
      </template>
      <template
        slot="operation"
        slot-scope="scope"
      >
        <el-button
          v-if="scope.data.maintainKnowledgeState == '已落库'"
          type="text"
          style="color: #4e60f6"
          size="small"
          @click.native.prevent="viewDetail(scope.data)"
        >
          查看知识库
        </el-button>
        <el-button
          v-else
          type="text"
          style="color: #4e60f6"
          size="small"
          @click.native.prevent="classify(scope.data)"
        >
          分类落库
        </el-button>
      </template>
    </tables>

    <ClassifyDailog
      :visible.sync="dialogVisible"
      :row-data="rowData"
      @reloadTableData="queryList"
    />
  </div>
</template>

<script>
import SelectFormContent from '@/components/DictSelect/SelectFormContent'
import tables from '@/components/table/index'
import { taskNotesQueryFormFields } from './const'
import {
  WorkOrderStatusList,
  WorkOrderLevelList,
  WorkOrderLevelMap,
  WorkOrderStatusMap
} from '../work-order/const'
import { selectRecordPageList } from '@/api/devops-center/knowledgeBase'
import ClassifyDailog from '@/views/devops-center/knowledge-base/components/ClassifyDailog'
export default {
  name: 'TaskNotes',
  components: {
    SelectFormContent,
    tables,
    ClassifyDailog
  },
  props: {
    isDialogType: {
      type: Boolean,
      default: false
    },
    selectionList: {
      type: Array,
      default: () => []
    },
    // 组件处于弹框中时 弹框状态
    opend: Boolean
  },
  data() {
    this.taskNotesQueryFormFields = taskNotesQueryFormFields.map((i) => {
      (i.events || (i.events = {})).change = this.queryList
      return i
    })
    this.tableList = [
      {
        prop: 'workMark',
        label: '工单编号',
        align: 'center',
        fixed: null
      },
      {
        prop: 'workName',
        label: '工单标题',
        align: 'center',
        showOverflowTooltip: true,
        fixed: null,
        slotName: 'workName',
        type: 'slot'
      },
      {
        prop: 'workTypeName',
        label: '工单类型',
        align: 'center',
        fixed: null
      },
      {
        prop: 'remark',
        label: '问题描述',
        align: 'center',
        showOverflowTooltip: true,
        fixed: null
      },
      {
        prop: 'processRemark',
        label: '处理情况',
        align: 'center',
        fixed: null
      },
      {
        prop: 'maintainKnowledgeState',
        label: '状态',
        align: 'center',
        fixed: null
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
    return {
      form: {
        // workPlanStatus: 'emerge',
        isKnowledge: false,
        workType: '全部'
      },
      tableData: [],
      limit: 10,
      pageNo: 1,
      total: 0,

      // dialog
      dialogVisible: false,
      rowData: {}
    }
  },
  watch: {
    opend(v) {
      if (v) {
        this.filterTableDataBySelectionList()
      }
    }
  },
  created() {
    if (this.isDialogType) {
      this.form.isKnowledge = null
      this.taskNotesQueryFormFields.shift()
      this.tableList.pop()
      this.tableList.unshift({
        status: 'selection',
        align: 'center',
        width: '50px',
        fixed: null
      })
    }
    this.queryList()
  },
  methods: {
    viewWorkOrder(row) {
      if (this.isDialogType) {
        return
      }
      this.$router.push({
        path: '/devops-center/work-order/query',
        query: {
          id: row.id,
          createBy: row.createBy,
          workName: row.workName,
          workTypeName: row.workTypeName
        }
      })
    },
    viewDetail(row) {
      this.$router.push({
        path: '/devops-center/knowledge-base/standard',
        query: { id: row.knowledgeId }
      })
    },
    classify(row) {
      this.rowData = row
      this.dialogVisible = true
    },
    // 兼容 作为弹框时候, 过滤掉已选中数据
    filterTableDataBySelectionList() {
      if (this.isDialogType) {
        const selectIdSet = new Set(this.selectionList.map((i) => i.id))
        this.tableData = this.tableDataBak.filter((i) => !selectIdSet.has(i.id))
        if (!this.tableData.length) {
          this.opend && this.$message.info('当前页面已全部选中哦！可进行操作下一页')
        }
        this.$nextTick(() => {
          this.$refs.table.$refs.tables.clearSelection()
        })
      }
    },
    handleSelection(val) {
      this.$emit('update:selectChange', val)
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
    queryList(initPagination = true) {
      if (initPagination) {
        this.pageNo = 1
        this.limit = 10
        this.total = 0
      }
      const params = { ...this.form, limit: this.limit, pageNo: this.pageNo }
      this.form.workType == '全部' && delete params.workType
      selectRecordPageList(params).then((res) => {
        if (res?.code == 0) {
          this.tableData = res.data.list || []
          this.total = res.data.total
          this.tableDataBak = JSON.parse(JSON.stringify(this.tableData))
          this.filterTableDataBySelectionList()
        } else {
          this.tableData = []
          this.total = this.tableData.length
          this.tableDataBak = JSON.parse(JSON.stringify(this.tableData))
          this.filterTableDataBySelectionList()
        }
      })
    }
  }
}
</script>
