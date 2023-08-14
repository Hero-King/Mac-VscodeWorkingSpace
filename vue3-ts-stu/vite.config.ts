import { fileURLToPath, URL } from 'node:url'
import Pages from 'vite-plugin-pages'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 根据目录自动生成路由
    Pages({
      dirs: 'src/views',
      exclude: ['**/components/*.vue']
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'], // 自动导入的依赖库数组
      dts: './auto-imports.d.ts', // 自动导入类型定义文件路径
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
