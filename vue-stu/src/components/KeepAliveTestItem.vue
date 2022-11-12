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
    next()
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
