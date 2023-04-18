<template>
  <div>
    <div v-if="!editable" class="dict-select noEdit">
      <template v-if="isComplexCom"> {{ translatedText }}</template>
      <template v-else-if="comType === 'upload'">
        <el-upload
          :disabled="true"
          :before-upload="beforeAvatarUpload"
          :on-remove="handleRemove"
          :file-list="$attrs.value || []"
          :on-success="uploadSuccess"
          :on-preview="handlePreview"
          :size="size"
          v-bind="$attrs"
          v-on="$listeners"
        >
          <slot></slot>
        </el-upload>
      </template>
      <template v-else>
        {{ $attrs.value }}
      </template>
    </div>
    <!-- 可编辑部分 -->
    <div v-else class="dict-select canEdit">
      <template v-if="comType === 'select'">
        <el-select v-bind="$attrs" v-on="$listeners" :size="size" :popper-append-to-body="false">
          <el-option
            v-for="item in viewOptions"
            :label="item[labelKey] == void 0 ? item : item[labelKey]"
            :value="item[valueKey] == void 0 ? item : item[valueKey]"
            :key="_forKey ? item[_forKey] : item"
          >
            <slot :optItem="item"></slot>
          </el-option>
        </el-select>
      </template>
      <template v-else-if="comType === 'checkbox'">
        <el-checkbox-group v-bind="$attrs" v-on="$listeners" :size="size">
          <el-checkbox
            v-for="item in viewOptions"
            :key="_forKey ? item[_forKey] : item"
            :label="item[valueKey] == void 0 ? item : item[valueKey]"
            :disabled="item.disabled"
          >
            <slot :optItem="item">
              {{ item[labelKey] == void 0 ? item : item[labelKey] }}
            </slot>
          </el-checkbox>
        </el-checkbox-group>
      </template>
      <template v-else-if="comType === 'checkboxButton'">
        <el-checkbox-group v-bind="$attrs" v-on="$listeners" :size="size">
          <el-checkbox-button
            v-for="item in viewOptions"
            :key="_forKey ? item[_forKey] : item"
            :label="item[valueKey] == void 0 ? item : item[valueKey]"
            :disabled="item.disabled"
          >
            <slot :optItem="item">
              {{ item[labelKey] == void 0 ? item : item[labelKey] }}
            </slot>
          </el-checkbox-button>
        </el-checkbox-group>
      </template>
      <template v-else-if="comType === 'radio'">
        <el-radio-group v-bind="$attrs" v-on="$listeners" :size="size">
          <el-radio
            v-for="item in viewOptions"
            :key="_forKey ? item[_forKey] : item"
            :label="item[valueKey] == void 0 ? item : item[valueKey]"
            :disabled="item.disabled"
          >
            <slot :optItem="item">
              {{ item[labelKey] == void 0 ? item : item[labelKey] }}
            </slot>
          </el-radio>
        </el-radio-group>
      </template>
      <template v-else-if="comType === 'radioButton'">
        <el-radio-group v-bind="$attrs" v-on="$listeners" :size="size">
          <el-radio-button
            v-for="item in viewOptions"
            :key="_forKey ? item[_forKey] : item"
            :label="item[valueKey] == void 0 ? item : item[valueKey]"
            :disabled="item.disabled"
          >
            <slot :optItem="item">
              {{ item[labelKey] == void 0 ? item : item[labelKey] }}
            </slot>
          </el-radio-button>
        </el-radio-group>
      </template>
      <!-- upload -->
      <template v-else-if="comType === 'upload'">
        <el-upload
          :before-upload="beforeAvatarUpload"
          :on-remove="handleRemove"
          :file-list="$attrs.value || []"
          :on-success="uploadSuccess"
          :on-preview="handlePreview"
          :size="size"
          v-bind="$attrs"
          v-on="$listeners"
        >
          <slot>
            <el-button size="small">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">{{ $attrs.uploadTip || '' }}</div>
          </slot>
        </el-upload>
      </template>
      <template v-else>
        <component :is="comType" v-bind="$attrs" v-on="$listeners" :size="size">
          <slot></slot>
        </component>
      </template>
    </div>

    <el-image class="dict-select-img" v-if="imgUrl" ref="image" :preview-src-list="[imgUrl]"></el-image>
  </div>
