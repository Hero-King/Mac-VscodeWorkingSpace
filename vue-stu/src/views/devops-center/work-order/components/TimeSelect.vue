<template>
  <div>
    <el-select v-model="selectedType" @change="setDateType" size="small">
      <el-option
        v-for="(op, index) in options"
        :key="op.value"
        :label="op.label"
        :value="op.value"
      ></el-option>
    </el-select>

    <!-- v-if="selectedType == 'custom'" -->
    <el-date-picker
      size="small"
      style="margin-left: 20px"
      v-model="dateValue"
      type="datetimerange"
      v-if="selectedType == 'custom'"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :format="datePickerFormat"
      :clearable="false"
    >
    </el-date-picker>
  </div>
</template>
<script>
let obj = {
  day: '今天',
  yesterday: '昨天',
  week: '本周',
  month: '本月',
  year: '本年',
  custom: '自定义'
}
export default {
  name: 'TimeSelect',
  props: {
    value: Array,
    format: {
      type: String,
      default: 'YYYY-MM-DD HH:mm:ss'
    },
    datePickerFormat: {
      type: String,
      default: 'yyyy-MM-dd HH:mm:ss'
    }
  },
  data() {
    this.options = Object.keys(obj).map((i) => ({ label: obj[i], value: i }))
    this.pickerOptions = {
      disabledDate(current) {
        return current && current > Date.now()
      }
    }
    return {
      selectedType: 'month'
    }
  },
  created() {
    if (this.selectedType) {
      this.setDateType()
    }
  },
  computed: {
    dateValue: {
      get() {
        return this.value || []
      },
      set(v) {
        // 拒绝清空数据
        if (!v) {
          return
        }
        // Date对象转换成字符串
        let newV
        if (v instanceof Date) {
          newV = this.$moment(v).format(this.format)
        } else if (Array.isArray(v) && v[0] instanceof Date) {
          newV = v.map((i) => this.$moment(i).format(this.format))
        }
        this.$emit('input', newV ?? v)
        this.$emit('change', newV ?? v)
      }
    }
  },
  methods: {
    setDateType() {
      let { format, selectedType } = this
      let beginDate,
        endDate = this.$moment().format(format)
      if (selectedType === 'yesterday') {
        beginDate = this.$moment().subtract(1, 'days').startOf('day').format(format)
        endDate = this.$moment().subtract(1, 'days').endOf('day').format(format)
      } else {
        beginDate = this.$moment().startOf(selectedType).startOf('day').format(format)
      }

      this.dateValue = [beginDate, endDate]
    }
  }
}
</script>
