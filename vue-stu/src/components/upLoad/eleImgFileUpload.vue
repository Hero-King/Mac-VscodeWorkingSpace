<template>
  <div>
    <el-upload
      ref="upload"
      class="avatar-uploader"
      action="/"
      :show-file-list="config.showFileList"
      :list-type="config.listType"
      :file-list="fileList"
      :multiple="config.multiple || false"
      :accept="config.accept"
      :on-error="handleAvatarError"
      :before-upload="beforeAvatarUpload"
      :http-request="uploadFile"
    >
      <div v-if="!config.showFileList&&fileList.length>0 && !fileList[0].url.includes('.pdf')">
        <img
          :src="fileList[0].url"
          :style="{height:config.height }"
          class="avatar"
        >
        <span class="change-tip">上传附件</span>
      </div>
      <div v-if="!config.showFileList&&fileList.length>0 && fileList[0].url.includes('.pdf')">
        <img
          :src="pdficon"
          :style="{height:config.height }"
          class="avatar"
        >
        <span class="change-tip">上传附件</span>
      </div>
      <div
        v-if="!config.showFileList&&fileList.length<1"
        style="position:relative;"
      >
        <i
          class="el-icon-plus avatar-uploader-icon"
          :style="{height:config.height,width:config.height,lineHeight:config.height }"
        />
        <span class="change-tip">上传附件</span>
      </div>
      <!-- <embed
          v-if="!config.showFileList&&fileList.length>0 && fileList[0].url.includes('.pdf')"
          :src="fileList[0].url"
          type="application/pdf"
          width="100%"
          height="100%"
        /> -->
      <i
        v-if="config.showFileList"
        class="el-icon-plus avatar-uploader-icon"
        :style="{height:config.height,width:config.height,lineHeight:config.height }"
      />
    </el-upload>
  </div>
</template>
<script>
const system = {
  baseUrl: '/cms-cloud-front',
  baseApi: '/api/cms-cloud-service',
  businessApi: '/api/business'
}
const pdficon = require('@/assets/images/pdficon.png')
export default {
  props: {
    config: {
      type: Object,
      default: {}
    },
    uploadSuccess: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      pdficon,
      imageUrl: '',
      fileList: this.config.fileList,
      accept: '.jpg,.jpeg,.png,.pdf,.JPG,.JPEG,。PNG,.PDF',
      fileUploadUrl: system.businessApi + '/file/newUpload'
    }
  },
  watch: {
    config: {
      handler(val) {
        this.fileList = val.fileList
      },
      deep: true
    }
  },
  methods: {
    async uploadFile(file) {
      console.log(file)
      const formData = new FormData()
      formData.append('file', file.file)

      formData.append('reportId', this.config.id)
      const { data, code, msg } = await this.$http2.post(this.fileUploadUrl, formData)
      if (code === 0) {
        this.fileList = [{ name: file.file.name, url: data.storePath, urlSha: data.sha256 }]
        this.$refs.upload.clearFiles()
        const obj = {
          fileList: this.fileList
        }
        this.$emit('uploadSuccess', obj)
        return this.$message.success('成功')
      } else {
        return this.$message.error(msg)
      }
    },
    handleAvatarError(err, file) {
      console.log(err, file)
    },
    beforeAvatarUpload(file) {
      const fileSize = this.config?.fileSize || 10
      if (file.size / (1024 * 1024) > fileSize) {
        this.$message.warning('文件大小不能超过10M')
        return false
      }
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}
.avatar {
  width: 100%;
  height: 112px;
  display: block;
}
/deep/.el-upload-list--picture-card .el-upload-list__item{
  width: 100%;
  height: 100%;

}
/deep/.el-upload input[type='file'] {
  display: none !important;
}
/deep/.el-upload--picture-card{
  line-height:0;
}
.change-tip {
  position: absolute;
  left: 0;
  top: 92px;
  display: inline-block;
  width: 100%;
  height: 30px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  background: #000;
  z-index: 20;
  opacity: 0.4;
  cursor: pointer;
}
</style>
