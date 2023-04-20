<template>
  <div>
    <el-button type="primary" size="small" @click="handleBack">返回</el-button>
    <tables
      :config="{
        tableData,
        tableList,
        border: true,
        limit,
        pageNo,
        total,
        background: '#edf2ff',
        spanMethod
      }"
      @currentChange="currentChange"
      @sizeChange="sizeChange"
    >
      <template #name="scope">
        <div v-if="scope.data.workList && scope.data.workList.length > 0">
          <el-link :underline="false" type="primary" @click="toWork(scope.data.workList[0])">
            {{ scope.data.workList[0].workName }}
          </el-link>
        </div>
        <div v-else>暂无</div>
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
import tables from '@/components/table/index'
import {
  selectRecordPageList,
  selectBaseType,
  selectBasePageList,
  insertBaseType,
  insertKnowledge,
  selectGraphTopology
} from '@/api/devops-center/knowledgeBase'
export default {
  name: 'GraphyDetailTable',
  props: {
    queryParam: Object,
    visible: Boolean
  },
  components: {
    tables
  },
  data() {
    return {
      tableData: [],
      limit: 10,
      pageNo: 1,
      total: 0
    }
  },
  created() {
    this.queryList()
  },
  computed: {
    tableList() {
      let middle = [
        {
          prop: 'issueName',
          label: '现象类型',
          align: 'center',
          fixed: null
        },
        {
          prop: 'methodName',
          label: '措施类型',
          align: 'center',
          fixed: null
        }
      ]
      let key = Object.keys(this.queryParam)[0]
      key == 'methodName' && middle.reverse()
      return [
        {
          label: '序号',
          align: 'center',
          fixed: null,
          width: '60px',
          status: 'index'
        }
      ].concat(middle, [
        {
          prop: 'name',
          label: '相关现象工单',
          align: 'center',
          fixed: null,
          slotName: 'name',
          type: 'slot'
        },
        {
          prop: 'operation',
          label: '操作',
          align: 'center',
          fixed: 'right',
          slotName: 'operation',
          type: 'slot'
        }
      ])
    }
  },
  methods: {
    toWork(row) {
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
        query: { id: row.id }
      })
    },
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        if (rowIndex == 0) {
          return {
            rowspan: this.tableData.length,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    handleBack() {
      this.$emit('update:visible', false)
      this.tableData = []
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
      let params = { ...this.queryParam, limit: this.limit, pageNo: this.pageNo }
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
        } else {
          this.tableData = []
          this.total = 0
        }
      })
    }
  }
}
</script>
<style lang=""></style>
