<template>
  <div>
    <div class="module">
      <h3>单文件上传</h3>
      <el-upload
        class="upload-demo"
        list-type="picture"
        :action="action"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-success="handleSuccess"
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary" @click="handleClick"> 点击上传 </el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>

    <!-- <div class="module">
      <el-button type="primary" @click="preview">点我预览</el-button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'UploadStu',
  data() {
    return {
      action: 'https://www.heroking.top:9999/api/file/upload',
      fileList: [
        {
          name: '11.jpg',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          name: '12.jpg',
          url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }
      ]
    }
  },
  computed: {
    isUploadExceed() {
      return this.fileList.length === 1
    }
  },
  methods: {
    beforeUpload() {
      return !this.isUploadExceed
    },
    handleClick(e) {
      if (this.isUploadExceed) {
        e.preventDefault()
        e.stopPropagation()
        this.$message.error('单文件上传哦')
      }
    },
    handleSuccess(response, file, fileList) {
      this.fileList = fileList
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
      this.fileList = fileList
    },
    handlePreview(file) {
      this.$MyImagePreview({ fileList: this.fileList })
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>
