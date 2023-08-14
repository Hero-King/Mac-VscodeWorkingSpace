<template>
  <div>
    <SelectCom :options="options" v-model="selected" @change="change"></SelectCom>
  </div>
</template>

<script lang="ts" setup name="SelectStu">
const SelectCom = defineAsyncComponent(() => import('@/components/SelectCom/index.vue'))
const options = [1, 2, 3].map((i) => ({ lable: i, value: i }))

const selected = ref(1)

const change = (v) => {
  console.log('change', v)
}
</script>
