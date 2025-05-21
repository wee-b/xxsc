import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {getCate} from "@/apis/testApi.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)

getCate().then(res=>{
    console.log(res);
})

app.mount('#app')
