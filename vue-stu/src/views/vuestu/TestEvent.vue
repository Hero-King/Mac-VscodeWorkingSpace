<template>
  <div class="child">
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'TestEvent',
  // 默认情况下父作用域的不被认作 props 的 attribute 绑定 (attribute bindings) 将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上。设置下面属性为false 阻止默认行为
  inheritAttrs: false,
  props: ['label', 'value'],
  mounted() {
    console.log('this.$listeners', this.$listeners, '$attrs', this.$attrs)
  }
}
</script>
