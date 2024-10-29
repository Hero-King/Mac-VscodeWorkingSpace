<template>
  <el-dialog
    title="分类落库"
    :visible.sync="dialogVisible"
    width="60%"
    @open="getTypes"
  >
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      @submit.native.prevent
    >
      <el-row>
        <SelectFormContent
          :conf="classifyFields"
          :form="form"
        />
      </el-row>
    </el-form>
    <div
      slot="footer"
      class="textCenter"
    >
      <el-button
        type="primary"
        @click="save"
      >确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </div>
  </el-dialog>
</template>
<script>
import {
  selectRecordPageList,
  selectBaseType,
  selectBasePageList,
  insertBaseType,
  insertKnowledge
} from '@/api/devops-center/knowledgeBase'
import DictSelect from '@/components/DictSelect'
import SelectFormContent from '@/components/DictSelect/SelectFormContent'

const initForm = {
  issueName: null,
  issueDesc: '',
  methodName: null,
  methodDesc: '',
  name: '',
  categoryName: '',
  workList: []
}

export default {
  name: 'ClassifyDaialog',
  components: { DictSelect, SelectFormContent },
  props: {
    visible: Boolean,
    rowData: Object
  },
  data() {
    return {
      classifyFields: [
        {
          span: 6,
          label: '现象类型',
          formKey: 'issueName',
          optionsKey: 'issueList',
          rules: [{ required: true, message: '请选择现象类型' }],
          options: [],
          clearable: true,
          events: {
            change: this.queryKnowledge
          }
        },
        {
          label: '问题描述',
          comType: 'el-input',
          formKey: 'issueDesc',
          editable: true,
          maxlength: 340,
          showWordLimit: true,
          autosize: { minRows: 2 },
          type: 'textarea'
        },
        {
          span: 6,
          label: '措施类型',
          formKey: 'methodName',
          optionsKey: 'methodList',
          clearable: true,
          options: [],
          rules: [{ required: true, message: '请选择措施类型' }],
          events: {
            change: this.queryKnowledge
          }
        },
        {
          label: '处理情况',
          formKey: 'methodDesc',
          editable: true,
          comType: 'el-input',
          maxlength: 340,
          showWordLimit: true,
          autosize: { minRows: 2 },
          type: 'textarea'
        },
        {
          span: 6,
          editable: true,
          label: '知识名称',
          formKey: 'name',
          comType: 'el-input',
          rules: [{ required: true, message: '请输入知识名称', trigger: 'blur' }]
        },
        {
          span: 6,
          offset: 6,
          label: '知识分类',
          editable: true,
          formKey: 'categoryName',
          optionsKey: 'categoryList',
          rules: [{ required: true, message: '请选择知识类别', trigger: 'blur' }],
          options: []
        }
      ],
      form: JSON.parse(JSON.stringify(initForm)),
      typeData: {},
      btnDisabled: false
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible
      },
      set(v) {
        this.$emit('update:visible', v)
        this.form = JSON.parse(JSON.stringify(initForm))
        this.$refs.form.resetFields()
      }
    }
  },
  watch: {
    visible(v) {
      if (v) {
        this.setFormInitData()
        this.chnageFormDisabled(false)
      }
    }
  },
  methods: {
    save() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.btnDisabled = true
          insertKnowledge({ ...this.form, workList: this.form.workList.concat(this.rowData) })
            .then((res) => {
              if (res?.code == 0) {
                this.$message.success(`落库成功`)
                this.$emit('reloadTableData')
                setTimeout(() => {
                  this.dialogVisible = false
                }, 200)
              }
            })
            .finally(() => {
              this.btnDisabled = false
            })
        }
      })
    },
    chnageFormDisabled(disabled = true) {
      this.classifyFields.forEach((i) => {
        'editable' in i && (i.disabled = disabled)
      })
      this.$nextTick(() => {
        if (disabled) {
          this.$refs.form.validate()
        }
      })
    },

    setFormInitData() {
      this.form = JSON.parse(JSON.stringify(initForm))
      this.form.issueDesc = this.rowData.remark
      this.form.methodDesc = this.rowData.processRemark
    },
    queryKnowledge() {
      const { issueName, methodName } = this.form
      if (!(methodName?.length > 0 && issueName?.length > 0)) {
        this.chnageFormDisabled(false)
        this.setFormInitData()
        this.form.issueName = issueName
        this.form.methodName = methodName
        return
      }
      selectBasePageList({
        issueName,
        methodName
      }).then((res) => {
        if (res?.code == 0) {
          this.btnDisabled = false
          const { total } = res.data
          if (total == 1) {
            this.form = res.data.list[0]
            this.form.workList = this.form.workList || []
            this.chnageFormDisabled()
          } else if (total == 0) {
          } else {
            this.$message.error('当前类型关联多条知识库, 请联系管理员处理')
            this.btnDisabled = true
          }
        }
      })
    },
    getTypes() {
      selectBaseType()
        .then((res) => {
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
        .finally(() => {
          this.classifyFields.forEach((i) => {
            if (i.optionsKey) {
              i.options = this.typeData[i.optionsKey] || []
            }
          })
        })
    }
  }
}
</script>
<style lang=""></style>
