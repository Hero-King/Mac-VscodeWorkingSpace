<template>
  <div>
    <h2 class="apply-tip">工单申请</h2>

    <el-form
      ref="form"
      :model="form"
      class="label-blod-form"
      label-width="80px"
      @submit.native.prevent
    >
      <el-row>
        <SelectFormContent
          :conf="conf"
          :form="form"
        />
      </el-row>

      <!-- <el-form-item class="elefileUpload" label="附件上传">
        <attachment-upload :show-file-list="true" v-model="form.files"></attachment-upload>
      </el-form-item> -->

      <el-form-item label-width="0px">
        <el-collapse>
          <!-- 关联站点 -->
          <el-collapse-item>
            <template slot="title">
              <div class="collapse_div">
                <span>关联站点</span>
                <el-button
                  icon="el-icon-plus"
                  class="btnone"
                  @click.stop="
                    dialogType = 2
                    dialogVisible2 = true
                  "
                >关联站点</el-button>
              </div>
            </template>
            <ul class="ul_list">
              <li
                v-for="(params, paramsIndex) in locationList"
                :key="paramsIndex"
                class="ul_item"
              >
                <div>
                  <i class="el-icon-tickets" />
                  {{ params.locationName }}
                </div>
                <i
                  class="el-icon-delete"
                  @click.stop="deleteLocationList(paramsIndex)"
                />
              </li>
            </ul>
          </el-collapse-item>

          <!-- 关联设备 -->
          <el-collapse-item>
            <template slot="title">
              <div class="collapse_div">
                <span>关联设备</span>
                <el-button
                  icon="el-icon-plus"
                  class="btnone"
                  @click.stop="
                    dialogType = 1
                    dialogVisible1 = true
                  "
                >关联设备</el-button>
              </div>
            </template>
            <ul class="ul_list">
              <li
                v-for="(device, deviceIndex) in selectDeviceList"
                :key="deviceIndex"
                class="ul_item"
              >
                <div><i class="el-icon-tickets" />{{ device.deviceName }}-{{ device.modelName }}</div>
                <i
                  class="el-icon-delete"
                  @click.stop="deleteDeviceList(deviceIndex)"
                />
              </li>
            </ul>
          </el-collapse-item>

          <!-- 关联告警 -->
          <el-collapse-item>
            <template slot="title">
              <div class="collapse_div">
                <span>关联告警</span>
                <el-button
                  icon="el-icon-plus"
                  class="btnone"
                  @click.stop="addAssociatedAlarm"
                >关联告警 </el-button>
              </div>
            </template>
            <ul class="ul_list">
              <li
                v-for="(alarm, alarmIndex) in alarmSelection"
                :key="alarmIndex"
                class="ul_item"
              >
                <div v-if="!alarm.alarmType">
                  <i class="el-icon-tickets" />
                  {{ alarm.alarmName }}
                </div>
                <div v-else>
                  <i class="el-icon-tickets" />
                  {{ alarm.alarmType }}-{{ alarm.alarmName }}-{{ alarm.alarmObject }}-{{ alarm.alarmContent }}
                </div>
                <i
                  class="el-icon-delete"
                  @click.stop="deleteAlarmList(alarmIndex)"
                />
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </el-form-item>
      <el-form-item class="textCenter">
        <el-button
          class="ml-16"
          size="small"
          type="primary"
          @click="onSave(1)"
        >提交</el-button>
        <el-button
          class="ml-16"
          size="small"
          type="primary"
          @click="onSave(0)"
        >暂存</el-button>
        <el-button
          class="ml-16"
          size="small"
          type="primary"
          @click="onCancel"
        >取消</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      :title="dialogType == 1 ? '关联设备' : '关联站点'"
      width="60%"
      :visible.sync="dialogVisible1"
      :close-on-click-modal="false"
      @close="dialogClose"
      @opened="dialogOpen"
    >
      <div class="dialog-content-wrap">
        <EquipmentAccount
          ref="1"
          :show-export="false"
          :show-left-tree="false"
          :show-table-checkbox="true"
          :show-operation="false"
          :opend="dialogVisible1"
          :selection-list="selectDeviceList"
          :selectChange.sync="tmpSelectDeviceList"
        />
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button
          type="primary"
          @click="selectData"
        >确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="dialogType == 1 ? '关联设备' : '关联站点'"
      width="40%"
      :visible.sync="dialogVisible2"
      :close-on-click-modal="false"
      @close="dialogClose"
      @opened="dialogOpen"
    >
      <div class="dialog-content-wrap">
        <LocationTree
          :opend="dialogVisible2"
          :selection-list="locationList"
          :selectChange.sync="tmpLocationList"
        />
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button
          type="primary"
          @click="selectData"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import SelectFormContent from '@/components/DictSelect/SelectFormContent'
import { createWorkPlan, workPlanDetails } from '@/api/devops-center/workOrder'
import { workOrderAddFormFields } from '../const'

import EleImgFileUpload from '@/components/upLoad/eleImgFileUpload'
import AttachmentUpload from '@/components/upLoad/AttachmentUpload.vue'
import EquipmentAccount from '@/views/devops-center/device-management/equipmentAccount'
import LocationTree from './LocationTree.vue'
import { locationTreeUrl } from '@/components/DictSelect/urls'

