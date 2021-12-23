# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## package.json
初始的配置: 
```
{
  "private": true,
  "scripts": {
    "start": "umi dev",
    "build": "umi build",
    "postinstall": "umi generate tmp",
    "prettier": "prettier --write '**/*.{js,jsx,tsx,ts,less,md,json}'",
    "test": "umi-test",
    "test:coverage": "umi-test --coverage"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write"
    ]
  },
  "dependencies": {
    "@ant-design/pro-layout": "^6.5.0",
    "react": "17.x",
    "react-dom": "17.x",
    "umi": "^3.5.20"
  },
  "devDependencies": {
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0",
    "@umijs/preset-react": "1.x",
    "@umijs/test": "^3.5.20",
    "lint-staged": "^10.0.7",
    "prettier": "^2.2.0",
    "typescript": "^4.1.2",
    "yorkie": "^2.0.0"
  }
}

```
## 目录说明
.env 环境变量
mock 目录  存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。
Umi 在 .umirc.ts 或 config/config.ts 中配置项目和插件，支持 es6。 .umirc.ts 优先级更高

## 搭建步骤
- 安装normalize.css重置/统一浏览器样式 yarn add normalize.css 
- 安装bootstrap yarn add bootstrap (不使用)
- 添加配置文件,路由配置
- 添加layout目录,整体布局组件



