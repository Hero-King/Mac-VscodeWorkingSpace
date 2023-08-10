import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

export const useTest = (a?, b?) => {
  console.log('hook 入参:', a, b)
  console.log('useTest run ')
  const data = ref(-100)

  onMounted(() => {
    console.log('test hook mounted ')
  })

  // 接收响应式状态 响应式数据变化了 watchEffect会捕获到 并重新执行 给响应式数据data重新赋值
  watchEffect(() => {
    let val = a?.value

    setTimeout(() => {
      data.value = val * 10
    }, 500)
  })

  return {
    data
  }
}
