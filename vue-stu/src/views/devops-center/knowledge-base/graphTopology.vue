<template>
  <div class="page h100">
    <div
      v-show="!tableVisible"
      class="graph"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        @submit.native.prevent
      >
        <el-row>
          <SelectFormContent
            :conf="queryFields"
            :form="form"
          />
          <el-col
            :span="1"
            :offset="4"
          >
            <export-button
              type="primary"
              :export-url="exportGraphTopologyUrl"
              :get-query-param="getQueryParam"
              file-name="图谱列表.xls"
            >
              导出
            </export-button>
          </el-col>
        </el-row>
      </el-form>

      <div class="echart-wrap">
        <graphy
          :data-conf="echartConf"
          :active-name="activeName"
          @click="handleClick"
        />
      </div>
    </div>

    <GraphyDetailTable
      v-if="tableVisible"
      :visible.sync="tableVisible"
      :query-param="tableQueryParam"
    />
  </div>
</template>

<script>
import {
  selectRecordPageList,
  selectBaseType,
  selectBasePageList,
  insertBaseType,
  insertKnowledge,
  selectRealType,
  selectGraphTopology
} from '@/api/devops-center/knowledgeBase'
import ExportButton from '@/components/ExportButton'
import { exportGraphTopologyUrl } from '@/components/DictSelect/urls'
import DictSelect from '@/components/DictSelect'
import SelectFormContent from '@/components/DictSelect/SelectFormContent'
import Graphy from './components/Graphy.vue'
import GraphyDetailTable from '@/views/devops-center/knowledge-base/components/GraphyDetailTable'
export default {
  name: 'GraphTopology',
  components: { DictSelect, SelectFormContent, ExportButton, Graphy, GraphyDetailTable },
  props: {},
  data() {
    this.exportGraphTopologyUrl = exportGraphTopologyUrl
    return {
      tableVisible: false,
      tableQueryParam: {},

      form: {},
      echartConf: {
        categories: [],
        data: [],
        links: []
      },
      activeName: '',
      queryFields: [
        {
          span: 6,
          label: '知识类别',
          formKey: 'categoryName',
          optionsKey: 'categoryList',
          clearable: true,
          options: [],
          events: {
            change: (val) => {
              this.selectChange(val, true)
            },
            'visible-change': (visible) => {
              if (visible) {
                this.updateOptions('categoryName', 'categoryList')
              }
            }
          }
        },
        {
          span: 6,
          label: '现象类型',
          formKey: 'issueName',
          optionsKey: 'issueList',
          clearable: true,
          options: [],
          events: {
            change: this.selectChange,
            'visible-change': (visible) => {
              if (visible) {
                this.updateOptions('issueName', 'issueList')
              }
            }
          }
        },
        {
          span: 6,
          label: '措施类型',
          formKey: 'methodName',
          optionsKey: 'methodList',
          clearable: true,
          options: [],
          events: {
            change: this.selectChange,
            'visible-change': (visible) => {
              if (visible) {
                this.updateOptions('methodName', 'methodList')
              }
            }
          }
        }
      ]
    }
  },
  created() {
    this.query()
  },
  methods: {
    handleClick(param) {
      const { category, name } = param.data
      const cnTypeName = this.echartConf.categories[category].name
      const formKey = this.queryFields.find((i) => i.label.includes(cnTypeName))?.formKey || ''
      if (formKey) {
        this.tableQueryParam = { [formKey]: name }
        this.tableVisible = true
      } else {
        console.warn('没匹配到字段')
      }
    },
    getQueryParam() {
      return { ...this.form, limit: null, pageNo: 1 }
    },
    query() {
      selectGraphTopology(this.getQueryParam()).then((res) => {
        if (res?.code == 0) {
          this.echartConf = res.data
        }
      })
    },
    selectChange(val, isCategory = false) {
      !isCategory && (this.activeName = val || this.form.issueName || this.form.methodName)
      this.query()
    },
    /**
     * @description 通过将formKey置空 查询到可选内容更新到optionsKey
     */
    updateOptions(formKey, optionsKey) {
      const param = formKey ? { ...this.form, [formKey]: '' } : { ...this.form }
      selectRealType(param).then((res) => {
        if (res?.code == 0) {
          this.queryFields.forEach((i) => {
            if (i.optionsKey == optionsKey) {
              i.options = res.data[i.optionsKey] || []
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.h100 {
  height: 100%;
}
.graph {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.echart-wrap {
  flex: 1;
}
</style>
