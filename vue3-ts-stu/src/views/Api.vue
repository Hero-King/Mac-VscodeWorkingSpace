<template>
  <div class="module">
    refObj: {{ refObj }}
    <div>姓名: {{ refObj.name }} -- 年龄: {{ refObj.age }} --</div>
    <el-button @click="refObj.age++">年龄++</el-button>
    <el-button @click="handleHobby(refObj)">爱好++</el-button>
    <el-button @click="refObj.hobby[0].value++">爱好[0].value++</el-button>
  </div>
  <div class="module">
    shallowRefObj: {{ shallowRefObj }}
    <div>姓名: {{ shallowRefObj.name }} -- 年龄: {{ shallowRefObj.age }} --</div>
    <el-button @click="shallowRefObj.age++">年龄++</el-button>
    <el-button @click="handleHobby(shallowRefObj)">爱好++</el-button>
    <el-button @click="shallowRefObj.hobby[0].value++">爱好[0].value++</el-button>
    <el-button @click="refreshShallow">强制触发shallowRef 更新</el-button>
    <el-button @click="changeShallowRefObj">改变shallowRefObj 指向</el-button>
  </div>
  <div class="module">
    reactiveObj: {{ reactiveObj }}
    <div>姓名: {{ reactiveObj.name }} -- 年龄: {{ reactiveObj.age }} --</div>
    <el-button @click="reactiveObj.age++">年龄++</el-button>
    <el-button @click="handleHobby(reactiveObj)">爱好++</el-button>
    <el-button @click="reactiveObj.hobby[0].value++">爱好[0].value++</el-button>
  </div>
  <div class="module">
    shallowReactiveObj: {{ shallowReactiveObj }}
    <div>姓名: {{ shallowReactiveObj.name }} -- 年龄: {{ shallowReactiveObj.age }} --</div>
    <el-button @click="shallowReactiveObj.age++">年龄++</el-button>
    <el-button @click="handleHobby(shallowReactiveObj)">爱好++</el-button>
    <el-button @click="shallowReactiveObj.hobby[0].value++">爱好[0].value++</el-button>
  </div>

  <div class="module">version : {{ version }}</div>

  <div class="module">
    <h2>computed</h2>
    refObj.hobby.lenght {{ hobbyLength }}

    <h3>能否缓存函数?</h3>
    first hobby name: {{ getHobbyName(0) }}
    <h3>结论: 不可以缓存函数</h3>
  </div>

  <div class="module">
    <h2>watch</h2>
  </div>

  <div class="module">
    <h2>Enum</h2>
    <el-select v-model="selected">
      <el-option v-for="item in options" :key="item.value" v-bind="item"></el-option>
    </el-select>
  </div>
</template>
<script name="Api" setup lang="ts">
import { version } from 'vue'
enum StatusEnum {
  Enable = 1,
  Disable = 0
}
const options = [
  {
    label: '启用',
    value: StatusEnum.Enable
  },
  {
    label: '禁用',
    value: StatusEnum.Disable
  }
]
const selected = ref<string>()

const refObj = ref({
  name: 'wjj',
  age: 26,
  hobby: [
    {
      name: '羽毛球',
      value: 24
    }
  ]
})
const handleHobby = (obj: any) => {
  obj.hobby.push({ name: '足球', vclue: 10 })
}
onUpdated(() => {
  console.log(' updated ')
})

/**
 * shallowRef 浅层 ref 的内部值将会原样存储和暴露
 * 只有 shallowRefObj.value 指向新的空间
 */
const shallowRefObj = shallowRef({
  name: 'wjj',
  age: 26,
  hobby: [
    {
      name: '羽毛球',
      value: 24
    }
  ]
})
const refreshShallow = () => {
  triggerRef(shallowRefObj)
}

const changeShallowRefObj = () => {
  shallowRefObj.value = JSON.parse(JSON.stringify(shallowRefObj.value))
}

const reactiveObj = reactive({
  name: 'wjj',
  age: 26,
  hobby: [
    {
      name: '羽毛球',
      value: 24
    }
  ]
})
const shallowReactiveObj = shallowReactive({
  name: 'wjj',
  age: 26,
  hobby: [
    {
      name: '羽毛球',
      value: 24
    }
  ]
})

console.log(refObj, shallowRefObj, reactiveObj, shallowReactiveObj)

// ===============computed
const hobbyLength = computed(() => {
  return refObj.value.hobby.length
})

/**
 * @deprecate
 * computed 不能缓存函数; 每次页面重新渲染 函数都会重新执行
 */
const getHobbyName = computed(() => (index: number) => {
  console.log('func computed run')
  return reactiveObj.hobby[index].name
})

// ===============watch
/**
 * 第一个参数: getter函数/ref/reactiveObj/以上组成的数组
 * 第二个参数: 是在发生变化时要调用的回调函数。这个回调函数接受三个参数：新值、旧值，以及一个用于注册副作用清理的回调函数。该回调函数会在副作用下一次重新执行前调用，可以用来清除无效的副作用
 *
 *
 * watchEffect优势: 回调立即执行;自动追踪依赖;只会追踪使用到的属性,避免递归追踪所有属性; 同步执行期间，才追踪依赖
 */
watch(
  reactiveObj,
  () => {
    console.log('watch reactiveObj run')
  },
  {
    flush: 'pre' // 调整回调函数的刷新时机 默认pre在组件更新之前被调用 post组件更新后调用
  }
)

watch(
  refObj,
  () => {
    console.log('watch refObj run')
  },
  {
    deep: true,
    flush: 'post'
  }
)

// 响应式工具 - 参见source reactive
</script>
