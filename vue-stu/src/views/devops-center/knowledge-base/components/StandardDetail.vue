<template>
  <div>
    <!-- <el-alert type="warning" title="11212"></el-alert> -->
    <el-form
      :model="form"
      size="small"
      class="label-blod-form"
      label-width="80px"
      @submit.native.prevent
    >
      <el-row>
        <el-col
          v-for="item in standardEditFields"
          :key="item.formKey"
          :span="item.span"
          :offset="item.offset"
          :pull="item.pull"
        >
          <el-form-item
            :label="item.label"
            :label-width="item.labelWidth"
            :prop="item.formKey"
            :rules="item.rules"
            :class="item.formItemClass"
          >
            <DictSelect
              v-bind="item"
              v-model="form[item.formKey]"
              :options="typeData[item.optionsKey]"
            >
              <template v-if="item.comType === 'upload' && canEdit">
                <el-button
                  size="small"
                  icon="el-icon-upload2"
                  plain
                >上传文件</el-button>
              </template>
            </DictSelect>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="关联工单">
            <el-button
              v-if="canEdit"
              size="small"
              type="text"
              icon="el-icon-plus"
              @click="workDialogVisible = true"
            >关联</el-button>
            <div>
              <ul class="ul_list">
                <li
                  v-for="(device, deviceIndex) in form.workList"
                  :key="deviceIndex"
                  class="ul_item"
                >
                  <div><i class="el-icon-tickets" />{{ device.workName }}</div>
                  <i
                    class="el-icon-delete"
                    @click.stop="deleteDeviceList(deviceIndex)"
                  />
                </li>
              </ul>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item
            label=""
            class="textCenter"
          >
            <el-button
              size="small"
              type="primary"
              @click="edit"
            >{{ confirmBtnText }}</el-button>
            <el-button
              size="small"
              @click="cancel"
            >取消</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- 关联工单 -->
    <el-dialog
      title="关联工单"
      width="60%"
      :visible.sync="workDialogVisible"
      :close-on-click-modal="false"
      @close="dialogClose"
    >
      <div class="dialog-content-wrap">
        <TaskNotes
          :is-dialog-type="true"
          :opend="workDialogVisible"
          :selection-list="form.workList"
          :selectChange.sync="tmpSelectionList"
        />
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="selectData"
        >确 定</el-button>
        <el-button @click="workDialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import DictSelect from '@/components/DictSelect'
import {
  selectRecordPageList,
  selectBaseType,
  selectBasePageList,
  insertKnowledge
} from '@/api/devops-center/knowledgeBase'
import { standardEditFields } from '../const'
import TaskNotes from '../takeNotes.vue'
export default {
  name: 'StandardDetail',
  components: {
    DictSelect,
    TaskNotes
  },
  inheritAttrs: false,
  props: {
    canEdit: Boolean,
    rowData: Object
  },
  data() {
    return {
      // relate work
      workDialogVisible: false,
      tmpSelectionList: [],

      form: {
        workList: [],
        methodFileList: [],
        issueFileList: []
      },
      standardEditFields: standardEditFields.slice().map((i) => ({ editable: true, ...i })),
      rules: {},
      typeData: {},
      // 由详情状态去编辑 标志位
      detailEditFlag: false
    }
  },
  computed: {
    isDetail() {
      return this.rowData.id !== void 0 && !this.canEdit
    },
    confirmBtnText() {
      return this.rowData.id == void 0 ? '新增' : this.canEdit ? '保存' : '编辑'
    }
  },
  created() {
    this.getTypes()
    if (this.rowData.id) {
      this.getDetail()
    }
    this.setStandardEditFields()
  },
  methods: {
    setStandardEditFields() {
      if (this.canEdit) {
        this.standardEditFields.forEach((i) => (i.editable = true))
      } else {
        this.standardEditFields.forEach((i) => (i.editable = false))
      }
    },
    cancel() {
      if (this.detailEditFlag) {
        this.getDetail()
        this.$emit('update:canEdit', false)
        this.$nextTick(this.setStandardEditFields)
        this.detailEditFlag = false
        return
      }
      this.form = {}
      this.$emit('update:visible', false)
    },
    edit() {
      if (this.isDetail) {
        this.$emit('update:canEdit', true)
        this.detailEditFlag = true
        this.$nextTick(this.setStandardEditFields)
      } else {
        const params = JSON.parse(JSON.stringify(this.form))
        params.issueFileList = params.issueFileList.map((i) => (i.response ? i.response.data : i))
        params.methodFileList = params.methodFileList.map((i) => (i.response ? i.response.data : i))

        insertKnowledge(params).then((res) => {
          if (res?.code == 0) {
            this.$message.success(`${this.confirmBtnText}成功`)
            this.$emit('reloadTableData')
            setTimeout(() => {
              this.$emit('update:visible', false)
            }, 200)
          }
        })
      }
    },
    getTypes() {
      selectBaseType().then((res) => {
        if (res?.code == 0) {
          this.typeData = res.data
        } else {
          this.typeData = {
            categoryList: [],
            issueList: [],
            methodList: []
          }
        }
      })
    },
    getDetail() {
      this.form = JSON.parse(JSON.stringify(this.rowData))
      this.form.workList = this.form.workList || []
      this.form.methodFileList = (this.form.methodFileList || []).map((i) => ({
        name: i.originName,
        url: i.storePath,
        ...i
      }))
      this.form.issueFileList = (this.form.issueFileList || []).map((i) => ({
        name: i.originName,
        url: i.storePath,
        ...i
      }))
    },
    handleBack(event, reloadTableData) {
      reloadTableData && this.$emit('reloadTableData')
      this.$emit('update:visible', false)
    },
    selectData() {
      this.workDialogVisible = false
      this.form.workList = this.form.workList.concat(
        JSON.parse(JSON.stringify(this.tmpSelectionList))
      )
    },
    dialogClose() {
      this.tmpSelectionList = []
    },
    deleteDeviceList(data) {
      if (!this.canEdit) {
        return
      }
      this.form.workList.splice(data, 1)
      this.dialogClose()
    }
  }
}
</script>
<style lang="less" scoped>
.item-hidden {
  visibility: hidden;
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
</style>
