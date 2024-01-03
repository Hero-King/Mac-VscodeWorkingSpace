# vue3-ts-stu

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 依赖

### threejs

```shell
npm i --save-dev three
npm i --save-dev @types/three
```

### blender

#### 软件基础使用(章节 23)

变换中批量操作 xyz: 鼠标选中 x 后下下滑选中 yz

旋转缩放物体时, 鼠标离物体中心点越近越灵敏, 远离中心点越缓慢,也可以按住 shift 键缓慢`变换`
layout 物体吸附功能可以将选中的物体快速移动到指定位置

快捷键

- t 左侧工具栏显隐
- n 右侧工具栏显隐
- 视角切换: 右上角三维坐标系单击拖动/ 按住鼠标滚轮、shift + 滚轮
- 相机切换: 三维坐标系下方切换相机类型
- 调整摄像机位置: 右侧工具栏-视图-锁定摄像机到视图方位
- ` 切换视图
- x 删除物体
- tab 切换物体模式/编辑模式
- shift + 鼠标右键 游标移动
- shift + s 游标/选中项/活动项吸附功能
- ctrl + j 物体合并
- 编辑模式 => 网格 => 分离物体
- 建立子父级: 选中多个物体后 => 物体 => 父级 (最后选中的物体为父级) 或者 在场景几何中 shift+拖拽
- 清除父子关系: 选中子物体 => 物体 => 父级 => 清空/清空并保持变换结果
- 视图叠加层 用于控制辅助线/辅助信息展示隐藏
- 平滑着色(看着更光滑), 默认是平直着色, 如果出现棱角不清可设置法向 自动光滑
- 着色方式: 线框/实体/材质预览/渲染 , 选择是否透视

#### 插件

安装插件: 编辑 => 偏好设置 => 插件 => 曲线和网格 Extra Objects
