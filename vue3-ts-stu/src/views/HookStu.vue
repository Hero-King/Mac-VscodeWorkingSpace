<template>
  <div ref="fullscreen">
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

    <div class="module">
      useEventListener 轻松使用事件监听。在挂载时使用 addEventListener 注册，在卸载时自动使用
      removeEventListener 。
    </div>

    <div class="module">useFullscreen 全屏模式呈现特定元素（及其后代）的方法</div>
    <div class="module" @click="showSidebar = !showSidebar">
      useElementSize 获取元素尺寸大小响应式 ; useResizeObserver 监听元素内容区和边框尺寸的变化。
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver"
        target="_blank"
        rel="noreferrer"
        >ResizeObserver MDN</a
      >
      <div class="flex">
        <div :style="{ width: showSidebar ? '50%' : 0, transition: 'all 1s' }" class="border">
          sidebar
        </div>
        <div ref="content" class="flex-1 border">
          content width, height: {{ width }}, {{ height }}
        </div>
      </div>
    </div>
    <div class="module">useMutationObserver 监听元素样式,大小,子元素变化</div>
    <div class="module">
      useVModel
      <my-input v-model="parentInputVal" v-model:obj-value="parentInputObj"></my-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyInput from '@/components/MyInput.vue'
import {
  useLocalStorage,
  useMouse,
  usePreferredDark,
  useEventListener,
  onClickOutside,
  useStorage,
  useFullscreen,
  useElementSize,
  useResizeObserver,
  useTitle,
  useDebounceFn
} from '@vueuse/core'
import { useTest } from '@/hook/test'
const { x, y } = useMouse()
const fullscreen = ref<HTMLElement>()
const count = ref(0)
const container = ref()
const content = ref()
const inputVal = useStorage('inputVal', 'defaultVal')
const showSidebar = ref<boolean>(true)
const parentInputVal = ref('')
const parentInputObj = ref({
  val: 'init'
})

useTitle('hook')

// vueuse 中 副作用会在组件卸载时候自动清除, 你也可以手动接收hook返回值作为资源清理函数
useEventListener(window, 'resize', (e) => {
  console.log('handle resize', e)
})
useEventListener(
  window,
  'resize',
  useDebounceFn(
    (e) => {
      console.warn('useDebounceFn handle resize', e)
    },
    1000,
    { maxWait: 3000 }
  )
)

const { isSupported, isFullscreen, enter, exit, toggle } = useFullscreen(fullscreen)
// 不给hook传递参数 hook内部逻辑只会执行一次
// const { data } = useTest()

const { data } = useTest(count)

const { width, height } = useElementSize(content)
console.log('width, height', width, height)
useResizeObserver(content, (entries) => {
  console.log(entries, 'entries')
  const entry = entries[0]
  const { width, height } = entry.contentRect
})

onMounted(() => {
  console.log('isFullscreen', isFullscreen, 'isSupported', isSupported)
})

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
