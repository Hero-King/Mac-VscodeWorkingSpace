import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/login'
import Home from '../components/Home.vue'
import Form from '../components/form.vue'
import NProgress from 'nprogress'

Vue.use(Router)

const router = new Router({
  // https://router.vuejs.org/zh/api/#router-%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9
  mode: 'history', // 配置路由模式 "hash" | "history" | "abstract"
  base: '/app', // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"

  /**
   * 滚动行为
   * 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。
   * vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。
   * @param {*} to
   * @param {*} from
   * @param {*} savedPosition
   * @returns { x: number, y: number } or { selector: string, offset? : { x: number, y: number }} (offset 只在 2.6.0+ 支持)
   */
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    console.log(arguments)
    return { y: 0, x: 0 }
  },
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld', // 命名路由
      props: { author: 'wangjj' }, // 传递props给路由组件
      component: () =>
        import(/* webpackChunkName: "hello" */ '../components/HelloWorld.vue'),
      // 定义路由元信息 在路由信息中就会有meta字段
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/lazy',
      name: 'Lazy',
      // 异步组件 会生成单独的文件 路由到组件时候去请求加载
      component: resolve => require(['../components/lazy.vue'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'form',
          component: Form
        },
        {
          path: 'hello'
          // component: HelloWorld
        }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/login') return next()
  let token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
  NProgress.done()
})

router.afterEach((to, from) => {
})

export default router
