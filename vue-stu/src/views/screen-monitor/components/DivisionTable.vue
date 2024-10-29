<template>
  <VisualTable
    :table-data="data"
    height="100%"
    class="division-table-wrap"
    v-bind="$attrs"
  >
    <el-table-column
      :prop="rowKey"
      align="center"
    >
      <template slot="header">
        <div
          v-show="data.length > 0"
          ref="cutHead"
          class="flex h100 spaceAround"
        >
          <span class="rowtitle">{{ rowTitle }}</span>
          <span class="coltitle">{{ colTitle }}</span>
        </div>
        <div
          v-show="data.length > 0"
          ref="rotateDiv"
          class="w100 h100 cutline"
        />
      </template>
    </el-table-column>
    <el-table-column
      v-for="i in columns"
      :key="i"
      :label="i"
      :prop="i"
      align="center"
    >
      <template slot-scope="scope">
        <div :class="[scope.row[i] >= 100 ? 'bggreen' : [scope.row[i]] > 90 ? 'bgyellow' : 'bgred']">
          {{ scope.row[i] }}
        </div>
      </template>
    </el-table-column>
  </VisualTable>
</template>

<script>
import VisualTable from './VisualTable.vue'
/**
 * 支持自定义数据列 的表格
 */
export default {
  name: 'DivisionTable',
  components: {
    VisualTable
  },
  props: {
    colTitle: {
      type: String,
      default: ''
    },
    rowTitle: {
      type: String,
      default: ''
    },
    colKey: {
      type: String,
      required: true
    },
    rowKey: {
      type: String,
      required: true
    },
    cellKey: {
      type: String,
      required: true
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      data: [],
      columns: []
    }
  },
  watch: {
    tableData: {
      deep: false,
      handler(val, oldVal) {
        console.log(val)
        const tableDataMap = new Map()
        const columnsT = new Set()
        val.forEach((i) => {
          const rowTag = i[this.rowKey]
          const colLabel = i[this.colKey]
          if (rowTag && colLabel) {
            if (!tableDataMap.has(rowTag)) {
              tableDataMap.set(rowTag, { [this.rowKey]: rowTag })
            }
            const rowData = tableDataMap.get(rowTag)
            columnsT.add(colLabel)
            rowData[colLabel] = i[this.cellKey]
          }
        })
        this.data = Array.from(tableDataMap.values())
        this.columns = Array.from(columnsT)
      }
    }
  },
  updated() {
    setTimeout(() => {
      const { rotateDiv, cutHead } = this.$refs
      if (cutHead.clientWidth !== 0) {
        rotateDiv.style.transform = `rotate(${(Math.atan(cutHead.clientHeight / cutHead.clientWidth) * 180) / Math.PI}deg)`
      }
    }, 50)
  }
}
</script>

<style lang="scss" scoped>
.division-table-wrap {
  ::v-deep .el-table__header-wrapper > table > thead > tr > th:first-child {
    padding: 0;
    .cell {
      padding: 0;
      position: relative;
      overflow: hidden;
    }
  }
  ::v-deep .el-table__body-wrapper {
    .cell {
      padding: 0;
      line-height: unset;
      height: 100%;
    }
  }
  .rowtitle {
    line-height: initial;
    align-self: flex-end;
  }
  .coltitle {
    line-height: initial;
    align-self: flex-start;
  }
  .cutline {
    position: absolute;
    top: -50%;
    width: 300%;
    height: 100%;
    left: -100%;
    transform-origin: center bottom;
    // transform: rotate(15deg);
    border-bottom: 1px solid #50bef6;
  }
  .bggreen {
    background-color: #1af476;
  }
  .bgred {
    background-color: #f53010;
  }
  .bgyellow {
    background-color: #c5871e;
  }
}
</style>
