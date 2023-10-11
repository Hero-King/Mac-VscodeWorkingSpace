<template>
  <div class="module">count: {{ count }} <button @click="count++">count++</button></div>
</template>

<script lang="ts" setup name="SourceReactive">
debugger
var rawObj = { age: 26 }
var count = ref(0)
// reactive 函数调用 createReactiveObject(优先从weakmap中取代理对象, 没有则根据需要被代理的对象target的类型是数组/对象(则使用baseHandler) ? 还是set/map/WeakMap/weakset(则使用collectionHandler) 创建代理对象)
var reactiveObj = reactive(rawObj)
// ref 函数 创建一个 RefImpl实例,实例化时通过toReactive函数(普通类型返回原值, Object类型使用reactive()进行代理)赋值给_value属性 通过value属性的getter/setter拦截 实现响应式
var refObj = ref(rawObj)
// isRef(ref函数创建RefImpl实例时候指定实例 __v_isRef 为true, isRef判断对象这个标志位即可 )
console.log('isRef(0), isRef(1), isRef(rawObj), isRef(count), isRef(refObj), isRef(reactiveObj)')
// console.log(isRef(0), isRef(1), isRef(rawObj), isRef(count), isRef(refObj), isRef(reactiveObj))
// toRaw() 可以返回由 reactive()、readonly()、shallowReactive() 或者 shallowReadonly() 创建的代理对应的原始对象。
console.log(
  'toRaw(0), toRaw(1), toRaw(rawObj), toRaw(count), toRaw(refObj),  toRaw(reactiveObj), toRaw(reactiveObj) === rawObj'
)
// console.log(toRaw(0), toRaw(1), toRaw(rawObj), toRaw(count), toRaw(refObj), toRaw(reactiveObj), toRaw(reactiveObj) === rawObj)


</script>
