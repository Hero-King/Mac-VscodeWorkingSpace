import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  title: "欢迎来到个人博客",
  routes: routes,
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
});
