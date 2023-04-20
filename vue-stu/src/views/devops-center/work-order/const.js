import {
  factorySelectUrl,
  deviceTypeListUrl,
  queryWorkPlanTypeUrl
} from '@/components/DictSelect/urls'

const system = {
  baseUrl: '/cms-cloud-front',
  baseApi: '/api/cms-cloud-service',
  businessApi: '/api/business'
}

function genderEnum(statusObj, keyIsNumber = false) {
  let map = {}
  let list = []
  Object.keys(statusObj).forEach((key) => {
    let val = statusObj[key]
    map[key] = val
    map[val] = key
    list.push({ label: val, value: keyIsNumber ? Number(key) : key })
  })
  return { map, list }
}

export const WorkOrderStatusObj = {
  init: '草稿',
  pendding: '已创建待受理',
  processing: '已受理',
  finished: '已完成',
  closed: '已关闭'
}

let map = {}
Object.keys(WorkOrderStatusObj).forEach((key) => {
  let val = WorkOrderStatusObj[key]
  map[key] = val
  map[val] = key
})

export let WorkOrderStatusMap = map

export const WorkOrderStatusList = Object.keys(WorkOrderStatusObj).map((i) => ({
  label: WorkOrderStatusObj[i],
  value: i
}))

export const WorkOrderLevelObj = {
  emerge: '紧急',
  important: '重要',
  primary: '主要',
  general: '一般'
}

let levelMap = {}
Object.keys(WorkOrderLevelObj).forEach((key) => {
  let val = WorkOrderLevelObj[key]
  levelMap[key] = val
  levelMap[val] = key
})

export let WorkOrderLevelMap = levelMap

export const WorkOrderLevelList = Object.keys(WorkOrderLevelObj).map((i) => ({
  label: WorkOrderLevelObj[i],
  value: i
}))

export const WorkOrderResolveStatus = {
  1: '已解决',
  0: '未解决'
}
export const { map: WorkOrderResolveStatusMap, list: WorkOrderResolveStatusList } = genderEnum(
  WorkOrderResolveStatus,
  true
)

export const workOrderAddFormFields = [
  {
    span: 6,
    label: '工单类型',
    comType: 'el-input',
    editable: false,
    formKey: 'workTypeName'
  },
  {
    span: 6,
    label: '工单编号',
    editable: false,
    comType: 'el-input',
    formKey: 'workMark'
  },
  {
    span: 6,
    label: '创建人',
    comType: 'el-input',
    editable: false,
    formKey: 'creatorName'
  },
  {
    span: 6,
    label: '创建时间',
    comType: 'el-input',
    editable: false,
    formKey: 'createDate'
  },
  {
    span: 6,
    label: '工单标题',
    placeholder: '请输入工单标题',
    comType: 'el-input',
    formKey: 'workName',
    rules: [{ required: true, message: '请输入工单标题' }]
  },
  {
    span: 6,
    label: '处理建议',
    placeholder: '请输入处理建议',
    comType: 'el-input',
    formKey: 'processSuggestion'
  },
  {
    span: 12,
    label: '期望完成时间',
    labelWidth: '100px',
    comType: 'el-date-picker',
    placeholder: '选择期望完成时间',
    type: 'datetime',
    valueFormat: 'yyyy-MM-dd HH:mm:ss',
    pickerOptions: {
      disabledDate(time) {
        return time.getTime() < Date.now()
      }
    },
    popperClass: 'datepicker-hidden-current',
    formKey: 'targetTime'
  },
  {
    span: 24,
    label: '优先级',
    comType: 'radio',
    options: WorkOrderLevelList,
    formKey: 'workLevel'
  },
  {
    span: 24,
    label: '问题描述',
    comType: 'el-input',
    formKey: 'remark',
    placeholder: '请输入问题描述',
    maxlength: 340,
    showWordLimit: true,
    autosize: { minRows: 2 },
    type: 'textarea'
  },
  {
    span: 24,
    label: '附件上传',
    comType: 'upload',
    formKey: 'files',
    showFileList: true,
    uploadTip: '支持拓展名: .rar .zip .docx .pdf .jpg...',
    action: system.businessApi + '/file/newUpload'
  }
]

export const workOrderEditFormFields = [
  {
    span: 6,
    label: '工单类型',
    comType: 'el-input',
    formKey: 'workTypeName',
    editable: false
  },
  {
    span: 6,
    label: '创建人',
    comType: 'el-input',
    editable: false,
    formKey: 'creatorName'
  },
  {
    span: 6,
    label: '创建时间',
    comType: 'el-input',
    editable: false,
    formKey: 'createDate'
  },
  {
    span: 6,
    label: '期望完成时间',
    labelWidth: '100px',
    comType: 'el-input',
    editable: false,
    formKey: 'targetTime'
  },
  {
    span: 6,
    label: '优先级',
    comType: 'select',
    editable: false,
    formKey: 'workLevel',
    options: WorkOrderLevelList
  },
  {
    span: 18,
    label: '处理建议',
    comType: 'el-input',
    editable: false,
    formKey: 'processSuggestion'
  },
  {
    span: 24,
    label: '问题描述',
    comType: 'el-input',
    editable: false,
    formKey: 'remark'
  },
  {
    span: 24,
    label: '附件',
    comType: 'upload',
    formKey: 'files',
    showFileList: true,
    editable: false,
    uploadTip: '支持拓展名: .rar .zip .docx .pdf .jpg...',
    action: system.businessApi + '/file/newUpload'
  }
]
