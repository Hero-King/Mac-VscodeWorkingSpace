import './assets/main.css'
import ElementPlus, { ElSelect } from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// test
import style from './components/test.css?inline'
import moduleStyle from './components/style.module.css'
// style 是string类型的变量,
console.log(
  typeof style,
  'style',
  '------',
  'moduleStyleExport',
  typeof moduleStyle,
  moduleStyle.module
) // 前面是string  后面moduleStyle 就是object

const app = createApp(App)
app.use(ElementPlus)
// app.use(createPinia())
app.use(router)

console.log(app, 'app')
const clearDefault = {
  type: Boolean,
  default: true
}
/**
 * 修改组件props默认值
 * 方式一  ElSelect.props.clearable = clearDefault
 * 方式二  app._context.components.ElSelect.props.clearable = clearDefault
 */
app._context.components.ElSelect.props.clearable = clearDefault
app._context.components.ElCard.props.shadow.default = false;
app._context.components.ElLink.props.underline.default = false;
app._context.components.ElLink.props.type.default = 'primary';

app.mount('#app')
