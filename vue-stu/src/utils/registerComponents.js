import DictSelect from '@/components/DictSelect'

const componentList = [DictSelect]

export default {
  install(Vue) {
    componentList.forEach((com) => {
      Vue.component(com.name, com)
    })
  }
}
