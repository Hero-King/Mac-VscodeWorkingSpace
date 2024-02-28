<template>
  <el-dialog :title="curConf.title" :visible.sync="dialogVisible" @open="open" @closed="closed" :close-on-click-modal="false">
    <el-form ref="form" :model="form" @submit.native.prevent label-width="110px">
      <el-row>
        <!-- 关联知识库 -->
        <template v-if="actionType == 'assignKnowledge'">
          <el-col :span="24">
            <el-form-item label="关联知识库">
              <el-button size="small" type="text" icon="el-icon-plus" @click="workDialogVisible = true">选择</el-button>
              <div>
                <ul class="ul_list">
                  <li class="ul_item" v-for="(device, deviceIndex) in form.knowledges" :key="device.id">
                    <div><i class="el-icon-tickets"></i>{{ device.name }}</div>
                    <i class="el-icon-delete" @click.stop="deleteDeviceList(deviceIndex)"></i>
                  </li>
                </ul>
              </div>
            </el-form-item>
          </el-col>
        </template>
        <SelectFormContent :conf="curConf.conf" :form="form" />
      </el-row>
    </el-form>
    <div slot="footer" class="textCenter">
      <el-button size="small" type="primary" @click="submit">提 交</el-button>
      <el-button size="small" @click="dialogVisible = false">取 消</el-button>
    </div>

    <el-dialog title="关联知识库" width="60%" :append-to-body="true" :visible.sync="workDialogVisible" :close-on-click-modal="false" @close="dialogClose">
      <div class="dialog-content-wrap">
        <Standard :isDialogType="true" :opend="workDialogVisible" :selectionList="form.knowledges" :selectChange.sync="tmpSelectionList" />
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="workDialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="selectData">确 定</el-button>
      </div>
    </el-dialog>
  </el-dialog>
