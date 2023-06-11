# 搭建
使用Ant Design Pro 脚手架 + uni@4 

# Notes
## 环境变量

- 方式一 package.json内修改启动命令，以添加对应环境变量 `"start": "cross-env REACT_APP_ENV=dev UMI_ENV=dev umi dev",`



### 获取当前运行环境名称

REACT_APP_ENV 变量代表当前应用所处环境的具体名称 如 dev、test、pre、prod

非node环境还用环境变量, 需要在`config`导出默认 `defineConfig()` 时配置 `define{}`



## Mock

- 在根目录的 mock 中接入
- 在 src/page 中的 mock.ts 的文件中配置

```
export default {
  'GET /api/rule': [{ name: '12' }],
  'POST /api/rule': (req: Request, res: Response, u: string) => {
    res.send({
      success: true,
    });
  },
};
```































# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
