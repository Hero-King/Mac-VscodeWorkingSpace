<template>
  <el-row>
    <el-col v-for="item in conf" :span="item.span" :key="item.formKey">
      <el-form-item
        :label="item.label"
        :label-width="item.labelWidth"
        :prop="item.formKey"
        :rules="item.rules"
      >
        <DictSelect v-bind="item" v-model="form[item.formKey]" v-on="item.events || []">
        </DictSelect>
      </el-form-item>
    </el-col>
  </el-row>
</template>
<script>
import DictSelect from './index.vue'
export default {
  name: 'SelectFormContent',
  components: {
    DictSelect
  },
  props: {
    conf: {
      type: Array,
      default: () => []
    },
    form: Object
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
