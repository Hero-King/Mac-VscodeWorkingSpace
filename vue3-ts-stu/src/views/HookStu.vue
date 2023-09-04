<template>
  <div>
    hook Stu
    <div>
      计数器 {{ count }}
      <button @click="count++">+</button>
      hooks Data: {{ data }}
    </div>

    <div class="module">
      useMouse
      <div>鼠标坐标: x: {{ x }} , y: {{ y }}</div>
    </div>

    <!-- <div class="module" ref="container">onClickOutside 不要点击这块区域 </div> -->

    <div class="module">
      useStorage: 数据直接同步到 storage
      <input v-model="inputVal" />
    </div>

    <div class="module">useVModel 解决父组件传递对象到子组件, 子组件中使用v-model绑定问题</div>
  </div>
</template>

<script setup lang="ts">
import {
  useLocalStorage,
  useMouse,
  usePreferredDark,
  useEventListener,
  onClickOutside,
  useStorage
} from '@vueuse/core'
import { useTest } from '@/hook/test'
const { x, y } = useMouse()
const count = ref(0)
const container = ref()
const inputVal = useStorage('inputVal', 'defaultVal')

// vueuse 中 副作用会在组件卸载时候自动清除, 你也可以手动接收hook返回值作为资源清理函数
useEventListener('click', () => {
  console.log('handle click')
})
// 不给hook传递参数 hook内部逻辑只会执行一次
// const { data } = useTest()

const { data } = useTest(count)

onClickOutside(container, () => alert('onClickOutside callback'))

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
