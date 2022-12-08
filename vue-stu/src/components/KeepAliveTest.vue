<template lang="">
  <div>
    <h3>KeepAliveTest</h3>
    <el-button @click="click">切换</el-button>
    <!-- 没有绑定key的话 对于路由到同一个组件时候 Vue会复用组件 只执行beforeRouteUpdate钩子-->
    <!-- <router-view></router-view> -->

    <!-- 绑定key的话 对于路由到同一个组件时候 Vue会判断key是否相同 不同执行beforeRouteUpdate -> beforecreated ->   created钩子 创建阶段生命周期钩子-->
    <!-- <router-view :key="$route.path"></router-view> -->

    <!-- 可以缓存KeepAliveTestItem的状态 -->
    <!-- <transition name="fade">
      <keep-alive :include="['KeepAliveTestItem']">
        <router-view :key="$route.path"></router-view>
      </keep-alive>
    </transition> -->

    <!-- 也可以缓存下来 无beforeRouteUpdate钩子-->
    <!-- <transition name="fade">
      <keep-alive :include="['KeepAliveTestItem']">
        <KeepAliveTestItem :key="$route.path"></KeepAliveTestItem>
      </keep-alive>
    </transition> -->

    <KeepAliveTestItem :id="$route.path"></KeepAliveTestItem>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import KeepAliveTestItem from './KeepAliveTestItem.vue'

/**
 * 路由钩子总结:
 * 路由钩子总体顺序是从大到小 beforeEach > beforeEnter > beforeRouteEnter ,
 * 从外层父组件到内层组件,所有组件一个一个钩子执行(所有组件执行完 beforeRouteEnter 再执行所有组件 beforeRouteEnter 中next(vm回调))
 * 1. 在失活的组件里调用 beforeRouteLeave 守卫  如果从路由规则/aa/:id ( /aa/1 -> /aa/2) 没有出路由
 * 2. 调用全局的 beforeEach 守卫  只要路由切换就会执行 一般在这里面鉴权
 * 3. 在重用的组件里调用 beforeRouteUpdate 守卫 比如从路由规则/aa/:id ( /aa/1 -> /aa/2) 会复用组件, 从根组件一直往下找到叶子组件,复用的组件beforeRouteUpdate挨个执行
 * 4. 在路由配置里调用 beforeEnter  没出去的路由不会执行
 * 5. 解析异步路由组件。
 * 6. 在被激活的组件里调用 beforeRouteEnter
 * 7. 调用全局的 beforeResolve 守卫(2.5+)。
 * 8. 导航被确认。
 * 9. 调用全局的 afterEach 钩子
 * 10. 触发 DOM 更新。
 * 11. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
 *
 */
export default {
  name: 'KeepAliveTest',
  components: {
    KeepAliveTestItem
  },
  data() {
    return {}
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
  beforeRouteEnter(to, from, next) {
    console.log('KeepAliveTest', 'beforeRouteEnter')
    next(function (vm) {
      console.log(vm._uid, 'KeepAliveTest beforeRouteEnter 中next')
    })
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.$options.name, 'beforeRouteLeave', this._uid)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.$options.name, 'beforeRouteUpdate', this._uid)
    next()
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
