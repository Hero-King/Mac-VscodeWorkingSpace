import Vue from 'vue'
import Router from 'vue-router'

import DayjsStuVue from '@/views/common-utils-stu/DayjsStu.vue'
import ScssStuVue from '@/views/common-utils-stu/ScssStu.vue'
import FormStuVue from '@/views/elementui-stu/FormStu.vue'
import SelectStuVue from '@/views/elementui-stu/SelectStu.vue'
import DatePickerStuVue from '@/views/elementui-stu/DatePickerStu.vue'
import CheckboxStuVue from '@/views/elementui-stu/CheckboxStu.vue'
import InputStuVue from '@/views/elementui-stu/InputStu.vue'
import UploadStuVue from '@/views/elementui-stu/UploadStu.vue'
import TableStuVue from '@/views/elementui-stu/TableStu.vue'
import DescriptsStuVue from '@/views/elementui-stu/DescriptsStu.vue'
import DraggableStuVue from '@/views/vuestu/DraggableStu.vue'
import SheetJsStuVue from '@/views/common-utils-stu/SheetJsStu.vue'
import EchartStuVue from '@/views/common-utils-stu/echart/index.vue'
import PerfectScrollbarStuVue from '@/views/common-utils-stu/PerfectScrollBar.vue'
import G6StuVue from '@/views/common-utils-stu/G6Stu/index.vue'
import VueLsVue from '@/views/vuestu/VueLsStu.vue'
import RenderStuVue from '@/views/vuestu/RenderStu.vue'
import VueStu from '@/views/vuestu/index.vue'
import VueLazyloadStuVue from '@/views/vuestu/VueLazyLoadStu.vue'
import VueClipboardStuVue from '@/views/vuestu/VueClipboardStu.vue'
import LoadingStuVue from '@/views/elementui-stu/LoadingStu.vue'
import EditTableDemo from '@/views/demo/EditTableDemo/index.vue'
import DictSelectDemo from '@/views/demo/DictSelectDemo/index.vue'
import ExpandTableExample from '@/views/demo/ExpandTableExample.vue'
import AvueCrudDemo from '@/views/demo/AvueCrud/index.vue'
import Login from '@/views/home/Login.vue'
import Home from '@/views/home/index.vue'
import KeepAliveTest from '@/components/KeepAliveTest.vue'
import KeepAliveTestItem from '@/components/KeepAliveTestItem.vue'
import JsRenderExampleVue from '@/views/demo/JsRenderExample.vue'
// 路由懒加载
const HelloWorld = () => import(/* webpackChunkName: "HelloWorld" */ '../views/home/HelloWorld.vue')

Vue.use(Router)

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
      }
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
      component: () => import(/* webpackChunkName: "Monitor" */ '@/views/screen-monitor/plan-monitor/index'),
      hidden: true
    },
    {
      path: '/EfficiencyMonitor',
      component: () => import(/* webpackChunkName: "Monitor" */ '@/views/screen-monitor/efficiency-monitor/index'),
      hidden: true
    },

    {
      path: '/',
      redirect: '/home/HelloWorld'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log('route beforeEnter')
        next()
      },
      children: [
        {
          path: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: 'lazy',
          name: 'Lazy',
          // 异步组件 会生成单独的文件 路由到组件时候去请求加载
          component: (resolve) => require(['@/views/home/Lazy.vue'], resolve),
          beforeEnter: (to, from, next) => {
            console.log('lazy route beforeEnter')
            next()
          }
        },

        {
          path: '/work-order/statistics',
          component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/work-order/statistics')
        },
        {
          path: '/work-order/query',
          component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/work-order/query')
        },
        // 运维图谱
        {
          path: '/knowledge-base/graphTopology',
          component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/knowledge-base/graphTopology')
        },
        // 运维记录
        {
          path: '/knowledge-base/takeNotes',
          component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/knowledge-base/takeNotes')
        },
        // 标准知识库
        {
          path: '/knowledge-base/standard',
          component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/knowledge-base/standard')
        },
        {
          path: '/device-management/equipmentAccount',
          component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/device-management/equipmentAccount')
        }
      ]
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Home,
      children: [
        {
          path: 'editTableDemo',
          component: EditTableDemo
        },
        {
          path: 'DictSelectDemo',
          component: DictSelectDemo
        },
        {
          path: 'ExpandTableExample',
          component: ExpandTableExample
        },
        {
          path: 'AvueCrudDemo',
          component: AvueCrudDemo
        },
        {
          path: 'JsRenderExample',
          component: JsRenderExampleVue
        }
      ]
    },
    {
      path: '/common-utils-stu',
      name: 'commonUtilsStu',
      component: Home,
      children: [
        {
          path: 'DayjsStu',
          component: DayjsStuVue
        },
        {
          path: 'PerfectScrollbarStu',
          component: PerfectScrollbarStuVue
        },
        {
          path: 'SheetJsStu',
          component: SheetJsStuVue
        },
        {
          path: 'ScssStu',
          component: ScssStuVue
        },
        {
          path: 'EchartStu',
          component: EchartStuVue
        },
        {
          path: 'G6Stu',
          component: G6StuVue
        }
      ]
    },
    {
      path: '/elementui-stu',
      name: 'ElementuiStu',
      component: Home,
      children: [
        {
          path: 'FormStu',
          component: FormStuVue
        },
        {
          path: 'DatePickerStu',
          component: DatePickerStuVue
        },
        {
          path: 'CheckboxStu',
          component: CheckboxStuVue
        },
        {
          path: 'InputStu',
          component: InputStuVue
        },
        {
          path: 'UploadStu',
          component: UploadStuVue
        },
        {
          path: 'SelectStu',
          component: SelectStuVue
        },
        {
          path: 'TableStu',
          component: TableStuVue
        },
        {
          path: 'DescriptsStu',
          component: DescriptsStuVue
        },
        {
          path: 'LoadingStu',
          component: LoadingStuVue
        }
      ]
    },
    {
      path: '/vuestu',
      name: 'vuestu',
      component: Home,
      children: [
        {
          path: 'VueStu',
          component: VueStu
        },
        {
          path: 'VueLs',
          component: VueLsVue
        },
        {
          path: 'DraggableStu',
          component: DraggableStuVue
        },
        {
          path: 'RenderStu',
          component: RenderStuVue
        },
        {
          path: 'VueClipboardStu',
          component: VueClipboardStuVue
        },
        {
          path: 'VueLazyloadStu',
          component: VueLazyloadStuVue
        },
        {
          path: 'keepalive',
          component: KeepAliveTest,
          redirect: 'keepalive/1',
          children: [
            {
              path: ':id',
              component: KeepAliveTestItem,
              props: true
            }
          ]
        }
      ]
    },
    {
      path: '/mxLoanCase',
      name: 'mxLoanCase',
      component: Home,
      children: [
        {
          path: 'mxLoanCase',
          component: () => import(/* webpackChunkName: "mxLoanCase" */ '@/views/mxLoanCase/CaseDetail.vue')
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
  console.log('router.beforeEach', 'from', from, ';', 'to:', to)
  next()
})

router.afterEach((to, from) => {
  console.log('router.afterEach', 'from', from, ';', 'to:', to)
})

export default router
