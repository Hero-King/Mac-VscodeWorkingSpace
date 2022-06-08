<template>
  <div>
    <TestEvent v-model="inputValue" @click="handleClick" title="我是Title" />
    <!-- 把原生事件绑定到自定义组件根元素 -->
    <TestEvent v-model="inputValue" @click.native="handleClick" />

    <!-- input事件是绑定在子组件的div上面的 -->
    <TestEvent @input.native="handleInput" />

    <!-- 想要把input事件绑定到input中? 使用$listeners 它是一个对象，里面包含了作用在这个组件上的所有监听器 -->
  </div>
</template>

<script>
import TestEvent from './TestEvent.vue'
export default {
  components: {
    TestEvent
  },
  data() {
    return {
      inputValue: ''
    }
  },
  mounted() {
    // document.body.appendChild(this.$el)
  },
  methods: {
    handleClick(e) {
      console.log('click:target', e.target)
    },
    handleInput(e) {
      console.log('input:currentTarget', e.currentTarget)
    }
  }
}
</script>
