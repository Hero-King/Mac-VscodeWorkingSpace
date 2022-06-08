<template>
  <div>
    <h2>datePicker 选中之后默认返回的值是 Date对象 Mon Aug 02 2021 00:00:00 GMT+0800 (中国标准时间)</h2>
    <div class="module">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
      />
    </div>

    <h2>datePicker 双向绑定可以支持的初始值格式</h2>
    <div class="module">
      字符串2020-01-01
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="选择日期"
      />
      Date.now
      <el-date-picker
        v-model="value3"
        type="date"
        placeholder="选择日期"
      />
      2020/02/05
      <el-date-picker
        v-model="value4"
        type="date"
        placeholder="选择日期"
        @change="logValue"
      />
      Tue Feb 11 2020 00:00:00 GMT+0800 (中国标准时间)
      <el-date-picker
        v-model="value5"
        type="date"
        placeholder="选择日期"
        @change="logValue"
      />
      moment对象
      <el-date-picker
        v-model="value6"
        type="date"
        placeholder="选择日期"
        @change="logValue"
      />
    </div>

    <h2>format 和 value-format</h2>
    <div class="module">
      <div>
        format格式化组件显示的样式
        <el-date-picker
          v-model="value10"
          format="yyyy 年 MM 月 dd 日"
          type="date"
          placeholder="选择日期"
        />
      </div>
      <div>
        value-format 将组件返回的值指定格式
        <el-date-picker
          v-model="value11"
          value-format="yyyy-MM-dd"
          format="yyyy 年 MM 月 dd 日"
          type="date"
          placeholder="选择日期"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatePickerStu',
  components: {},
  data() {
    return {
      value1: '',
      value2: '2020-01-01',
      value3: Date.now(),
      value4: '2020/02/05',
      value5: 'Tue Feb 11 2020 00:00:00 GMT+0800 (中国标准时间)',
      value6: this.$moment(),
      value10: '',
      value11: ''
    }
  },
  watch: {
    $data: {
      handler: function (newV, oldV) {
        console.log('$data数据变化了,:', newV)
      },
      deep: true
    }
  },
  methods: {
    logValue() {
      console.log(arguments)
    }
  }
}
</script>

<style lang="less" scoped>
// .module {
//   p {
//     > div {
//       padding: 3px;
//     }
//   }
// }
</style>
