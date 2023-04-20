<template>
  <div>
    <el-upload
      ref="upload"
      class="avatar-uploader"
      :action="action"
      :show-file-list="config.showFileList"
      :list-type="config.listType"
      :file-list="fileList"
      :multiple="config.multiple || false"
      :accept="config.accept"
      :on-success="handleAvatarSuccess"
      :on-error="handleAvatarError"
      :before-upload="beforeAvatarUpload"
      :on-remove="handleRemove"
    >
      <div v-if="!config.showFileList && fileList.length > 0 && fileList[0].url != ''">
        <img :src="fileList[0].url" :style="{ height: config.height }" class="avatar" />
        <span class="change-tip">替换图片</span>
      </div>
      <i
        v-if="!config.showFileList && fileList[0].url == ''"
        class="el-icon-plus avatar-uploader-icon"
        :style="{ height: config.height, width: config.height, lineHeight: config.height }"
      ></i>
      <i
        v-if="config.showFileList"
        class="el-icon-plus avatar-uploader-icon"
        :style="{ height: config.height, width: config.height, lineHeight: config.height }"
      ></i>
    </el-upload>
  </div>
</template>
<script>
const system = {
  baseUrl: '/cms-cloud-front',
  baseApi: '/api/cms-cloud-service',
  businessApi: '/api/business'
}
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
      /**
       * config:{
          showFileList:false,//是否显示已上传文件列表，ture上传多张图片，false上传一张图片
          multiple: false,//是否支持多文件
          accept:".jpg, .jpeg, .png, .bmp, .svg",//上传类型
          fileList:[],//文件列表
          listType:'picture-card',//文件列表的类型
          height:"122px",//图标大小
        },
       */
      imageUrl: '',
      action: system.businessApi + '/poros-oss/file/upload',
      fileList: [
        {
          name: '',
          url: ''
        }
      ],
      accept:
        '.css,.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.doc,.docx,.PDF,.js,.csv,.xlsx,.xls,.ppt,.pptx'
    }
  },
  mounted() {
    this.fileList = this.config.fileList[0]?.url
      ? this.config.fileList
      : [
          {
            name: '',
            url: ''
          }
        ]
  },
  watch: {
    config: {
      handler(val) {
        this.fileList = val.fileList[0]?.url
          ? this.config.fileList
          : [
              {
                name: '',
                url: ''
              }
            ]
      },
      deep: true
    }
  },
  methods: {
    handleAvatarSuccess(response, fileList) {
      if (response.code == 0) {
        if (!this.config.showFileList) {
          this.fileList = [{ name: '', url: response.data }]
          this.$refs.upload.clearFiles()
        } else {
          this.fileList.push({ name: '', url: response.data })
        }
        const obj = {
          status: 'upload',
          fileList: this.fileList,
          response: response
        }
        this.$emit('uploadSuccess', obj, this.config)
      }
    },
    handleAvatarError(err, file) {
      console.log(err, file)
    },
    handleRemove(response, fileList) {
      if (response && response.status === 'success') {
        let arr = []
        fileList.forEach((item) => {
          arr.push({ name: '', url: item.url })
        })
        this.fileList = arr
        const obj = {
          status: 'upload',
          fileList: arr,
          response: response
        }
        this.$emit('uploadSuccess', obj)
      }
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
</style>
