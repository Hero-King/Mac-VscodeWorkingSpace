import {
  factorySelectUrl,
  deviceTypeListUrl,
  queryWorkPlanTypeUrl,
  newUploadUrl
} from '@/components/DictSelect/urls'

export const taskNotesStatusObj = {
  emerge: '未分类',
  important: '已落库'
}

const statusMap = {}
Object.keys(taskNotesStatusObj).forEach((key) => {
  const val = taskNotesStatusObj[key]
  statusMap[key] = val
  statusMap[val] = key
})

export const taskNotesStatusMap = statusMap

export const taskNotesStatusList = Object.keys(taskNotesStatusObj).map((i) => ({
  label: taskNotesStatusObj[i],
  value: i
}))

export const taskNotesQueryFormFields = [
  {
    span: 12,
    label: '快速筛选',
    comType: 'radio',
    formKey: 'isKnowledge',
    // formKey: 'workPlanStatus',
    options: [
      { label: '未分类', value: false },
      { label: '已落库', value: true }
    ]
  },
  {
    span: 6,
    label: '搜索',
    comType: 'el-input',
    formKey: 'keyword'
  },
  {
    span: 24,
    label: '工单类型',
    comType: 'radioButton',
    methods: 'post',
    labelKey: 'workTypeName',
    valueKey: 'workTypeName',
    forKey: 'workTypeName',
    formKey: 'workType',
    dictUrl: queryWorkPlanTypeUrl,
    resultFormat(res) {
      res.data.unshift({ workTypeName: '全部', id: '-1' })
      return res.data
    }
  }
]

export const standardQueryFields = [
  {
    label: '知识类别',
    formKey: 'categoryName',
    optionsKey: 'categoryList',
    clearable: true
  },
  {
    label: '现象类型',
    formKey: 'issueName',
    optionsKey: 'issueList',
    clearable: true
  },
  {
    label: '措施类型',
    formKey: 'methodName',
    optionsKey: 'methodList',
    clearable: true
  },
  {
    label: '搜索',
    comType: 'el-input',
    formKey: 'keyword',
    optionsKey: 'methodList',
    clearable: true
  }
]

export const standardEditFields = [
  {
    label: '知识名称',
    formKey: 'name',
    comType: 'el-input',
    span: 6,
    rules: [{ required: true, message: '请输入知识名称' }]
  },
  {
    span: 6,
    offset: 2,
    label: '知识类别',
    formKey: 'categoryName',
    optionsKey: 'categoryList',
    rules: [{ required: true, message: '请选择知识类别' }]
  },
  {
    offset: 10,
    pull: 10,
    span: 6,
    label: '现象类型',
    formKey: 'issueName',
    optionsKey: 'issueList',
    rules: [{ required: true, message: '请选择现象类型' }]
  },
  {
    span: 24,
    label: '现象描述',
    comType: 'el-input',
    formKey: 'issueDesc',
    maxlength: 340,
    showWordLimit: true,
    autosize: { minRows: 2 },
    type: 'textarea',
    rules: [{ required: true, message: '请输入现象描述' }]
  },
  {
    span: 24,
    label: '现象附件',
    comType: 'upload',
    formKey: 'issueFileList',
    showFileList: true,
    action: newUploadUrl
  },
  {
    span: 6,
    label: '措施类型',
    formKey: 'methodName',
    optionsKey: 'methodList',
    rules: [{ required: true, message: '请选择措施类型' }]
  },
  {
    span: 24,
    label: '措施描述',
    comType: 'el-input',
    formKey: 'methodDesc',
    maxlength: 340,
    showWordLimit: true,
    autosize: { minRows: 2 },
    type: 'textarea',
    rules: [{ required: true, message: '请输入措施描述' }]
  },
  {
    span: 24,
    label: '措施附件',
    comType: 'upload',
    formKey: 'methodFileList',
    showFileList: true,
    action: newUploadUrl
  }
]