</template>
<script>
const complexComs = ['select', 'checkbox', 'checkboxButton', 'radio', 'radioButton']
import { saveAs } from 'file-saver'
export default {
  inheritAttrs: false,
  name: 'DictSelect',
  props: {
    // 隐藏props: uploadTip fileSize
    innerPreview: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'small'
    },
    comType: {
      type: String,
      default: 'select'
    },
    options: {
      type: Array
    },
    dictUrl: String,
    labelKey: {
      type: String,
      default: 'label'
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    forKey: {
      type: String
    },
    resultKey: {
      type: String,
      default: 'data'
    },
    methods: {
      type: String,
      default: 'get'
    },
    params: {
      type: Object,
      default: () => ({})
    },
    resultFormat: Function,
    editable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      imgUrl: '',
      innerOptions: []
    }
  },
  computed: {
    _forKey() {
      return this.forKey || this.valueKey
    },
    viewOptions() {
      return this.options ?? this.innerOptions
    },
    isComplexCom() {
      return complexComs.includes(this.comType)
    },
    // 绑定的值是简单类型
    bindValueIsSimple() {
      let { value } = this.$attrs
      return typeof value !== 'object' && typeof value !== 'function'
    },
    translatedText() {
      if (this.editable) {
        return ''
      }
      if (this.bindValueIsSimple) {
        let item = this.viewOptions.find((i) => i[this.valueKey] === this.$attrs.value)
        return item?.[this.labelKey] ?? this.$attrs.value
      } else {
        return ''
      }
    }
  },
  created() {
    if (this.viewOptions?.length == 0 && this.isComplexCom && this.dictUrl) {
      this.getDicts()
    }
  },
  methods: {
    checkImgType(name) {
      if (!/\.(bmp|jpg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp|jpeg)$/.test(name.toLowerCase())) {
        return false
      } else {
        return true
      }
    },
    getDicts() {
      const { dictUrl, params, methods } = this
      this.$http[methods.toLowerCase()](dictUrl, params)
        .then((res) => {
          if (res?.code === 0) {
            let result = this.resultFormat ? this.resultFormat(res) : res[this.resultKey]
            this.innerOptions = result
            // let cloneData = JSON.parse(JSON.stringify(result))
            this.$emit('update:options', this.innerOptions)
            this.$emit('getSuccess', this.innerOptions)
          } else {
            throw res.msg || res.message
          }
        })
        .catch((err) => {
          this.$emit('update:options', this.innerOptions)
        })
    },
    handleRemove(file, fileList) {
      this.$emit('input', fileList)
    },
    uploadSuccess(res, file, fileList) {
      if (res?.code == 0) {
        this.$emit('input', fileList)
      } else {
        this.$message.error('文件上传失败')
      }
    },
    beforeAvatarUpload(file) {
      const fileSize = this.attrs?.fileSize || 10
      if (file.size / (1024 * 1024) > fileSize) {
        this.$message.warning(`文件大小不能超过${fileSize}M`)
        return false
      }
    },
    handlePreview(file) {
      console.log(file, 'file')
      if (this.innerPreview) {
        // TODO 改造
        if (this.checkImgType(file.name)) {
          this.imgUrl = file.url || file.response?.data?.storePath
          // this.imgUrl = 'https://test.carbonminip.getech.cn/oss/test/5d75bef9/activemq_manage.jpg'
          this.$nextTick(() => {
            this.$refs.image.clickHandler()
          })
        } else {
          saveAs(file.url || file.response?.data?.storePath, file.name)
          // saveAs('https://test.carbonminip.getech.cn/oss/test/303f4f59/工单列表.xls', file.name)
        }
      } else if (typeof this.onPreview == 'function') {
        this.onPreview(file)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.dict-select-img {
  display: none;
}
.dict-select {
  .el-select {
    width: 100%;
  }
  // 取消ElUpload文件列表动画
  /deep/ .el-upload-list__item {
    transition: none !important;
  }
}
.noEdit {
  /deep/.el-upload--text {
    display: none;
  }
  /deep/ .el-upload-list__item:first-child {
    margin-top: 5px;
  }
}
</style>
