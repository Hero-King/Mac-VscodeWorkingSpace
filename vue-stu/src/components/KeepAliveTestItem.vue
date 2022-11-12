<template lang="">
  <div @click="count++">KeepAliveTestItem id: {{ id }} count: {{ count }}</div>
</template>
<script>
export default {
  name: 'KeepAliveTestItem',
  props: {
    id: String
  },
  data() {
    return {
      count: 0
    }
  },
  // 没有路由指向组件时,不会执行路由钩子函数
  beforeRouteEnter(to, from, next) {
    console.log('KeepAliveTestItem beforeRouteEnter')
    next(function (vm) {
      // 对于keep-alive 缓存的组件, 如果使用key=$route.path去强制在渲染时候创建同组件名的多组件实例,在这里的vm只能拿到第一次组件实例;
      // 也就是说第二次创建出来的组件实例在这里拿不到
      console.log(vm._uid, 'beforeRouteEnter 中next')
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.$options.name, 'beforeRouteUpdate', this._uid)
    console.log(this.count)
    next()
  },
  beforeCreate() {
    console.log(this.$options.name, 'beforeCreate', this._uid)
  },
  created() {
    console.log(this.$options.name, 'created', this._uid)
  },
  updated() {
    console.log(this.$options.name, 'updated', this._uid)
  },
  activated() {
    console.log(this.$options.name, 'activated', this._uid)
  },
  deactivated() {
    console.log(this.$options.name, 'deactivated', this._uid)
  }
}
</script>
<style lang=""></style>
