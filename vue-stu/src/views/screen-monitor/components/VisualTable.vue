<template>
  <el-table
    class="s-visual-table-wrap"
    :data="tableData"
    stripe
    border
    v-bind="$attrs"
  >
    <slot />
  </el-table>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
@function px2vh($value) {
  @return $value/1080 * 100vh;
}
.s-visual-table-wrap {
  width: 100%;
  border: none;
  background-color: transparent;
  border-right: none;
  border-bottom: none;
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
  ::v-deep .el-table__header-wrapper {
    background: rgba(109, 150, 255, 0.6);
    border: 1px solid #52ccff;
    .el-table__header {
      thead {
        tr {
          background-color: transparent;

          th {
            height: px2vh(48);
            padding: 0;
            background-color: transparent;
            border-bottom: none;
            border-right: 1px solid #52ccff;
            .cell {
              height: 100%;
              line-height: px2vh(48);
              font-size: px2vh(24);
              color: #92f6ff;
            }
          }
        }
      }
    }
  }
  ::v-deep .el-table__body-wrapper {
    background: transparent;
    .el-table__body {
      border-left: 1px solid #3275f2;
      .el-table__row {
        background: rgba(52, 120, 255, 0.1);
        &.el-table__row--striped {
          background: rgba(52, 120, 255, 0.3);
        }
        td {
          background-color: transparent;
          padding: 0;
          height: px2vh(54);
          line-height: px2vh(54);
          color: #fff;
          font-size: px2vh(24);
          border-bottom: 1px solid #3275f2;
          border-right: 1px solid #3275f2;
          .cell {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }

  ::v-deep .el-table__empty-block {
    border: 1px solid #52ccff;
    border-top: none;
    .el-table__empty-text {
      font-size: px2vh(26);
      color: #fff;
    }
  }
}
</style>
