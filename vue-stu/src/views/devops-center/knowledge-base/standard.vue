<template>
  <div class="page">
    <div v-show="!detailVisible">
      <el-form :model="form" ref="form" size="small" label-width="80px" inline>
        <el-form-item v-for="item in standardQueryFields" :label="item.label" :key="item.formKey">
          <DictSelect :options="typeData[item.optionsKey]" v-bind="item" v-model="form[item.formKey]" @change="queryList"> </DictSelect>
        </el-form-item>
      </el-form>

      <div class="tools" v-if="!isDialogType">
        <el-button size="small" plain @click="typeDialogVisible = true">新增类型</el-button>
        <el-button size="small" type="primary" @click="addKnowledge">新增知识</el-button>
        <export-button type="primary" :exportUrl="exportPageListUrl" :getQueryParam="getQueryParam" fileName="知识库列表.xls">导出</export-button>
      </div>

      <tables
        class="query-table"
        ref="table"
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
        <template slot="operation" slot-scope="scope">
          <el-button @click.native.prevent="viewDetail(scope.data, false)" type="text" style="color: #4e60f6" size="small"> 详情 </el-button>
          <el-button @click.native.prevent="viewDetail(scope.data, true)" type="text" style="color: #4e60f6" size="small"> 编辑 </el-button>
        </template>
      </tables>

      <!-- 新增类型 -->
      <el-dialog title="新增类型" :close-on-click-modal="false" :visible.sync="typeDialogVisible" @closed="typeClosed">
        <el-form :model="typeForm" :rules="typeRules" ref="typeForm" size="small" label-width="100px" @submit.native.prevent>
          <el-form-item label="所属类别">
            <el-select v-model="typeForm.type" prop="type" @change="selectChange">
              <el-option label="现象类型" value="issue"></el-option>
              <el-option label="措施类型" value="method"></el-option>
              <el-option label="知识类型" value="category"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input style="width: 70%" v-model="typeForm.name"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="textCenter">
          <el-button size="small" type="primary" @click="typeAdd" :loading="typeLoading">新 增</el-button>
          <el-button size="small" @click="typeDialogVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
    <standard-detail
      :canEdit.sync="canEdit"
      :visible.sync="detailVisible"
      v-if="detailVisible"
      :rowData="rowData"
      @reloadTableData="queryList"
    ></standard-detail>
  </div>
</template>

