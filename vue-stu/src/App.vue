<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.app = this
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
    console.log('App', 'beforeRouteEnter')
    next(function (vm) {
      console.log(vm._uid, 'App beforeRouteEnter 中next')
    })
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.$options.name, 'beforeRouteLeave', this._uid)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.$options.name, 'beforeRouteUpdate', this._uid)
    next()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
