<template>
  <div>
    1212
    <SelectCom :options="options" v-model="selected" @change="change"></SelectCom>
  </div>
</template>

<script lang="ts" setup>
import SelectCom from '@/components/SelectCom/index.vue'

const options = [1, 2, 3].map((i) => ({ lable: i, value: i }))

const selected = ref(1)

const change = () => {
  console.log('change')
}
</script>
