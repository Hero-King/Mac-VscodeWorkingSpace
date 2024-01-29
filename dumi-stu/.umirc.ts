import { defineConfig } from 'dumi';

export default defineConfig({
  title: '财务共享组件文档',
  // description: "财务共享组件文档",
  logo: 'http://fssc-t.svolt.cn//react-basic-web/fcny.ico',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // publicPath: process.env.NODE_ENV === 'production' ? '/foo/' : '/',
  publicPath: '/books/',
  base: "/books/",
  // more config: https://d.umijs.org/config
  dynamicImport: {
    loading: '@/Loading',
  }
});
