<template>
  <div>
    <el-col v-for="item in viewConf" :span="item.span" :offset="item.offset" :key="item.formKey" :class="colClass">
      <el-form-item :label="item.label" :label-width="item.labelWidth" :prop="item.formKey" :rules="item.rules" :class="item.formItemClass">
        <DictSelect v-bind="item" v-model="form[item.formKey]" v-on="item.events || {}"> </DictSelect>
      </el-form-item>
    </el-col>
  </div>
</template>
<script>
import DictSelect from './index.vue'
export default {
  name: 'SelectFormContent',
  inheritAttrs: false,
  components: {
    DictSelect
  },
  props: {
    conf: {
      type: Array,
      default: () => []
    },
    form: Object
  },
  computed: {
    viewConf() {
      return this.conf.filter((i) => {
        if (i.itemHidden) {
          if (typeof i.itemHidden == 'function') {
            return !i.itemHidden(this.form)
          } else {
            return !i.itemHidden
          }
        } else {
          return true
        }
      })
    }
  }
}
/**
 * example
 * this.conf = [
      {
        span: 6,
        label: '工厂选择',
        rules: [{ message: '必填' , required: true}],
        comType: 'select',
        formKey: 'factoryId',
        labelKey: 'locationName',
        valueKey: 'topParentId',
        forKey: 'topParentId',
        dictUrl: '/api/cms-cloud-service/locationTree/queryCacheAllTop',
        methods: 'post',
        resultFormat: (val) => {
          val.data.unshift({ locationName: '全部', topParentId: '全部', id: '全部' })
          return val.data
        },
        events: {
          change: this.queryList
        }
      },
      {
        span: 16,
        label: '工单状态',
        comType: 'checkbox',
        formKey: 'workPlanStatus',
        options: this.WorkOrderStatusListFilter,
        events: {
          change: this.queryList
        }
      }
    ]
 */
</script>
