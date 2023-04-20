<template>
  <div class="work-order-query">
    <el-row>
      <el-form :model="form" label-width="80px" inline @submit.native.prevent>
        <el-col :span="6">
          <el-form-item label="工厂选择">
            <DictSelect
              labelKey="locationName"
              valueKey="topParentId"
              forKey="topParentId"
              :dictUrl="factorySelectUrl"
              :options.sync="factoryList"
              v-model="form.factoryId"
              methods="post"
              placeholder="请选择工厂"
              @getSuccess="getfactoryListSuccess"
              @change="queryList"
            >
            </DictSelect>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="时间筛选">
            <TimeSelect v-model="form.date" @change="queryList" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="工单类型">
            <DictSelect
              ref="workTypeSelect"
              labelKey="workTypeName"
              valueKey="workTypeName"
              forKey="workTypeName"
              :dictUrl="queryWorkPlanTypeUrl"
              :options.sync="woTypes"
              v-model="form.workPlanType"
              methods="post"
              comType="radioButton"
              @getSuccess="getWoTypesSuccess"
              @change="queryList"
            />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="工单状态">
            <DictSelect
              :options="WorkOrderStatusListFilter"
              comType="checkbox"
              v-model="form.workPlanStatus"
              @change="queryList"
            >
            </DictSelect
          ></el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="优先级">
            <DictSelect
              :options="WorkOrderLevelList"
              comType="checkbox"
              v-model="form.workPlanLevel"
              @change="queryList"
            >
            </DictSelect
          ></el-form-item>
        </el-col>
        <el-col :span="2" :offset="2">
          <el-form-item class="fr">
            <export-button
              type="primary"
              :exportUrl="exportWorkPlanUrl"
              :getQueryParam="getQueryParam"
              fileName="工单列表.xls"
              >导出</export-button
            >
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>

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
      <template slot="operation" slot-scope="scope">
        <el-button
          @click.native.prevent="viewDetail(scope.data)"
          type="text"
          style="color: #4e60f6"
          size="small"
        >
          详情
        </el-button>
      </template>
    </tables>
  </div>
</template>
<script>
import { qurryWorkPlan } from '@/api/devops-center/workOrder'
import {
  factorySelectUrl,
  deviceTypeListUrl,
  queryWorkPlanTypeUrl,
  exportWorkPlanUrl
} from '@/components/DictSelect/urls'
import {
  WorkOrderStatusList,
  WorkOrderLevelList,
  WorkOrderLevelMap,
  WorkOrderStatusMap
} from '../const'
import DictSelect from '@/components/DictSelect'
import ExportButton from '@/components/ExportButton'
import TimeSelect from './TimeSelect.vue'
import tables from '@/components/table/index'

const allTypeFlag = '全部'
export default {
  name: 'WorkOrderQuery',
  components: {
    DictSelect,
    tables,
    TimeSelect,
    ExportButton
  },
  data() {
    this.exportWorkPlanUrl = exportWorkPlanUrl
    this.factorySelectUrl = factorySelectUrl
    this.queryWorkPlanTypeUrl = queryWorkPlanTypeUrl
    this.WorkOrderStatusList = WorkOrderStatusList
    this.WorkOrderLevelList = WorkOrderLevelList
    this.WorkOrderLevelMap = WorkOrderLevelMap
    this.WorkOrderStatusMap = WorkOrderStatusMap
    this.tableList = [
      // {
      //   label: '序号',
      //   align: 'center',
      //   fixed: null,
      //   width: '60px',
      //   status: 'index'
      // },
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
    return {
      factoryList: [],
      woTypes: [],
      tableData: [],
      limit: 10,
      pageNo: 1,
      total: 0,
      form: {
        factoryId: allTypeFlag,
        date: [],
        workPlanType: allTypeFlag,
        workPlanStatus: this.WorkOrderStatusList.filter((i) => i.value !== 'init').map(
          (i) => i.value
        ),
        workPlanLevel: [this.WorkOrderLevelList[0].value] ?? []
      }
    }
  },
  computed: {
    WorkOrderStatusListFilter() {
      return this.WorkOrderStatusList.filter((i) => i.value !== 'init')
    }
  },
  created() {},
  methods: {
    viewDetail(row) {
      if (row.workPlanStatus === 'init' && scope.data.creator == this.$store.state.user.uid) {
        this.$emit('rowClick', row, true, true)
      } else {
        this.$emit('rowClick', row, false, false)
      }
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
    getfactoryListSuccess() {
      this.factoryList.unshift({ locationName: '全部', topParentId: allTypeFlag, id: allTypeFlag })
    },
    getWoTypesSuccess() {
      this.woTypes.unshift({ workTypeName: '全部', id: allTypeFlag })
    },
    getQueryParam() {
      return {
        ...this.form,
        factoryId: this.form.factoryId === allTypeFlag ? null : this.form.factoryId,
        workPlanType: this.form.workPlanType === allTypeFlag ? null : [this.form.workPlanType],
        beginDate: this.form.date[0],
        endDate: this.form.date[1],
        pageNo: this.pageNo,
        limit: this.limit
      }
    },
    queryList(initPagination = true) {
      if (initPagination) {
        this.pageNo = 1
        this.limit = 10
        this.total = 0
      }
      console.log('query')
      qurryWorkPlan(this.getQueryParam())
        .then((res) => {
          this.tableData = res.data.list || []
          this.total = res.data.total
        })
        .catch((err) => {
          this.tableData = []
          this.total = 0
        })
    }
  }
}
</script>
<style lang="less" scoped>
.query-table {
  min-height: 200px;
}
</style>
