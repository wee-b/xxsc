import '@/styles/common.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { componentPlugin } from '@/components'
import App from './App.vue'
import router from './router'
import {lazyPlugin} from "@/directives/index.js";

const app = createApp(App)
const pinia = createPinia()

// 应用持久化插件到pinia实例
pinia.use(piniaPluginPersistedstate)

// 使用已经配置好的pinia实例
app.use(pinia)
app.use(router)
// 实现图片懒加载
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')