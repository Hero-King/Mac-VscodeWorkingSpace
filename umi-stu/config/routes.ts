export default [
  // component 可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起
  // 如果指向 src 目录的文件，可以用 @
  { exact: true, path: '/login', component: 'login' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/index', component: 'index' },
    ],
  },
];
