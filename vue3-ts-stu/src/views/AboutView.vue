<script setup lang="ts">
import { reactive, ref } from 'vue'

// reactive() 只适用于对象 (包括数组和内置类型，如 Map 和 Set)
const state = reactive({ count: 0 })

const value = ref<string>('1111')
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

console.log('aaa');

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <div>
        count值: {{ state.count }}
        <button @click="increment">+</button>
      </div>
      <div>
        objectRef.count值: {{ objectRef.count }}
        <button @click="objIncrement">+</button>
      </div>
      <div>
        <input type="text" v-model="value" />
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
