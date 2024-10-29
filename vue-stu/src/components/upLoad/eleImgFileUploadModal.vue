<template>
  <el-dialog
    v-if="uploadVisible"
    :title="config.title"
    :visible="uploadVisible"
    append-to-body
    width="30%"
    @close="cancel"
  >
    <el-upload
      ref="upload"
      class="upload-demo"
      :action="action"
      :http-request="httpRequest"
      :on-remove="handleRemove"
      :on-success="handleAvatarSuccess"
      :on-error="handleAvatarError"
      v-loading="loading"
      :before-upload="beforeAvatarUpload"
      :on-change="handleChange"
      :show-file-list="config.showFileList"
      :list-type="config.listType"
      :multiple="config.multiple || false"
      :accept="config.accept"
      :file-list="fileList"
      :auto-upload="config.autoUpload"
      :limit="config.limit"
    >
      <el-button
        slot="trigger"
        size="small"
        type="primary"
      >选取文件</el-button>
      <el-button
        class="submit"
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
      >确定上传{{ shows }}</el-button>
      <div
        v-if="config.tips"
        slot="tip"
        class="el-upload__tip"
      >{{ config.tips }}</div>
    </el-upload>
  </el-dialog>
</template>
<script>
const system = {
  baseUrl: '/cms-cloud-front',
  baseApi: '/api/cms-cloud-service',
  businessApi: '/api/business'
}
// import {fileUpload} from '@/services/apis/common';
import axios from 'axios'

export default {

  props: {
    config: {
      type: Object,
      default: { title: '上传附件',
        showFileList: false, // 是否显示已上传文件列表
        multiple: false, // 是否支持多文件
        // accept:".jpg, .jpeg, .png, .bmp, .svg",//上传类型
        accept: '.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.doc,.docx,.PDF,.js,.csv,.xlsx,.xls,.ppt,.pptx',
        fileList: [],
        listType: 'picture', // 文件列表的类型
        autoUpload: true
      }
    },
    uploadVisible: {
      type: Boolean
    },
    uploadSuccess: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      //  config:{
      //     showFileList:false,//是否显示已上传文件列表，ture上传多张图片，false上传一张图片
      //     multiple: false,//是否支持多文件
      //     limit:1//限制可选个数
      //     accept:".jpg, .jpeg, .png, .bmp, .svg",//上传类型
      //     fileList:[],//文件列表
      //     listType:'picture-card',//文件列表的类型
      //     height:"122px",//图标大小
      //   },

      // imageUrl: '',
      // action:system.businessApi+"/poros-oss/file/upload",
      action: system.businessApi + '/eventfile/upload',
      fileList: this.config.fileList,
      fileStatusList: [],
      accept: '.css,.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.doc,.docx,.PDF,.js,.csv,.xlsx,.xls,.ppt,.pptx',
      loading: false
    }
  },
  computed: {
  },
  watch: {
    config: {
      handler(val) {
        // if(val.eventId){
        if (val.eventType && val.eventType == 1) { // eventType 仅用于异常事件添加附件，因路径不同作此判断
          this.action = `${system.businessApi}/eventfile/upload`
        } else {
          this.action = `${system.businessApi}/poros-oss/file/upload`
        }
        this.fileList = val.fileList
      },
      immediate: true,
      deep: true
    },
    uploadVisible: {
      handler(val) {
        this.fileStatusList = []
      }
    }
  },
  methods: {
    // param是自带参数。 this.$refs.upload.submit() 会自动调用 httpRequest方法.在里面取得file
    httpRequest(param) {
      this.loading = true
      const fileObj = param.file // 相当于input里取得的files
      const fd = new FormData()// FormData 对象
      fd.append('file', fileObj)// 文件对象
      // if(this.config.eventId){
      //   fd.append('eventId', this.config.eventId)// 文件对象
      // }
      if (this.config.eventType == '1' && this.config.eventId) {
        fd.append('eventId', this.config.eventId)// 文件对象
      }
      const url = this.action
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios.post(url, fd, config).then(res => {
        if (res.data.code == 0) {
          this.loading = false
          // this.$message.success("上传成功！")
          this.handleAvatarSuccess(res.data, param.file)
        } else {
          this.loading = false
          this.$message.warning('上传失败！')
        }
      })
    },
    submitUpload() {
      // 手动上传；auto-upload=false
      this.$refs.upload.submit()
    },
    handleAvatarSuccess(response, file) {
      // 选中即上传 auto-upload=true
      if (response.code == 0) {
        if (!this.config.showFileList) {
          this.fileList = [{ name: file.name, url: response.data }]
          this.$refs.upload.clearFiles()
        } else {
          this.fileList.push({ name: file.name, url: response.data })
        }
        const obj = {
          status: 'upload',
          fileList: this.fileList,
          response: response,
          file: file
        }
        this.$emit('uploadSuccess', obj, this.config)
      }
    },
    cancel() {
      this.uploadVisible = false
      this.$emit('closeUpload')
    },
    handleAvatarError(err, file) {
      console.log(err, file)
    },
    handleRemove(response, fileList) {
      if (response && response.status === 'success') {
        const arr = []
        fileList.forEach(item => {
          arr.push({ name: item.name, url: item.url })
        })
        this.fileList = arr
        // this.fileStatusList=arr;
        const obj = {
          status: 'upload',
          fileList: arr,
          response: response
        }
        this.$emit('deleteSuccess', obj) // 如果已经提交到服务端再次删除通过此提交给父组件处理
      }
    },
    handleChange(file) {
      // 非立刻上传时 用此进行监听
      this.fileStatusList.push(file)
      const fileSize = this.config?.fileSize || 10
      if (file.size / (1024 * 1024) > fileSize) {
        this.$message.warning('文件大小不能超过10M')
        return false
      }
    },
    beforeAvatarUpload(file) {
      // 立刻上传时有效，非立刻上传时失效 用handleChange进行监听
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
.submit{

}
</style>