</template>
<script>
import SelectFormContent from '@/components/DictSelect/SelectFormContent'
import { WorkOrderStatusMap, workOrderEditFormFields, WorkOrderResolveStatusList } from '../const'
import Standard from '../../knowledge-base/standard.vue'
import {
  workPlanDetails,
  appointWorkPlanUrl,
  rejectWorkPlanUrl,
  detailsEntryWorkPlanUrl,
  confirmWorkPlanUrl,
  knowledgeBaseWorkPlanUrl,
  permissionListUrl,
  newUploadUrl
} from '@/api/devops-center/workOrder'
import { selectBaseTypeUrl } from '@/components/DictSelect/urls'
export default {
  name: 'OperateDialog',
  components: {
    SelectFormContent,
    Standard
  },
  props: {
    visible: Boolean,
    actionType: String,
    workId: [String, Number],
    detail: Object
  },
  data() {
    return {
      tmpSelectionList: [],
      workDialogVisible: false,
      form: {
        remark: '',
        needIssueClassify: 0,
        isResolved: 1,
        curUser: this.$store.state?.user?.name || 'Test用户',
        handleTime: this.$moment().format('YYYY-MM-DD HH:mm:ss'),
        knowledges: []
      },

      operateConf: {
        assign: {
          title: '工单指派',
          submitUrl: appointWorkPlanUrl,
          paramFormat: (param) => {
            delete param.isResolved
            delete param.remark
            delete param.knowledges
            delete param.needIssueClassify
          },
          conf: [
            {
              label: '处理意见',
              comType: 'el-input',
              span: 11,
              formKey: 'processSuggestion',
              rules: [{ required: true, message: '请输入处理意见' }]
            },
            {
              label: '指派操作员',
              comType: 'select',
              offset: 1,
              span: 11,
              dictUrl: permissionListUrl,
              methods: 'post',
              labelKey: 'fullName',
              valueKey: 'id',
              resultFormat(res) {
                res.data.enterDetailsList.forEach((i) => {
                  i.fullName = i.fullName || i.name
                })
                return res.data.enterDetailsList
              },
              events: {
                'update:options': this.setEnterDetailsList
              },
              formKey: 'executor',
              rules: [{ required: true, message: '请选择操作员' }]
            },
            {
              label: '加签',
              comType: 'select',
              span: 11,
              formKey: 'technician',
              options: [],
              labelKey: 'fullName',
              valueKey: 'id'
            }
          ]
        },
        reject: {
          title: '工单驳回',
          submitUrl: rejectWorkPlanUrl,
          paramFormat: (param) => {
            delete param.isResolved
            delete param.remark
            delete param.knowledges
            delete param.needIssueClassify
          },
          conf: [
            {
              label: '处理意见',
              comType: 'el-input',
              span: 14,
              formKey: 'processSuggestion',
              rules: [{ required: true, message: '请输入处理意见' }]
            }
          ]
        },
        inputDetail: {
          title: '工单详情录入',
          submitUrl: detailsEntryWorkPlanUrl,
          paramFormat: (param) => {
            param.isResolved && (delete param.executor, delete param.technician)
          },
          conf: [
            {
              label: '处理人',
              comType: 'el-input',
              editable: false,
              span: 11,
              formKey: 'curUser',
              rules: [{ required: true, message: '请输入处理人' }]
            },
            {
              label: '处理时间',
              comType: 'el-input',
              editable: false,
              offset: 1,
              span: 11,
              formKey: 'handleTime'
            },
            {
              span: 24,
              label: '工单执行描述',
              comType: 'el-input',
              formKey: 'remark',
              labelWidth: '110px',
              maxlength: 340,
              showWordLimit: true,
              autosize: { minRows: 2 },
              type: 'textarea',
              rules: [{ required: true, message: '请输入工单执行描述' }]
            },
            {
              span: 24,
              label: '附件上传',
              comType: 'upload',
              formKey: 'files',
              showFileList: true,
              uploadTip: '支持拓展名: .rar .zip .docx .pdf .jpg...',
              action: newUploadUrl
            },
            {
              label: '处理结论',
              comType: 'radio',
              options: WorkOrderResolveStatusList,
              span: 24,
              formKey: 'isResolved',
              rules: [{ required: true, message: '请选择处理结论' }]
            },
            {
              label: '处理意见',
              comType: 'el-input',
              span: 14,
              formKey: 'processSuggestion',
              rules: [{ required: true, message: '请输入处理意见' }]
            },
            {
              label: '指派操作员',
              comType: 'select',
              span: 11,
              dictUrl: '',
              itemHidden: (form) => form.isResolved,
              dictUrl: permissionListUrl,
              methods: 'post',
              labelKey: 'fullName',
              valueKey: 'id',
              formKey: 'executor',
              resultFormat(res) {
                res.data.enterDetailsList.forEach((i) => {
                  i.fullName = i.fullName || i.name
                })
                return res.data.enterDetailsList
              },
              events: {
                'update:options': this.setEnterDetailsList
              },
              rules: [{ required: true, message: '请选择操作员' }]
            },
            {
              label: '加签',
              comType: 'select',
              offset: 1,
              span: 11,
              labelWidth: '80px',
              formKey: 'technician',
              itemHidden: (form) => form.isResolved,
              options: [],
              labelKey: 'fullName',
              valueKey: 'id'
            }
          ]
        },
        confirm: {
          title: '工单确认',
          submitUrl: confirmWorkPlanUrl,
          paramFormat: (param) => {
            delete param.remark
            delete param.knowledges
            delete param.needIssueClassify
          },
          conf: [
            {
              label: '处理结论',
              comType: 'radio',
              options: WorkOrderResolveStatusList,
              span: 14,
              formKey: 'isResolved',
              rules: [{ required: true, message: '请选择处理结论' }]
            },
            {
              label: '处理意见',
              comType: 'el-input',
              span: 14,
              formKey: 'processSuggestion',
              rules: [{ required: true, message: '请输入处理意见' }]
            }
          ]
        },
        assignKnowledge: {
          title: '关联知识库',
          submitUrl: knowledgeBaseWorkPlanUrl,
          paramFormat: (param) => {
            delete param.isResolved
            delete param.remark
            param.knowledgeIds = param.knowledges.map((i) => i.id)
            delete param.knowledges
            !param.needIssueClassify && delete param.classify
          },
          conf: [
            {
              label: '是否需要现象分类',
              comType: 'radio',
              labelWidth: '130px',
              span: 24,
              options: [
                { label: '是', value: 1 },
                { label: '否', value: 0 }
              ],
              formKey: 'needIssueClassify'
            },
            {
              label: '选择现象类型',
              comType: 'select',
              labelWidth: '130px',
              span: 14,
              itemHidden: (form) => !form.needIssueClassify,
              dictUrl: selectBaseTypeUrl,
              resultFormat: (res) => {
                return res.data.issueList
              },
              formKey: 'classify'
            }
          ]
        }
      }
    }
  },
  computed: {
    curConf() {
      return this.operateConf[this.actionType]
    },
    dialogVisible: {
      get() {
        return this.visible
      },
      set(v) {
        this.$emit('update:visible', v)
      }
    }
  },
  methods: {
    setEnterDetailsList(e) {
      let assignConf = this.operateConf.assign.conf
      let inputDetailConf = this.operateConf.inputDetail.conf
      assignConf[assignConf.length - 1].options = e
      inputDetailConf[inputDetailConf.length - 1].options = e
    },
    selectData() {
      this.workDialogVisible = false
      this.form.knowledges = this.form.knowledges.concat(JSON.parse(JSON.stringify(this.tmpSelectionList)))
    },
    dialogClose() {
      this.tmpSelectionList = []
    },
    deleteDeviceList(data) {
      this.form.knowledges.splice(data, 1)
      this.dialogClose()
    },

    closed() {
      this.form = {
        remark: '',
        needIssueClassify: 0,
        isResolved: 1,
        curUser: this.$store.state.user.name,
        handleTime: '',
        knowledges: []
      }
      this.$refs.form.resetFields()
    },
    open() {
      this.form.knowledges = this.detail.knowledges?.map((i) => ({ id: i.knowledgeId, name: i.knowledgeName, ...i })) || []
      // this.form.remark = this.detail.remark
      this.form.handleTime = this.$moment().format('YYYY-MM-DD HH:mm:ss')
    },
    async submit() {
      const { curConf, workId } = this
      await this.$refs.form.validate()
      let param = { ...this.form, workId }
      if (this.form?.files?.length > 0) {
        param.actionFile = this.form.files.map((i) => ({
          workId,
          fileName: i.name,
          resourceId: i.response.data.id
        }))
        delete param.files
      }
      delete param.handleTime
      delete param.curUser
      if (typeof curConf.paramFormat == 'function') {
        curConf.paramFormat(param)
      }
      this.$api.post(curConf.submitUrl, param).then((res) => {
        if (res?.code == 0) {
          this.$message.success('操作成功')
          setTimeout(() => {
            this.$emit('operateFinish')
            this.dialogVisible = false
          }, 300)
        } else {
          console.log('error')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
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
</style>
