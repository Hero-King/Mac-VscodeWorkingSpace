<template lang="">
  <div>
    <h3>KeepAliveTest</h3>
    <el-button @click="click">切换</el-button>
    <!-- 没有绑定key的话 对于路由到同一个组件时候 Vue会复用组件 只执行beforeRouteUpdate钩子-->
    <!-- <router-view></router-view> -->

    <!-- 绑定key的话 对于路由到同一个组件时候 Vue会判断key是否相同 不同执行beforeRouteUpdate -> beforecreated ->   created钩子 创建阶段生命周期钩子-->
    <!-- <router-view :key="$route.path"></router-view> -->

    <!-- 可以缓存KeepAliveTestItem的状态 -->
    <transition name="fade">
      <keep-alive :include="['KeepAliveTestItem']">
        <router-view :key="$route.path"></router-view>
      </keep-alive>
    </transition>

    <!-- 也可以缓存下来 无beforeRouteUpdate钩子-->
    <!-- <transition name="fade">
      <keep-alive :include="['KeepAliveTestItem']">
        <KeepAliveTestItem :key="$route.path"></KeepAliveTestItem>
      </keep-alive>
    </transition> -->
  </div>
</template>
<script>
import KeepAliveTestItem from './KeepAliveTestItem.vue'
export default {
  name: 'KeepAliveTest',
  components: {
    KeepAliveTestItem
  },
  data() {
    return {}
  },
  methods: {
    click() {
      const id = this.$route.params.id
      this.$router.push(id == 1 ? '2' : '1')
    }
  }
}
</script>
<style lang=""></style>
