import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// test
import style from './components/test.css?inline'
import moduleStyle from './components/style.module.css'
// style 是string类型的变量, 
console.log(typeof style,'style', "------", "moduleStyleExport", typeof moduleStyle, moduleStyle.module);  // 前面是string  后面moduleStyle 就是object


const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
