<template>
  <div>
    <el-upload
      ref="upload"
      class="avatar-uploader"
      action="/"
      :style="{height:height}"
      :show-file-list="config.showFileList"
      :list-type="config.listType"
      :file-list="fileList"
      :multiple="config.multiple || false"
      :accept="config.accept"
      :on-error="handleAvatarError"
      :before-upload="beforeAvatarUpload"
      :http-request="uploadFile"
    >
      <i
        v-if="fileList.length<=0"
        class="el-icon-upload2"
      />
      <p
        v-for="item in fileList"
        :key="item.url"
        class="avatar-p"
      >
        {{ item.name }}
      </p>
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
      default: () => { }
    }
  },
  data() {
    return {
      pdficon,
      imageUrl: '',
      fileList: this.config.fileList,
      accept: '.pdf,.JPG,.BMP,.doc,.docx,.PDF,.csv,.xlsx,.xls,.ppt,.pptx',
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
      const formData = new FormData()
      formData.append('file', file.file)
      formData.append('reportId', this.config.id)
      const { data, code, msg } = await this.$http2.post(this.fileUploadUrl, formData)
      console.log(data)

      if (code === 0) {
        this.fileList = [{ name: file.file.name, url: data.storePath, urlSha: data.sha256, id: data.id }]
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
  border: none;
  // background: #fff;
  background: inherit;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  text-align: left;
}
.avatar-p{
  width: 100%;
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: 4px;
  margin-left: 10px;
  color: #4e60f6;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.el-icon-upload2{
  margin-left: 10px;
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

/deep/.el-upload-list--picture-card .el-upload-list__item {
  width: 100%;
  height: 100%;

}

/deep/.el-upload input[type='file'] {
  display: none !important;
}

/deep/.el-upload--picture-card {
  line-height: 0;
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
/deep/.el-upload--picture-card i {
    color: #8c939d;
    font-size: 20px;
    margin-top: 10px;
}
</style>
