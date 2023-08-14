<template>
  <el-select v-bind="$attrs" placeholder="Select">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script lang="ts" setup name="SelectCom">
defineProps(['options'])
</script>
