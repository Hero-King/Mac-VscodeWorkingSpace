<script setup lang="ts">
const aa = 12
</script>

<template>
  <div>
    <h2>组件通信</h2>
    <ul>
      <li>props</li>
      <li>自定义事件</li>
      <li>事件总线 vue3使用第三方 mitt</li>
      <li>
        组件v-model 默认情况下，v-model 在组件上都是使用 modelValue 作为 prop，并以
        update:modelValue 作为对应的事件 调整成title: v-model:title="bookTitle"
      </li>
      <li>useAttrs() 返回组件的未声明的参数和事件 (vue3把$attrs和$listeners统一合并到$attrs中)</li>
      <li>
        使用ref和$parent (子组件需要使用defineExpose({})暴露内部变量 方法不需要暴露;可以直接使用 )
      </li>
      <li>provide/inject</li>
      <li>pinia</li>
    </ul>
  </div>
</template>
