<template>
  <div class="module">
    refObj: {{ refObj }}
    <div>姓名: {{ refObj.name }} -- 年龄: {{ refObj.age }} --</div>
    <button @click="refObj.age++">年龄++</button>
    <button @click="handleHobby(refObj)">爱好++</button>
    <button @click="refObj.hobby[0].value++">爱好[0].value++</button>
  </div>
  <div class="module">
    shallowRefObj: {{ shallowRefObj }}
    <div>姓名: {{ shallowRefObj.name }} -- 年龄: {{ shallowRefObj.age }} --</div>
    <button @click="shallowRefObj.age++">年龄++</button>
    <button @click="handleHobby(shallowRefObj)">爱好++</button>
    <button @click="shallowRefObj.hobby[0].value++">爱好[0].value++</button>
    <button @click="refreshShallow">强制触发shallowRef 更新</button>
  </div>
  <div class="module">
    reactiveObj: {{ reactiveObj }}
    <div>姓名: {{ reactiveObj.name }} -- 年龄: {{ reactiveObj.age }} --</div>
    <button @click="reactiveObj.age++">年龄++</button>
    <button @click="handleHobby(reactiveObj)">爱好++</button>
    <button @click="reactiveObj.hobby[0].value++">爱好[0].value++</button>
  </div>
</template>
<script name="Api" setup lang="ts">
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

const reactiveObj = ref({
  name: 'wjj',
  age: 26,
  hobby: [
    {
      name: '羽毛球',
      value: 24
    }
  ]
})

console.log(refObj, shallowRefObj, reactiveObj)
</script>
