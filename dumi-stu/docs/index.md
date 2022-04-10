
## Hello
dumi，中文发音嘟米，是一款为组件开发场景而生的文档工具，与 father 一起为开发者提供一站式的组件开发体验，father 负责构建，而 dumi 负责`组件开发`及`组件文档`生成。

## 搭建
```bash
npx @umijs/create-dumi-lib        # 初始化一个文档模式的组件库开发脚手架
```
安装依赖
```bash
yarn install
```
启动开发环境
```bash
npm start
```

## 安装插件
在 markdown 代码块中编写代码会失去类型提示和校验，不能像直接在 tsx 中那样丝滑，因此我们推荐使用 VSCode 插件 TS in Markdown

## 代码渲染
在```jsx 后面添加pure 可以不执行代码 直接显示代码
添加 /** inline: true */ 直接嵌入文档
设置 debug 为 true，则该 demo 仅在开发环境下展示、且会有一个特殊标记
设置 iframe 为 true，将会使用 iframe 渲染 demo，可实现和文档的完全隔离，通常用于布局型组件，此时 compact 配置默认为 true

## 自定义导航、分组和标题
如果希望控制导航/分组/页面标题的生成，可以通过在 Markdown 文件顶部编写 FrontMatter 实现

## npm包创建步骤
- 注册npm仓库账号, 比如`npmjs.com`,打包发布时候请切换同仓库,建议使用nrm 管理仓库
- 组件库打包管理工具: father Webpack Rollup(react vue redux都是用的这) create-react-app类似的脚手架等
- 打包输出的模块格式 commonjs(包目录一般为lib) ES UMD(兼容各种模式)
