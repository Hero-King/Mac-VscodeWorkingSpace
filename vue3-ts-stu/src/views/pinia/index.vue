<template>
  <div>
    <h3>pinia stu</h3>
    <el-button type="primary" @click="countStore.count++"
      >countStore.count : {{ countStore.count }}</el-button
    >
    <el-button type="primary" @click="countStore.increment">解构之后的count {{ count }}</el-button>
    <el-button type="primary" @click="countStore.increment"
      >storeToRefs之后在解构之后的count {{ storeToRefsCount }}</el-button
    >
    <el-button type="primary" @click="basicStore.getList"
      >basicStore.routeLength {{ basicStore.routeLength }}</el-button
    >
    年纪: {{ basicStore.obj.age }}
    <el-button @click="changeAge">更改年纪</el-button>
  </div>
</template>
<script lang="ts" name="PiniaIndex" setup>
import { useBasicStore } from '@/stores/basic'
import { useCounterStore } from '@/stores/counter'

const basicStore = useBasicStore()
const countStore = useCounterStore()
console.log(basicStore, 'basicStore')
const { count } = countStore // countStore是reactive 基础类型数据解构会破坏响应式

const { count: storeToRefsCount } = storeToRefs(countStore)

setTimeout(() => {
  countStore.increment()
}, 1000)

const { obj } = basicStore
let { age } = obj
const changeAge = () => {
  //   basicStore.obj.age++   //ok
  //   obj.age++ // ok
  age++ // error  age已经丢失响应式了
}
</script>
<style lang="scss" scoped></style>
