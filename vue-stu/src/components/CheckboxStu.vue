<template>
  <el-checkbox-group v-model="checkList">
    <!-- el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。 -->
    <el-checkbox v-for="item in options" :key="item.label" :label="item.value">
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>
    
<script>
export default {
  name: 'CheckboxStu',
  data() {
    return {
      checkList: [],
      options: [
        {
          label: 'label111',
          value: 2
        },
        {
          label: 'label2',
          value: 1
        }
      ]
    }
  }
}
</script>