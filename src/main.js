import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {lazyPlugin} from "@/directives/index.js";


const app = createApp(App)

app.use(createPinia())
app.use(router)
//实现图片懒加载
app.use(lazyPlugin)

app.mount('#app')
