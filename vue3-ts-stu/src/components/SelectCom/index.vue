<template>
  <el-select placeholder="Select">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script lang="ts" setup name="SelectCom">
defineProps(['options'])

// 通过 inheritAttrs 将其他参数透传给 el-select 当然这样写不够明确 如果el-select不是根元素/根组件了 就出问题了 还是写v-bind=$attrs吧
defineOptions({
  // inheritAttrs: false
  inheritAttrs: true
})
</script>