<script>
import SelectFormContent from '@/components/DictSelect/SelectFormContent'
import tables from '@/components/table/index'
import DictSelect from '@/components/DictSelect'
import { exportPageListUrl } from '@/components/DictSelect/urls'
import StandardDetail from '@/views/devops-center/knowledge-base/components/StandardDetail'
import { standardQueryFields } from './const'
import ExportButton from '@/components/ExportButton'
import { WorkOrderStatusList, WorkOrderLevelList, WorkOrderLevelMap, WorkOrderStatusMap } from '../work-order/const'
import { selectRecordPageList, selectBaseType, selectBasePageList, insertBaseType } from '@/api/devops-center/knowledgeBase'
export default {
  name: 'Standard',
  components: {
    SelectFormContent,
    tables,
    DictSelect,
    StandardDetail,
    ExportButton
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
    this.exportPageListUrl = exportPageListUrl
    this.standardQueryFields = standardQueryFields
    this.tableList = [
      {
        label: '序号',
        align: 'center',
        fixed: null,
        width: '60px',
        status: 'index'
      },
      {
        prop: 'issueName',
        label: '现象类型',
        align: 'center',
        fixed: null
      },
      {
        prop: 'issueDesc',
        label: '现象描述',
        align: 'center',
        showOverflowTooltip: true,
        fixed: null
      },
      {
        prop: 'methodName',
        label: '措施类型',
        align: 'center',
        fixed: null
      },
      {
        prop: 'methodDesc',
        label: '措施描述',
        align: 'center',
        showOverflowTooltip: true,
        fixed: null
      },
      {
        prop: 'name',
        label: '知识名称',
        align: 'center',
        fixed: null
      },
      {
        prop: 'categoryName',
        label: '知识类别',
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
    const typeNameValid = (rule, value, callback) => {
      if (value.length == 0) {
        callback('请输入名称')
      } else if (this.typeData[this.typeForm.type + 'List'].some((i) => i == value.trim())) {
        callback(`名称 ${value} 已存在`)
      } else {
        callback()
      }
    }
    return {
      // detail
      detailVisible: false,
      rowData: {},
      canEdit: false,

      // add type
      typeLoading: false,
      typeDialogVisible: false,
      typeForm: {
        name: '',
        type: 'category'
      },
      typeRules: {
        name: [{ validator: typeNameValid, trigger: 'blur' }]
      },

      // 查询
      form: {},
      tableData: [],
      limit: 10,
      pageNo: 1,
      total: 0,
      typeData: {}
    }
  },
  beforeRouteEnter(to, from, next) {
    let id = to.query.id
    if (id) {
      selectBasePageList({ maintainKnowledgeId: id }).then((res) => {
        if (res?.code == 0 && res.data.list?.length > 0) {
          next((vm) => {
            vm.rowData = res.data.list[0]
            vm.viewDetail(vm.rowData, false)
          })
        } else {
          this.$message.error('获取详情失败')
          next(from)
        }
      })
    } else {
      next()
    }
  },
  created() {
    if (this.isDialogType) {
      // this.taskNotesQueryFormFields.shift()
      this.tableList.pop()
      this.tableList.unshift({
        status: 'selection',
        align: 'center',
        width: '50px',
        fixed: null
      })
    }
    this.getTypes()
    this.queryList()
  },
  methods: {
    // 兼容 作为弹框时候, 过滤掉已选中数据
    filterTableDataBySelectionList() {
      if (this.isDialogType) {
        let selectIdSet = new Set(this.selectionList.map((i) => i.id))
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
    addKnowledge() {
      this.canEdit = true
      this.rowData = {}
      this.detailVisible = true
    },
    selectChange() {
      this.typeForm.name && this.$refs.typeForm.validate()
    },
    typeClosed() {
      this.$refs.typeForm.resetFields()
    },
    async typeAdd() {
      await this.$refs.typeForm.validate()
      this.typeLoading = true
      insertBaseType(this.typeForm)
        .then((res) => {
          if (res?.code == 0) {
            this.getTypes()
            this.$message.success('创建成功')
            this.typeDialogVisible = false
          }
        })
        .finally(() => {
          this.typeLoading = false
        })
    },
    viewDetail(row, canEdit) {
      this.rowData = JSON.parse(JSON.stringify(row))
      this.detailVisible = true
      this.canEdit = canEdit
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
    getQueryParam() {
      let params = { ...this.form, limit: this.limit, pageNo: this.pageNo }
      this.form.workPlanType == '全部' && delete params.workPlanType
      return params
    },
    queryList(initPagination = true) {
      if (initPagination) {
        this.pageNo = 1
        this.limit = 10
        this.total = 0
      }
      selectBasePageList(this.getQueryParam()).then((res) => {
        if (res?.code == 0) {
          this.tableData = res.data.list || []
          this.total = res.data.total
          this.tableDataBak = JSON.parse(JSON.stringify(this.tableData))
          this.filterTableDataBySelectionList()
        } else {
          this.tableData = []
          this.total = 0
          this.tableDataBak = []
        }
      })
    },
    getTypes() {
      selectBaseType().then((res) => {
        if (res?.code == 0) {
          this.typeData = res.data
        } else {
          this.typeData = {
            categoryList: [],
            issueList: [],
            methodList: []
          }
        }
      })
    }
  },
  watch: {
    opend(v) {
      if (v) {
        this.filterTableDataBySelectionList()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.tools {
  margin-bottom: 10px;
  text-align: right;
}
</style>
