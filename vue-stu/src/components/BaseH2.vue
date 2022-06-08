<template>
  <h2
    class="myh2"
    @click="log"
  >
    <slot>这是我自己定义的h2组件,点击会打印</slot>
  </h2>
</template>

<script>
export default {
  name: 'MyH2', // 指定组件的名字,如果不指定,Vue会自己推测驼峰命名的组件
  methods: {
    log() {
      console.log('myh2 组件被点击了')
    }
  }
}
</script>

<style scoped>
.myh2 {
  color: aqua;
}
.myh2::selection {
  background: plum;
}
</style>
