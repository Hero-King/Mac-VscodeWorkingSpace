<template>
  <div>
    <el-row>
      <el-col
        :span="8"
        class="left-wrap"
      >
        <h4>设备图片</h4>
        <EleImgUpload
          title="请上传设备图片"
          :config="uploadConf"
          @uploadSuccess="uploadSuccess"
        />

        <h4 class="mt-20">设备二维码</h4>
        <div class="qr-wrap textCenter">
          <el-image
            style="height: 100px; width: 100%"
            fit="scale-down"
            :src="deviceInfo.qrcodeUrl"
            :preview-src-list="[deviceInfo.qrcodeUrl]"
          />
        </div>
      </el-col>

      <p-form-model
        ref="ruleForm"
        layout="inline"
        class="let-form-horizontal"
        :model="ruleForm"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        :rules="rules"
      >
        <!-- 设备类型 start -->
        <el-col :span="8">
          <p-form-model-item
            has-feedback
            label="设备类型"
            prop="modelMark"
          >
            <p-select
              v-model="ruleForm.modelMark"
              class="form-item-width"
              placeholder="请选择设备类型"
              allow-clear
              :disabled="true"
            >
              <p-select-option
                v-for="deviceType in deviceTypes"
                :key="deviceType.modelMark"
                :value="deviceType.modelMark"
              >
                {{ deviceType.modelName }}
              </p-select-option>
            </p-select>
          </p-form-model-item>
        </el-col>
        <!-- 设备类型 end -->
        <!-- 设备名称 start -->
        <el-col :span="8">
          <p-form-model-item
            has-feedback
            label="设备名称"
            prop="deviceName"
          >
            <p-input
              v-model="ruleForm.deviceName"
              class="form-item-width"
              placeholder="请输入设备名称"
              :disabled="!editable"
            />
          </p-form-model-item>
        </el-col>
        <!-- 设备名称 end -->

        <el-col :span="8">
          <p-form-model-item
            has-feedback
            label="设备标识"
            prop="deviceMark"
          >
            <p-input
              v-model="ruleForm.deviceMark"
              :disabled="true"
              class="form-item-width"
              placeholder="请输入设备标识"
            />
          </p-form-model-item>
        </el-col>
        <el-col
          v-for="item in paramList"
          :key="item.paramMark"
          :span="8"
        >
          <p-form-model-item
            has-feedback
            :label="item.paramName"
            :style="item.paramValType === 'dic' ? 'width:32%' : null"
          >
            <p-date-picker
              v-if="item.paramValType === 'date'"
              :id="item.id"
              v-model="item.paramValue"
              :mode="item.paramValType"
              :disabled="!editable"
              format="yyyy-MM-DD"
              :value="item.paramValue || null"
              :name="item.paramMark"
              class="form-item-width"
              :placeholder="item.paramName"
            />
            <p-select
              v-else-if="item.paramValType === 'dic'"
              v-model="item.paramValue"
              allow-clear
              :disabled="!editable"
            >
              <p-select-option
                v-for="selectItem in item.selectList"
                :key="selectItem.paramValue"
                :value="selectItem.paramValue"
              >
                {{ selectItem.paramValueName }}
              </p-select-option>
            </p-select>
            <el-input
              v-else
              :id="item.id"
              v-model="item.paramValue"
              class="form-item-width"
              :name="item.paramMark"
              :placeholder="item.unit ? '单位（' + item.unit + '）' : ''"
              readonly
              :disabled="!editable"
              onfocus="this.removeAttribute('readonly')"
            />
          </p-form-model-item>
        </el-col>
      </p-form-model>
    </el-row>
    <div
      v-if="editable"
      class="textCenter"
    >
      <el-button
        type="primary"
        size="small"
        @click="onOk"
      >保存</el-button>
      <el-button
        style="margin-left: 20px"
        size="small"
        @click="onCancel"
      >取消</el-button>
    </div>
  </div>
</template>
<script>
import { resourceRelationDevice } from '@/api/devops-center/deviceManage'
import { getDeviceParamInfo, saveDevice } from '@/api/devops-center/deviceManage'
import DictSelect from '@/components/DictSelect'
import EleImgUpload from '@/components/upLoad/eleImgUpload'

const commonValidator = (text, maxLen) => (rule, value, cb) => {
  maxLen || (maxLen = 16)
  if (value || value === '0' || value === 0) {
    if (value.length > maxLen) {
      cb(text + `不能超过${maxLen}个字符`)
    } else {
      cb()
    }
  } else {
    cb(text + '不能为空')
  }
}

