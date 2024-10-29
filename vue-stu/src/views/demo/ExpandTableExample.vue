<template>
  <div>
    <expand-table
      ref="dimensionTable"
      :columns="dimensionColumn"
      :data="dimensionList"
    />
    <ExpandTable2 />
  </div>
</template>

<script>
import ExpandTable from '@/components/expandtable/index'
import ExpandTable2 from '@/components/expandtable/index2'
export default {
  components: {
    ExpandTable,
    ExpandTable2
  },
  data() {
    return {
      dimensionTypeOptions: [
        {
          label: 111,
          value: 111
        },
        {
          label: 222,
          value: 222
        }
      ],
      dimensionColumn: [
        {
          prop: 'dimensionType',
          label: '量纲类型',
          render: (h, context, { row, column }) => (
            <el-select v-model={row[column.property]} placeholder='请选择'>
              {this.dimensionTypeOptions.map((item) => (
                <el-option key={item.value} label={item.label} value={item.value}></el-option>
              ))}
            </el-select>
          )
        },
        {
          prop: 'dimensionYear',
          label: '',
          rules: [{ required: true, message: '请输入', trigger: 'blur' }],
          headerRender: (h, context, scope) => {
            return <el-input value={scope.column.label} onInput={(v) => context.handleHeaderChange(v, scope.$index)} placeholder='请输入年份' />
          },
          render: (h, context, { row, column }) => <el-input v-model={row[column.property]} placeholder='请输入' />
        }
      ],
      dimensionList: [
        {
          dimensionType: '111',
          2022: '哈哈哈哈',
          2023: '哈哈哈哈22'
        }
      ]
    }
  }
}
</script>
