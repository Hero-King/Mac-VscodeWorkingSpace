<template>
  <el-button size="mini" v-bind="$attrs" @click="handleExport"><slot>导出</slot></el-button>
</template>
<script>
export default {
  name: 'ExportButton',
  props: {
    getQueryParam: {
      type: Function,
      default: () => ({})
    },
    methods: {
      type: String,
      default: 'post'
    },
    exportUrl: {
      type: String,
      required: true
    },
    fileName: {
      type: String,
      default: '导出'
    }
  },
  methods: {
    handleExport() {
      let param = this.getQueryParam()
      delete param.limit
      delete param.pageNo
      delete param.total
      this.$api[this.methods.toLowerCase()](this.exportUrl, param).then((res) => {
        let fileType = 'application/octet-stream;charset=UTF-8'
        // this.$tool.downloadFile({ data: res }, fileType, this.fileName)
        this.$emit('exportSuccess')
      })
    }
  }
}
</script>
<style lang=""></style>
