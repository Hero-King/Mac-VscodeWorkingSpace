<template>
  <div>
    hook Stu
    <div>
      计数器 {{ count }}
      <button @click="count++">+</button>
      hooks Data: {{ data }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  ref,
  computed,
  onMounted,
  onUpdated,
  watch,
  onUnmounted,
  onRenderTracked,
  onRenderTriggered,
  useAttrs
} from 'vue'
import { useTest } from '@/hook/test'
const count = ref('0')

// 不给hook传递参数 hook内部逻辑只会执行一次
// const { data } = useTest()

const {data} = useTest(count)

watch(
  () => data,
  (v) => {
    console.log('data change', v)
  },
  {
    deep: true
  }
)
</script>
