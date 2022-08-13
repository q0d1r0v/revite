import { createApp } from 'vue'
import {createPinia} from "pinia"
import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes/routes"
import './style.css'
import App from './App.vue'

const pinia  = createPinia()
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
