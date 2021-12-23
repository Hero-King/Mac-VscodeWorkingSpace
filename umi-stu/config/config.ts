import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  title: "欢迎来到个人博客",
  routes,
  // base: '',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
});
