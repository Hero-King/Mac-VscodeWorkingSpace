<template>
  <div class="work-order-query">
    <el-row>
      <el-form
        :model="form"
        label-width="80px"
        inline
        @submit.native.prevent
      >
        <el-col :span="6">
          <el-form-item label="工厂选择">
            <DictSelect
              v-model="form.factoryId"
              label-key="locationName"
              value-key="topParentId"
              for-key="topParentId"
              :dict-url="factorySelectUrl"
              :options.sync="factoryList"
              methods="post"
              placeholder="请选择工厂"
              @getSuccess="getfactoryListSuccess"
              @change="queryList"
            />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="时间筛选">
            <TimeSelect
              v-model="form.date"
              @change="queryList"
            />
          </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-form-item class="fr">
            <export-button
              type="primary"
              :export-url="exportWorkloadUrl"
              :get-query-param="getQueryParam"
              file-name="工作量列表.xls"
            >导出</export-button>
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
    />
  </div>
</template>
<script>
import { qurryWorkPlan, queryWorkload } from '@/api/devops-center/workOrder'
import { factorySelectUrl, exportWorkloadUrl } from '@/components/DictSelect/urls'

import DictSelect from '@/components/DictSelect'
import ExportButton from '@/components/ExportButton'
import TimeSelect from './TimeSelect.vue'
import tables from '@/components/table/index'

const allTypeFlag = '全部'
export default {
  name: 'WorkLoadQuery',
  components: {
    DictSelect,
    tables,
    TimeSelect,
    ExportButton
  },
  data() {
    this.exportWorkloadUrl = exportWorkloadUrl
    this.factorySelectUrl = factorySelectUrl
    this.tableList = [
      {
        label: '序号',
        align: 'center',
        fixed: null,
        width: '60px',
        status: 'index'
      },
      {
        prop: 'name',
        label: '员工姓名',
        align: 'center',
        fixed: null
      },
      {
        prop: 'jobNo',
        label: '员工账号',
        align: 'center',
        fixed: null
      },
      {
        prop: 'orderQuantity',
        label: '接单量',
        align: 'center',
        fixed: null
      },
      {
        prop: 'completedQuantity',
        label: '完单量',
        align: 'center',
        fixed: null
      },
      {
        prop: 'incompleteQuantity',
        label: '未完成',
        align: 'center',
        fixed: null
      },
      {
        prop: 'lapseTime',
        label: '处理时效',
        align: 'center',
        fixed: null
      }
    ]
    return {
      factoryList: [],
      tableData: [],
      limit: 10,
      pageNo: 1,
      total: 0,
      form: {
        factoryId: allTypeFlag,
        date: []
      }
    }
  },
  computed: {},
  methods: {
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
    getQueryParam() {
      return {
        factoryId: this.form.factoryId === allTypeFlag ? null : this.form.factoryId,
        beginDate: this.form.date[0],
        endDate: this.form.date[1],
        pageNo: this.pageNo,
        limit: this.limit
      }
    },
    getfactoryListSuccess() {
      this.factoryList.unshift({ locationName: '全部', topParentId: allTypeFlag, id: allTypeFlag })
    },
    queryList(initPagination = true) {
      if (initPagination) {
        this.pageNo = 1
        this.limit = 10
        this.total = 0
      }
      queryWorkload(this.getQueryParam())
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