export default {
  name: 'EquipmentBaseInfo',
  components: {
    DictSelect,
    EleImgUpload
  },
  props: {
    deviceInfo: Object,
    editable: {
      type: Boolean,
      default: false
    },
    deviceTypes: Array,
    paramList: {
      default: () => []
    }
  },
  data() {
    this.paramListBak = []
    return {
      uploadConf: {
        showFileList: false,
        accept: '.jpg,.jpeg,.png,.pdf,.JPG,.JPEG,.PNG',
        fileList: [],
        listType: 'picture-card',
        height: '122px'
      },
      ruleForm: {
        modelMark: undefined,
        modelName: null,
        deviceName: null,
        deviceMark: null,
        paramList: []
      },
      // 存放自定义字段
      paramList: [],
      rules: {
        modelMark: [
          {
            required: true,
            validator: commonValidator('设备类型', 50),
            trigger: ['change', 'blur']
          }
        ],
        deviceName: [
          {
            required: true,
            validator: commonValidator('设备名称', 50),
            trigger: ['change', 'blur']
          }
        ],
        deviceMark: [
          {
            required: true,
            validator: commonValidator('设备标识', 50),
            trigger: ['change', 'blur']
          }
        ]
      }
    }
  },
  watch: {
    deviceInfo: {
      handler(val) {
        console.log(val.id, 'deviceInfo.id')
        const { child, children, ...rest } = val
        this.ruleForm = JSON.parse(JSON.stringify(rest))
        this.initData()
      },
      deep: true,
      immediate: true
    }
  },
  created() {},
  methods: {
    initData() {
      this.setDeviceImg()
      this.initDeviceParamList()
    },
    setDeviceImg() {
      this.uploadConf.fileList = [{ name: '', url: this.deviceInfo.resourceUrl }]
    },
    uploadSuccess(obj) {
      this.uploadConf.fileList = [{ url: obj.response.data }]
    },
    initDeviceParamList() {
      getDeviceParamInfo(this.deviceInfo)
        .then((res) => {
          if (res?.code === 0) {
            this.paramList = res.data
            this.paramListBak = JSON.parse(JSON.stringify(res.data))
          } else {
            throw ''
          }
        })
        .catch((err) => {
          this.paramList = []
          this.paramListBak = []
        })
    },
    onCancel() {
      this.ruleForm = JSON.parse(JSON.stringify(this.deviceInfo))
      this.paramList = JSON.parse(JSON.stringify(this.paramListBak))
      this.setDeviceImg()
      this.$refs.ruleForm.clearValidate()
    },
    onOk() {
      const paramList = []
      for (const paramInfo of this.paramList) {
        const elementsByName = document.getElementsByName(paramInfo.paramMark)[0]
        const paramMark = elementsByName.name
        const paramValue = elementsByName.value
        const id = paramInfo.id

        const param = {
          id: id,
          paramMark: paramMark,
          paramValue: paramValue,
          paramName: paramInfo.paramName,
          paramValType: paramInfo.paramValType,
          unit: paramInfo.unit
        }
        paramList.push(param)
      }
      this.ruleForm.paramList = paramList

      const url = this.uploadConf.fileList[0]?.url
      if (url !== this.deviceInfo.resourceUrl) {
        resourceRelationDevice({ deviceId: this.deviceInfo.id, resourceUrl: url }).then((res) => {
          if (res?.code == 0) {
          } else {
            this.$message.error('图片信息保存失败,请重试')
          }
        })
      }

      saveDevice(this.ruleForm).then((res) => {
        this.$refs.ruleForm.clearValidate()
        if (res.code === 0) {
          this.$message.success('保存成功')
          if (this.ruleForm.deviceName !== this.deviceInfo.deviceName) {
            this.$emit('reload')
          } else {
            this.initDeviceParamList()
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.el-tabs {
  .el-tabs__item {
    width: 200px;
  }
}

.left-wrap {
  padding: 0 20px;
}

.img-wrap {
  // width: 200px;
  position: relative;
  > img {
    width: 100%;
  }
  .modal {
    display: none;
    &:after {
      content: '+';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &:hover {
    .modal {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      color: #eee;
      background: rgba(0, 0, 0, 0.5);
      cursor: pointer;
      font-size: 24px;
      font-style: normal;
    }
  }
}

.let-form-horizontal {
  .poros-form-item {
    display: block;
    margin: 0 0 24px;
    line-height: 1.5;
    list-style: none;
    /deep/ .has-feedback {
      display: unset;
    }
  }
}
</style>
