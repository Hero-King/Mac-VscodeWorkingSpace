<template>
  <div>
    <div class="expand-table-wrap">
      <el-table
        :data="data"
        header-row-class-name="blue-header"
        :border="border"
      >
        <template v-for="column in columns">
          <el-table-column
            v-if="column.render && column.header"
            :key="column.prop || column.label"
            v-bind="column"
          >
            <template
              slot="header"
              slot-scope="scope"
            >
              <component
                :is="column.header.type"
                v-model="column.label"
              />
            </template>
            <template slot-scope="scope">
              <!-- 妙用 -->
              <component
                :is="column.render.type"
                v-model="scope.row[scope.column.property]"
                @change="handleCellChange"
              />
            </template>
          </el-table-column>
          <el-table-column
            v-else-if="column.render"
            :key="column.prop || column.label"
            v-bind="column"
          >
            <template slot-scope="scope">
              <component
                :is="column.render.type"
                v-model="scope.row[scope.column.property]"
              />
            </template>
          </el-table-column>
          <el-table-column
            v-else
            :key="column.prop || column.label"
            v-bind="column"
          />
        </template>
      </el-table>
      <div
        v-if="needAddColumn"
        class="expand-table-right-btns"
      >
        <el-button
          title="添加列"
          icon="el-icon-circle-plus"
          circle
          @click="handleAddColumn"
        />
        <el-button
          title="删除列"
          icon="el-icon-remove"
          circle
          @click="handleDeleteColumn"
        />
      </div>
    </div>
    <div
      v-if="needAddRow"
      class="expand-table-bottom-btns"
    >
      <el-button
        title="添加行"
        icon="el-icon-circle-plus"
        circle
        @click="handleAddRow"
      />
      <el-button
        title="删除行"
        icon="el-icon-remove"
        circle
        @click="handleDeleteRow"
      />
    </div>
  </div>
</template>
<script>
/**

 */
import JsRender from './JsRender'
export default {
  name: 'ExpandTable2',
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
      default: () => [
        {
          prop: 'name',
          label: '名字',
          header: {
            type: 'el-input'
          },
          render: {
            type: 'el-input'
          }
        }
      ]
    },
    data: {
      type: Array,
      default: () => [
        {
          name: 'Heroking',
          age: 18
        }
      ]
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
      const otherColumn = this.needAddColumn ? (this.customColumns.length === 0 ? [this.templateColumn] : this.customColumns) : []
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
  watch: {
    data: {
      handler(v) {
        this.tableData = this.transformDataToCustomData()
      },
      immediate: true
    }
  },
  methods: {
    handleCellChange(e) {
      console.log(e)
    },
    validateData() {
      const validRowSuccess = this.handleAddRow({}, true)
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
      const latestRowData = this.tableData[this.tableData.length - 1]
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
