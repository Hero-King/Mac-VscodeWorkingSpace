import { createRouter, createWebHistory } from 'vue-router'
// vite-plugin-pages 插件生成
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
