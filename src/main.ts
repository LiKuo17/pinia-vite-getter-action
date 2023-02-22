import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'


const store  = createPinia()

const app = createApp(App)

app.use(store)

app.mount('#app')
