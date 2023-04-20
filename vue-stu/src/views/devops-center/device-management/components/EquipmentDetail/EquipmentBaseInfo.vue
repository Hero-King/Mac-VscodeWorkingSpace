<template>
  <div>
    <el-row>
      <el-col :span="8" class="left-wrap">
        <h4>设备图片</h4>
        <EleImgUpload title="请上传设备图片" @uploadSuccess="uploadSuccess" :config="uploadConf" />

        <h4 class="mt-20">设备二维码</h4>
        <div class="qr-wrap textCenter">
          <el-image
            style="height: 100px; width: 100%"
            fit="scale-down"
            :src="deviceInfo.qrcodeUrl"
            :preview-src-list="[deviceInfo.qrcodeUrl]"
          >
          </el-image>
        </div>
      </el-col>

      <p-form-model
        ref="ruleForm"
        layout="inline"
        class="let-form-horizontal"
        :model="ruleForm"
        :labelCol="{ span: 6 }"
        :wrapperCol="{ span: 16 }"
        :rules="rules"
      >
        <!-- 设备类型 start -->
        <el-col :span="8">
          <p-form-model-item has-feedback label="设备类型" prop="modelMark">
            <p-select
              class="form-item-width"
              placeholder="请选择设备类型"
              allow-clear
              :disabled="true"
              v-model="ruleForm.modelMark"
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
          <p-form-model-item has-feedback label="设备名称" prop="deviceName">
            <p-input
              class="form-item-width"
              placeholder="请输入设备名称"
              v-model="ruleForm.deviceName"
              :disabled="!editable"
            />
          </p-form-model-item>
        </el-col>
        <!-- 设备名称 end -->

        <el-col :span="8">
          <p-form-model-item has-feedback label="设备标识" prop="deviceMark">
            <p-input
              :disabled="true"
              class="form-item-width"
              placeholder="请输入设备标识"
              v-model="ruleForm.deviceMark"
            />
          </p-form-model-item>
        </el-col>
        <el-col :span="8" v-for="item in paramList" :key="item.paramMark">
          <p-form-model-item
            has-feedback
            :label="item.paramName"
            :style="item.paramValType === 'dic' ? 'width:32%' : null"
          >
            <p-date-picker
              v-if="item.paramValType === 'date'"
              :mode="item.paramValType"
              :disabled="!editable"
              format="yyyy-MM-DD"
              :value="item.paramValue || null"
              v-model="item.paramValue"
              :name="item.paramMark"
              class="form-item-width"
              :placeholder="item.paramName"
              :id="item.id"
            />
            <p-select
              allow-clear
              :disabled="!editable"
              v-else-if="item.paramValType === 'dic'"
              v-model="item.paramValue"
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
              class="form-item-width"
              :name="item.paramMark"
              v-model="item.paramValue"
              :placeholder="item.unit ? '单位（' + item.unit + '）' : ''"
              :id="item.id"
              readonly
              :disabled="!editable"
              onfocus="this.removeAttribute('readonly')"
            />
          </p-form-model-item>
        </el-col>
      </p-form-model>
    </el-row>
    <div class="textCenter" v-if="editable">
      <el-button type="primary" size="small" @click="onOk">保存</el-button>
      <el-button style="margin-left: 20px" size="small" @click="onCancel">取消</el-button>
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
      let paramList = []
      for (const paramInfo of this.paramList) {
        let elementsByName = document.getElementsByName(paramInfo.paramMark)[0]
        let paramMark = elementsByName.name
        let paramValue = elementsByName.value
        let id = paramInfo.id

        let param = {
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

      let url = this.uploadConf.fileList[0]?.url
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
