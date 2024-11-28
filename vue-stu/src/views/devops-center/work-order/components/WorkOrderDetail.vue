<template>
  <div class="work-order-detail">
    <div class="clearfix">
      <el-button
        class="fl"
        size="small"
        type="primary"
        @click="handleBack"
      >
        返回
      </el-button>
      <span
        class="fr right-tip"
        :class="rightTipClass"
      >{{ WorkOrderStatusMap[form.status] }}</span>
    </div>
    <el-form
      :model="form"
      class="label-blod-form"
      label-width="80px"
      @submit.native.prevent
    >
      <el-row>
        <el-col :span="6">
          <el-form-item
            style="margin-bottom: 0"
            label="工单编号"
          >
            {{ form.workMark }}
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item
            style="margin-bottom: 0"
            label="工单标题"
          >
            {{ form.workName }}
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 基本信息 -->
      <el-alert
        title="基本信息"
        type="info"
        class="detail-alert"
        :closable="false"
      />
      <el-row>
        <SelectFormContent
          :conf="workOrderEditFormFields"
          :form="form"
        />
      </el-row>

      <div>
        <el-form-item label="关联站点">
          <el-link
            v-for="item in form.workLocations"
            :key="item.id"
            class="mr-16 text"
            :underline="false"
            type="info"
            @click="locationClick(item)"
          >
            {{
              item.locationName
            }}
          </el-link>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="关联设备">
          <el-link
            v-for="item in form.deviceMarks"
            :key="item.id"
            class="mr-16"
            :underline="false"
            type="primary"
            @click="deviceClick(item)"
          >
            {{
              item.deviceName
            }}
          </el-link>
        </el-form-item>
      </div>
      <div>
        <!-- <el-form-item label="关联告警">
          <el-link
            class="mr-16"
            :underline="false"
            @click="alarmClick(item)"
            v-for="item in form.alarmLogs"
            :key="item.id"
            type="primary"
            >{{ item.alarmName }}</el-link
          >
        </el-form-item> -->
      </div>
    </el-form>

    <!-- 操作 -->
    <div v-if="form.status !== 'closed' && isEdit">
      <el-alert
        title="操作"
        type="info"
        class="detail-alert"
        :closable="false"
      />
      <div class="btn-list">
        <el-button
          v-if="form.status == 'pendding'"
          v-permission="'assignmentRejection'"
          size="small"
          plain
          @click="operateBtnClick('assign')"
        >
          指派
        </el-button>
        <el-button
          v-if="form.status == 'pendding'"
          v-permission="'assignmentRejection'"
          size="small"
          plain
          @click="operateBtnClick('reject')"
        >
          驳回
        </el-button>
        <el-button
          v-if="form.status == 'processing'"
          v-permission="'inputDetail'"
          size="small"
          plain
          @click="operateBtnClick('inputDetail')"
        >
          录入详情
        </el-button>
        <el-button
          v-if="form.status == 'finished' && form.createBy == userId"
          size="small"
          plain
          @click="operateBtnClick('confirm')"
        >
          工单确认
        </el-button>
        <el-button
          v-if="showKnowledgeBtn"
          size="small"
          plain
          @click="operateBtnClick('assignKnowledge')"
        >
          知识库
        </el-button>
      </div>
      <operate-dailog
        :visible.sync="operateVisible"
        :action-type="actionType"
        :work-id="rowData.id"
        :detail="form"
        @operateFinish="operateFinish"
      />
    </div>

    <!-- 工单执行记录 -->
    <el-alert
      title="工单执行记录"
      type="info"
      class="detail-alert"
      :closable="false"
    />
    <ExeRecord
      :data="form.workPlanActionCollections"
      :order-detail="form"
    />

    <!-- 告警详情 -->
  </div>
</template>
<script>
import SelectFormContent from '@/components/DictSelect/SelectFormContent'
import { WorkOrderStatusMap, workOrderEditFormFields, WorkOrderResolveStatusList } from '../const'
import { workPlanDetails } from '@/api/devops-center/workOrder'
import ExeRecord from '@/views/devops-center/work-order/components/ExeRecord'
import OperateDailog from '@/views/devops-center/work-order/components/OperateDailog'
export default {
  name: 'WorkOrderDetail',
  components: {
    SelectFormContent,
    ExeRecord,
    OperateDailog
  },
  directives: {
    permission: {
      inserted: function(el, binding) {
        // let show = store.state.poros.btnAuth.includes(binding.value)
        const show = true
        !show && (el.style.display = 'none')
      }
    }
  },
  props: {
    visible: { type: Boolean, default: false },
    rowData: {
      type: Object,
      require: true
    },
    isEdit: Boolean
  },
  data() {
    this.workOrderEditFormFields = workOrderEditFormFields
    this.WorkOrderStatusMap = WorkOrderStatusMap
    return {
      form: {},
      editOrDetailData: {},
      addVisible: false,

      // 操作弹框
      operateVisible: false,
      actionType: 'assign'
    }
  },
  computed: {
    userId() {
      return '195243'
    },
    showKnowledgeBtn() {
      return true
      return this.$store.state.poros.btnAuth.includes('assignmentRejection') || this.$store.state.poros.btnAuth.includes('inputDetail')
    },
    rightTipClass() {
      return this.form.status === 'init' ? 'grey' : this.form.status === 'closed' ? 'green' : ''
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    operateFinish() {
      this.handleBack(null, true)
    },
    operateBtnClick(actionType) {
      this.actionType = actionType
      this.operateVisible = true
    },

    locationClick(locationItem) {},
    deviceClick(deviceInfo) {
      this.$router.push({
        path: '/devops-center/device-management/equipmentAccount',
        query: deviceInfo
      })
    },
    getDetail() {
      workPlanDetails({ id: this.rowData.id }).then((res) => {
        if (res?.code == 0) {
          this.form = res.data
          this.form.files = res.data.files.map((i) => ({
            name: i.fileName,
            url: i.storePath,
            ...i
          }))
        }
      })
    },
    handleBack(event, reloadTableData) {
      if (Object.keys(this.$route.query).length > 0) {
        this.$router.back()
        return
      }
      reloadTableData && this.$emit('reloadTableData')
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="less" scoped>
.right-tip {
  display: inline-block;
  height: 32px;
  padding: 9px 15px;
  font-size: 12px;
  line-height: 1;
  border-radius: 3px;
  border: 1px solid #e99d42;
  color: #e99d42;
  &.grey {
    color: #909399;
    border-color: #909399;
  }
  &.green {
    color: #67c23a;
    border-color: #67c23a;
  }
}

.detail-alert {
  padding: 12px 0;
  transform: translateX(-10px);
  /deep/ .el-alert__title {
    font-weight: 700;
    font-size: 14px;
    color: #101010;
    line-height: 20px;
  }
}
.btn-list {
  padding: 20px 0;
}
.text {
  cursor: auto;
}
</style>
