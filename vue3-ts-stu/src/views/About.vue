<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      state.count值: {{ state.count }}
      <button @click="increment">+</button>
      computed stateCountMoreThen5 : {{ stateCountMoreThen5 }}
    </div>
    <div>
      objectRef.count值: {{ objectRef.count }}
      <button @click="objIncrement">+</button>
    </div>
    <div>
      <input type="text" v-model="value" ref="input" />
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

// 接收props
defineProps(['title'])
defineEmits(['enlarge-text'])

// js使用useAttrs 钩子获取attrs
const attrs = useAttrs()
/**
 * defineProps({
  title: String,
  likes: Number
})
ts: defineProps<{
  title?: string
  likes?: number
}>()
 * 
 */

// reactive() 只适用于对象 (包括数组和内置类型，如 Map 和 Set)
const state = reactive({ count: 0 })

const value = ref<string>('1111')
const input = ref(null)
// ref() 将传入参数的值包装为一个带 .value 属性

// ref() 让我们能创造一种对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用。这个功能很重要，因为它经常用于将逻辑提取到 组合函数 中。
const objectRef = ref({ count: 0 })

// 这是响应式的替换
objectRef.value = { count: 1 }

function increment() {
  state.count++
}

function objIncrement() {
  objectRef.value.count++
}

// computed() 方法期望接收一个 getter 函数，返回值为一个计算属性 ref。
const stateCountMoreThen5 = computed(() => {
  return state.count > 5
})
/**
 * computed setter
 * const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
 * 
 */

// watch 参数可以是不同形式的"数据源", 比如一个ref 一个响应式对象  一个getter函数 或多个数据源组成的数组
watch(value, (newVal: string) => {
  console.log('watch value run')
  if (newVal.indexOf('2') > -1) {
    console.log(newVal, '存在 `2` ')
  }
})

// 你不能直接侦听响应式对象的属性值 因为 watch() 得到的参数是一个 number
watch(objectRef.value.count, () => {
  // never log
  console.log('objectRef.value.count change')
})

watch(
  () => objectRef.value.count,
  () => {
    console.log('watch func objectRef.value.count change')
  }
)
console.log('aaa state value  objectRef', state, value, objectRef)

// 生命周期
onMounted(() => {
  console.log('onMounted')
  input.value.focus()
})
onUpdated(() => {
  console.log('onUpdated')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onRenderTracked(({ effect, target, type, key }) => {
  // console.log('onRenderTracked', effect, target, type, key)
})

// 注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用。
onRenderTriggered((e) => {
  const { effect, target, type, key, newValue, oldValue, oldTarget } = e
  // console.log('onRenderTriggered', e)
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
