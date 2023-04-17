<template>
  <span class="el-image-viewer__btn el-image-viewer__close el-image-viewer__download" @click="download">
    <i class="el-icon-download" />
  </span>
</template>
<script>
import { saveAs } from 'file-saver'
export default {
  name: 'DownloadIcon',
  methods: {
    download() {
      let par = this.$parent
      const file = par.fileList[par.index]
      saveAs(file.url, file.name)
    }
  }
}
</script>
<style lang="css" scoped>
.el-image-viewer__download {
  top: 90px;
}
</style>
