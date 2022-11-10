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
  beforeRouteEnter(to, from, next) {
    console.log('KeepAliveTestItem beforeRouteEnter')
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('KeepAliveTestItem beforeRouteUpdate')
    console.log(this.count)
    next()
  },
  beforeCreate() {
    console.log('KeepAliveTestItem beforeCreate')
  },
  created() {
    console.log('KeepAliveTestItem created')
  },
  activated() {
    console.log('KeepAliveTestItem 我是activated钩子')
  },
  deactivated() {
    console.log('KeepAliveTestItem 我是deactivated钩子')
  }
}
</script>
<style lang=""></style>