function checkImgType(name) {
  if (!/\.(bmp|jpg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp|jpeg)$/.test(name.toLowerCase())) {
    return false
  } else {
    return true
  }
}

export default {
  name: 'WorkOrderApply',
  components: {
    SelectFormContent,
    EleImgFileUpload,
    AttachmentUpload,
    LocationTree,
    EquipmentAccount
  },
  props: {
    initData: {
      type: Object,
      require: true
    },
    rowData: Object,
    visible: Boolean,
    isEdit: Boolean
  },
  data() {
    this.locationTreeUrl = locationTreeUrl
    this.conf = workOrderAddFormFields
    return {
      dialogType: 1,
      // 设备
      dialogVisible1: false,
      tmpSelectDeviceList: [],
      selectDeviceList: [],

      // 站点
      dialogVisible2: false,
      tmpLocationList: [],
      locationList: [],

      // 关联告警
      AlarmDialogVisible: false,
      alarmSelection: [],

      //
      form: {
        workTypeName: '',
        workMark: null,
        creatorName: 'wjj',
        createBy: '195243',
        createDate: this.$moment().format('YYYY-MM-DD HH:mm:ss'),
        workLevel: 'general',
        processSuggestion: '',
        // 附件列表
        files: []
      }
    }
  },
  created() {
    if (this.isEdit) {
      this.getDetail()
    } else {
      this.form.workTypeName = this.initData.tag.workTypeName
      this.alarmSelection = this.initData.alarmSelection || []
    }
  },
  methods: {
    getDetail() {
      workPlanDetails({ id: this.rowData.id }).then((res) => {
        if (res?.code == 0) {
          const { logs, deviceMarks, workLocations, files, alarmLogs, ...rest } = res.data
          this.form = rest
          this.selectDeviceList = deviceMarks
          this.locationList = workLocations
          this.alarmSelection = alarmLogs
          this.form.files = files.map((i) => ({ name: i.fileName, url: i.storePath, ...i }))
        }
      })
    },
    dialogOpen() {},
    dialogClose() {
      if (this.dialogType == 1) {
        this.tmpSelectDeviceList = []
      } else {
        this.tmpLocationList = []
      }
    },
    onSave(isSubmit = 0) {
      const params = { ...this.form, submissionStatus: isSubmit }
      params.files = this.form.files.map((i) => {
        if (i.response) {
          return {
            fileName: i.name,
            resourceId: i.response.data.id,
            fileType: checkImgType(i.name) ? 'pic' : 'other'
          }
        } else {
          return i
        }
      })
      params.workLocations = this.locationList
      params.deviceMarks = this.selectDeviceList.map((i) => i.deviceMark)
      params.alarmLogs = this.alarmSelection.map((i) => ({
        alarmLogId: i.id,
        alarmName: i.alarmName
      }))
      createWorkPlan(params).then((res) => {
        if (res?.code == 0) {
          this.$message.success(`${isSubmit ? '提交' : this.isEdit ? '保存' : '新建'}成功`)
          this.$emit('reloadTableData')
          this.onCancel()
        } else {
        }
      })
    },
    onCancel() {
      this.form = {}
      this.$emit('update:visible', false)
    },
    // 添加关联告警
    addAssociatedAlarm() {
      this.AlarmDialogVisible = true
    },
    getAlarmInfo(val) {
      this.alarmSelection = this.alarmSelection.concat(val)
    },
    deleteAlarmList(data) {
      this.alarmSelection.splice(data, 1)
    },
    deleteLocationList(data) {
      this.locationList.splice(data, 1)
      this.dialogClose()
    },
    deleteDeviceList(data) {
      this.selectDeviceList.splice(data, 1)
      this.dialogClose()
    },
    selectData() {
      const val = this.dialogType
      if (val == 1) {
        this.dialogVisible1 = false
        this.selectDeviceList = this.selectDeviceList.concat(JSON.parse(JSON.stringify(this.tmpSelectDeviceList)))
      } else {
        this.dialogVisible2 = false
        this.locationList = this.locationList.concat(JSON.parse(JSON.stringify(this.tmpLocationList)))
      }
    }
  }
}
</script>
<style lang="less" scoped>
.apply-tip {
  font-weight: 700;
  font-size: 20px;
  color: #101010;
  font-style: normal;
  letter-spacing: 0px;
  line-height: 30px;
  text-decoration: none;
}
.btnone {
  border: none;
  color: #4e60f6;
}
.collapse_div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 3%;
}

.label-blod-form {
  .el-form-item {
    .dict-select {
      width: 100%;
    }
  }
}

/deep/.el-collapse-item__arrow {
  margin: 0 8px 0 auto;
  transition: transform 0.3s;
  font-weight: 300;
  position: relative;
  left: -97%;
}

.ul_list {
  .ul_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed #dcdfe6;
    padding: 20px 5px;

    p {
      width: 90%;
      white-space: nowrap;
      overflow: scroll;
    }
  }
}

.dialog-content-wrap {
  /deep/ .page {
    padding: 0;
    .el-table__body-wrapper {
      height: 300px;
      overflow-y: auto;
    }
  }
}
</style>
