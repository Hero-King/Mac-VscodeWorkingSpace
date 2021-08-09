import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/login'
import Home from '../components/Home.vue'
import Form from '../components/form.vue'
import '../assets/global.css'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: "/login",
      name: "Login",
      component: Login
    }, {
      path: "/",
      redirect: "/login"
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: "form",
        component: Form
      },{
        path: "hello",
        component: HelloWorld
      }]
    },
    
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  let token = window.sessionStorage.getItem("token");
  if (!token) return next("/login")
  next()
})

export default router
