<template>
  <div>
    <el-dialog
      :title="isEdit ? '编辑工单类型' : '请选择工单类型'"
      :visible.sync="typeDialogVisible"
      width="50%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @open="queryWorkPlanType"
      @close="close"
    >
      <div
        v-if="!isEdit"
        v-permission="'addWorkBookType'"
        class="clearfix"
      >
        <el-button
          style="float: right"
          type="primary"
          size="small"
          :disabled="workPlanTypes.length === 0"
          @click="createType"
        >
          创建工单类型
        </el-button>
      </div>
      <div class="tags-list">
        <div
          v-if="isEdit"
          key="edit"
        >
          <el-tag
            v-for="(item, index) in editWorkPlanTypes"
            :key="item.id"
            :class="['type-tag', { disbaled: !!item.isSystem }]"
            :closable="!!!item.isSystem"
            :disable-transitions="true"
            @click="tagClick(item)"
            @close="handleClose(item)"
          >
            {{ item.workTypeName }}
          </el-tag>
          <el-divider style="margin: 10px 0" />
          <el-form
            ref="form"
            :model="form"
            :rules="rules"
            inline
            @submit.native.prevent
          >
            <el-form-item prop="inputValue">
              <el-input
                ref="saveTagInput"
                v-model="form.inputValue"
                class="input-new-tag"
                size="small"
                placeholder="请输入工单类型名称"
                @keyup.enter.native="handleInputConfirm"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                size="small"
                icon="el-icon-plus"
                @click="handleInputConfirm"
              />
            </el-form-item>
          </el-form>
        </div>
        <div
          v-else
          key="2"
        >
          <el-tag
            v-for="(item, index) in workPlanTypes"
            :key="item.id"
            class="type-tag"
            @click="tagClick(item)"
          >
            {{ item.workTypeName }}
          </el-tag>
        </div>
      </div>
      <div
        v-if="isEdit"
        slot="footer"
        class="textCenter"
      >
        <el-button
          size="small"
          type="primary"
          @click="handleSave"
        >
          确 定
        </el-button>
        <el-button
          size="small"
          @click="cancelEdit"
        >
          取 消
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { queryWorkPlanType, editWorkPlanType } from '@/api/devops-center/workOrder'
export default {
  name: 'ApplyDailog',
  components: {},
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
    visible: {
      type: Boolean
    }
  },
  data() {
    const validateInput = (rule, value, callback) => {
      if (value.length > 4) {
        callback('工单类型长度不得超过4位')
      } else if (!value.endsWith('工单')) {
        callback('工单类型必须以 工单 结尾')
      } else if (this.typesFilterByEditTagName.find((i) => i.workTypeName === value)) {
        callback('工单类型已存在')
      } else {
        callback()
      }
    }
    this.warnTypeName = '告警工单'
    return {
      editTag: null,
      isEdit: false,
      workPlanTypes: [],
      editWorkPlanTypes: [],
      rules: {
        inputValue: [
          { required: true, message: '请输入工单类型名称', trigger: 'change' },
          { validator: validateInput, trigger: 'change' }
        ]
      },
      form: {
        inputValue: ''
      },
      // 关联告警
      AlarmDialogVisible: false,
      alarmSelection: []
    }
  },
  computed: {
    typeDialogVisible: {
      get() {
        return this.visible
      },
      set(v) {
        this.$emit('update:visible', v)
      }
    },
    canEditdTypes() {
      return this.editWorkPlanTypes.filter((i) => i.isSystem !== 1)
    },
    typesFilterByEditTagName() {
      return this.editWorkPlanTypes.filter((i) => i.workTypeName !== this.editTag?.workTypeName)
    }
  },
  methods: {
    // 添加关联告警
    addAssociatedAlarm() {
      this.AlarmDialogVisible = true
    },
    getAlarmInfo(val) {
      this.alarmSelection = this.alarmSelection.concat(val)
      this.AlarmDialogVisible = false
      this.$emit('selected', {
        tag: { workTypeName: this.warnTypeName },
        alarmSelection: this.alarmSelection || []
      })
    },

    close() {
      this.cancelEdit()
    },
    handleSave() {
      editWorkPlanType(this.canEditdTypes).then((res) => {
        if (res?.code == 0) {
          this.queryWorkPlanType()
          this.$emit('changeWorkPlanType')
          this.$message.success('保存成功')
          this.cancelEdit()
        }
      })
    },
    cancelEdit() {
      this.isEdit = false
      this.editTag = null
      this.editWorkPlanTypes = []
      this.form.inputValue = ''
    },
    tagClick(tag) {
      if (this.isEdit) {
        if (tag.isSystem) {
          return
        }
        this.editTag = tag
        this.form.inputValue = tag.workTypeName
        this.focusInput()
      } else {
        if (tag.workTypeName === this.warnTypeName) {
          this.AlarmDialogVisible = true
        } else {
          this.$emit('selected', { tag })
        }
      }
    },
    handleClose(tag) {
      this.editWorkPlanTypes.splice(this.editWorkPlanTypes.indexOf(tag), 1)
      this.$refs.form.clearValidate()
      if (this.editTag == tag) {
        this.editTag = null
      }
    },

    focusInput() {
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      if (this.canEditdTypes.length >= 8 && !this.editTag) {
        this.$message.warning('自定义类型不能超过8个')
        return
      }
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.editTag) {
            this.editTag.workTypeName = this.form.inputValue
          } else {
            this.editWorkPlanTypes.push({ workTypeName: this.form.inputValue })
          }

          this.form.inputValue = ''
          this.editTag = null
          this.focusInput()
          this.$nextTick(() => {
            this.$refs.form.clearValidate()
          })
        }
      })
    },
    createType() {
      this.isEdit = true
      this.editWorkPlanTypes = JSON.parse(JSON.stringify(this.workPlanTypes))
      this.focusInput()
    },
    queryWorkPlanType() {
      queryWorkPlanType({}).then((res) => {
        if (res?.code === 0) {
          this.workPlanTypes = res.data
        } else {
          this.workPlanTypes = []
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.type-tag {
  cursor: pointer;
  &.disbaled {
    cursor: not-allowed;
  }
}
.type-tag {
  margin-right: 10px;
  margin-top: 10px;
}
.tags-list {
  min-height: 100px;
}
</style>
