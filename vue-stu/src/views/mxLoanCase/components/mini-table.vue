<template>
  <el-table border :data="tableData" v-loading="loading || $attrs.loading" style="width: 100%">
    <el-table-column v-for="column in columns" :key="column.prop || column.label" v-bind="column"> </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'MiniTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    requestParams: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      tableData: [],
      loading: false
    }
  },
  methods: {
    getData() {
      this.loading = true
      const { id, name } = this.requestParams
      console.log('getTableData, requestParams: ', id, name)

      setTimeout(() => {
        this.tableData = [
          {
            name: name,
            age: 18,
            sex: '男'
          },
          {
            name: '李四' + id,
            age: 19,
            sex: '女'
          }
        ]
        this.loading = false
      }, 500)
    }
  },
  watch: {
    requestParams() {
      this.getData()
    }
  }
}
</script>
<style lang=""></style>
