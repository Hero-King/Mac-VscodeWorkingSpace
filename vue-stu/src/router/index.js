import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import CheckboxStu from '../components/CheckboxStu'
import Form from '../components/FormStu.vue'
import UploadStu from '../components/uploadStu.vue'
import SelectStu from '../components/SelectStu.vue'
import ScssStu from '../components/ScssStu.vue'
import DraggableStu from '../components/DraggableStu'
import SheetJsStu from '../components/SheetJsStu'
import Bar from '../components/echart/Bar'
import LoadingStu from '../components/LoadingStu'
import NProgress from 'nprogress'
// 路由懒加载
const HelloWorld = () => import(/* webpackChunkName: "hello" */ '../components/HelloWorld.vue')

Vue.use(Router)
console.log(process.env);
const router = new Router({
  // https://router.vuejs.org/zh/api/#router-%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9
  mode: 'history', // 配置路由模式 "hash" | "history" | "abstract"
  // base: '/app', // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"
  // base: '/absproxy/8000/',
  base: process.env.BASE_URL,

  /**
   * 滚动行为
   * 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。
   * vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。
   * @param {*} to
   * @param {*} from
   * @param {*} savedPosition
   * @returns { x: number, y: number } or { selector: string, offset? : { x: number, y: number }} (offset 只在 2.6.0+ 支持)
   */
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    return { y: 0, x: 0 }
  },
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld', // 命名路由
      props: { author: 'wangjj' }, // 传递props给路由组件
      component: HelloWorld,
      // 定义路由元信息 在路由信息中就会有meta字段
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/lazy',
      name: 'Lazy',
      // 异步组件 会生成单独的文件 路由到组件时候去请求加载
      component: resolve => require(['../components/Lazy.vue'], resolve),
      beforeEnter: (to, from,next) => {
        console.log("lazy route beforeEnter")
        next()
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 大屏
    {
      path: '/deliveryMonitor',
      component: () => import(/* webpackChunkName: "Monitor" */ '@/views/screen-monitor/delivery-monitor/index'),
      hidden: true
    },
    {
      path: '/planMonitor',
      component:  () => import(/* webpackChunkName: "Monitor" */'@/views/screen-monitor/plan-monitor/index'),
      hidden: true
    },
    {
      path: '/EfficiencyMonitor',
      component:  () => import(/* webpackChunkName: "Monitor" */'@/views/screen-monitor/efficiency-monitor/index'),
      hidden: true
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log("route beforeEnter")
        next()
      },
      children: [
        {
          path: 'form',
          component: Form
        },
        {
          path: 'select',
          component: SelectStu
        },
        {
          path: 'bar',
          component: Bar
        },
        {
          path: 'ScssStu',
          component: ScssStu
        },
        {
          path: 'checkbox',
          component: CheckboxStu
        }, {
          path: 'upload',
          component: UploadStu
        },
        {
          path: 'hello',
          component: HelloWorld
        },
        {
          path: 'draggable',
          component: DraggableStu
        },
        {
          path: 'sheetjs',
          component: SheetJsStu
        },
        {
          path: 'datePicker',
          component: resolve => require(['../components/DatePickerStu.vue'], resolve)
        }, {
          path: 'loadingstu',
          component: LoadingStu
        }, {
          path: 'VueStu',
          component: resolve => require(['@/views/vuestu/'], resolve)
        }
      ]
    }
  ]
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   if (to.path === '/login') return next()
//   let token = window.sessionStorage.getItem('token')
//   if (!token) return next('/login')
//   next()
//   NProgress.done()
// })

// 从/home -> /lazy 看路由钩子的顺序
router.beforeEach((to, from, next) => {
  console.log("router.beforeEach", "from", from, ";", "to:", to);
  next()
})

router.afterEach((to, from) => {
  console.log("router.afterEach", "from", from, ";", "to:", to);
})

export default router
