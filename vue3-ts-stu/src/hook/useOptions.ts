import { Method } from 'axios'
import { ref, toRefs, shallowRef, onMounted } from 'vue'
import request from '/@/utils/request'

interface IUseOptions {
  url: string
  optionName: string
  labelKey?: string
  valueKey?: string
  param?: Object
  method?: Method | string
}

export const useOptions = (opts: IUseOptions[]) => {
  let result: any = {}
  let names = opts.map((i) => i.optionName)
  names.forEach((i) => {
    result[i] = shallowRef([])
  })

  onMounted(() => {
    opts.forEach((opt) => {
      request({
        url: opt.url,
        method: opt.method || 'get',
        params: opt.param
      }).then((res: any) => {
        result[opt.optionName].value = res.data.map((i: any) => ({
          ...i,
          label: i[opt.labelKey || 'label'],
          value: i[opt.valueKey || 'id']
        }))
      })
    })
  })

  return result
}
