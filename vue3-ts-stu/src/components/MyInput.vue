<template>
  <div>
    val为普通类型
    <p>请输入内容 <input v-model="inputVal" /></p>
  </div>
  <div>
    val为Object类型
    <p>请输入内容 <input v-model="inputObj.val" /></p>
  </div>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: String,
  objValue: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['update:modelValue', 'update:objValue'])
// 一般类型
const inputVal = useVModel(props, 'modelValue', emit)
// 对象需要使用 { passive: true, deep: true}
const inputObj = useVModel(props, 'objValue', emit, { passive: true, deep: true })
</script>
