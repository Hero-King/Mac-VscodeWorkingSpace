<template>
  <el-upload
    :action="action"
    :before-upload="beforeAvatarUpload"
    :on-remove="handleRemove"
    :file-list="_fileList"
    :on-success="uploadSuccess"
    v-bind="$attrs"
  >
    <slot>
      <el-button size="small">
        点击上传
      </el-button>
      <div
        slot="tip"
        class="el-upload__tip"
      >
        支持拓展名: .rar .zip .docx .pdf .jpg...
      </div>
    </slot>
  </el-upload>
</template>
<script>
const system = {
  baseUrl: '/cms-cloud-front',
  baseApi: '/api/cms-cloud-service',
  businessApi: '/api/business'
}
export default {
  name: 'AttachmentUpload',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    this.action = system.businessApi + '/file/newUpload'
    return {}
  },
  computed: {
    _fileList: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      this._fileList = fileList
    },
    uploadSuccess(res, file, fileList) {
      if (res?.code == 0) {
        this._fileList = fileList
      } else {
        this.$message.error('文件上传失败')
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
<style lang=""></style>
