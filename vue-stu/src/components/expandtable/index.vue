<template>
  <div>
    <div class="expand-table-wrap">
      <el-table :data="tableData" header-row-class-name="blue-header" :border="border">
        <template v-for="column in tableColumns">
          <el-table-column v-if="column.render && column.headerRender" :key="column.prop || column.label" v-bind="column">
            <template slot-scope="scope" slot="header">
              <!-- <el-form-item :rules="column.rules"> -->
              <js-render :jsRender="column.headerRender" :renderArgument="scope" :renderNode="_self" />
              <!-- </el-form-item> -->
            </template>
            <template slot-scope="scope">
              <js-render :jsRender="column.render" :renderArgument="scope" :renderNode="$parent" />
            </template>
          </el-table-column>
          <el-table-column v-else-if="column.render" :key="column.prop || column.label" v-bind="column">
            <template slot-scope="scope">
              <js-render :jsRender="column.render" :renderArgument="scope" :renderNode="$parent" />
            </template>
          </el-table-column>
          <el-table-column v-else :key="column.prop || column.label" v-bind="column"> </el-table-column>
        </template>
      </el-table>
      <div class="expand-table-right-btns" v-if="needAddColumn">
        <el-button title="添加列" icon="el-icon-circle-plus" circle @click="handleAddColumn"></el-button>
        <el-button title="删除列" icon="el-icon-remove" circle @click="handleDeleteColumn"></el-button>
      </div>
    </div>
    <div class="expand-table-bottom-btns" v-if="needAddRow">
      <el-button title="添加行" icon="el-icon-circle-plus" circle @click="handleAddRow"></el-button>
      <el-button title="删除行" icon="el-icon-remove" circle @click="handleDeleteRow"></el-button>
    </div>
  </div>
</template>
<script>
/**
 * @description 拓展表格组件 数据存储在当前实例中,父需要调用valid方法判断是否填写完整,在getTableData获取数据(已封装成Table可用的data)
 */
import JsRender from './JsRender'
export default {
  name: 'ExpandTable',
  components: {
    JsRender
  },
  props: {
    needAddRow: {
      type: Boolean,
      default: true
    },
    needAddColumn: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      customColumns: [],
      tableData: []
    }
  },
  computed: {
    templateColumn() {
      return this.columns.length > 0 ? this.columns[this.columns.length - 1] : {}
    },
    commonColumns() {
      return this.columns.length > 0 && this.needAddColumn ? this.columns.slice(0, this.columns.length - 1) : this.columns
    },
    commonPropSet() {
      return new Set(this.commonColumns.map((i) => i.prop))
    },
    tableColumns() {
      let otherColumn = this.needAddColumn ? (this.customColumns.length === 0 ? [this.templateColumn] : this.customColumns) : []
      return [...this.commonColumns, ...otherColumn]
    },
    columnLabelSet() {
      return new Set(this.tableColumns.map((i) => i.label))
    },
    lastColumn() {
      return this.tableColumns.length > 0 ? this.tableColumns[this.tableColumns.length - 1] : {}
    },
    // 最后一列纵向数据
    lastColumnData() {
      return this.tableData.map((i) => i[this.lastColumn.prop])
    },
    // 自定义列的prop前缀
    customColPropPrefix() {
      return this.lastColumn.prop?.split('_')[0] || this.lastColumn.prop
    },
    customColLabelPrefix() {
      return this.lastColumn.label?.split('_')[0] || this.lastColumn.label
    },
    // 自定义列的Index
    customColIndex() {
      const index = Number(this.lastColumn.prop?.split('_')?.[1])
      return isNaN(index) ? 0 : index
    }
  },
  methods: {
    transformDataToCustomData() {
      let dataT = []
      const { customColPropPrefix } = this
      this.data.forEach((i, index) => {
        let dataItem = {}
        let customColIndex = 0
        Object.keys(i).forEach((key) => {
          if (this.commonPropSet.has(key)) {
            dataItem[key] = i[key]
          } else {
            let customProp = `${customColPropPrefix}_${customColIndex++}`
            if (index === 0 && this.needAddColumn) {
              this.customColumns.push({
                ...this.templateColumn,
                prop: customProp,
                label: key
              })
            }
            dataItem[customProp] = i[key]
          }
        })
        dataT.push(dataItem)
      })
      return dataT
    },
    handleHeaderChange(v, colIndex) {
      v = v.trim()
      if (this.columnLabelSet.has(v)) {
        this.$msgError(`列${v}已存在`)
      } else {
        this.tableColumns[colIndex].label = v
      }
    },
    validateData() {
      let validRowSuccess = this.handleAddRow({}, true)
      return validRowSuccess === true && this.handleAddRow({}, true) === true
    },
    // 复制最后一列
    handleAddColumn(e, test = false) {
      const { customColPropPrefix, customColLabelPrefix, customColIndex } = this
      if (this.lastColumnData.some((i) => typeof i === 'undefined') || this.lastColumn.label?.length === 0) {
        return this.$msgError('请填写完整')
      }
      if (test) {
        return true
      }
      const newCol = {
        ...this.lastColumn,
        prop: customColPropPrefix + '_' + (customColIndex + 1),
        label: this.lastColumn.headerRender ? '' : customColLabelPrefix + '_' + (customColIndex + 1)
      }
      this.customColumns = [...this.customColumns, newCol]
    },
    handleDeleteColumn() {
      const { customColIndex } = this
      if (customColIndex > 0) {
        this.tableData.forEach((i) => delete i[this.lastColumn.prop])
        this.customColumns = this.customColumns.slice(0, this.customColumns.length - 1)
      }
    },
    handleAddRow(e, test = false) {
      let latestRowData = this.tableData[this.tableData.length - 1]
      if (Object.keys(latestRowData).length === this.tableColumns.length && Object.values(latestRowData).every((i) => i.length > 0)) {
        if (test) {
          return true
        }
        this.tableData = [...this.tableData, {}]
      } else {
        return this.$msgError('请填写数据')
      }
    },
    handleDeleteRow() {
      if (this.tableData.length > 1) {
        this.tableData = this.tableData.slice(0, this.tableData.length - 1)
      }
    },
    // 获取表格数据
    getTableData() {
      if (this.validateData()) {
        let tableData = []
        this.tableData.forEach((row) => {
          // 结合customColumns 封装数据
          let rowT = {}
          Object.keys(row).forEach((key) => {
            if (this.commonPropSet.has(key)) {
              rowT[key] = row[key]
            } else {
              let customIndex = key.split('_')[1]
              rowT[this.customColumns[customIndex].label] = row[key]
            }
          })
          tableData.push(rowT)
        })
        return tableData
      }
    }
  },
  watch: {
    data: {
      handler(v) {
        this.tableData = this.transformDataToCustomData()
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.expand-table-wrap {
  display: flex;
  .expand-table-right-btns {
    padding-left: 10px;
  }
  ::v-deep .blue-header {
    background-color: #e9f4ff;
    > th {
      background-color: transparent;
    }
  }
}
</style>
