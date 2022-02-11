import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dumi-stu',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',

  // more config: https://d.umijs.org/config
  description: '我是配置文件描述',

  // 配置文档的 LOGO。 如果是使用本地图片，比如：/public/images/xxx.png，那么配置 /images/xx.png 引入即可。
  logo: 'https://github.githubassets.com/images/mona-loading-default.gif',

  // doc | site 用于设定文档的展现模式，默认为文档模式，配置为 site 时可无缝切换为站点模式。如果希望对导航菜单项展示的文本和顺序，可参考 frontmatter 配置中的 nav 配置项。
  // mode: 'site',

  // 配置 dumi 嗅探的文档目录，dumi 会尝试在配置的目录中递归寻找 markdown 文件，默认值为 docs 目录、src 目录（普通项目），如果环境为 lerna 项目，则 src 目录变为 packages/pkg/src 目录，通常不需要配置，除非自动嗅探出现了『误伤』
  // includes: ['docs', 'src'] or ['docs', 'packages/pkg/src']

  devServer: {
    port: 8000
  }
});
