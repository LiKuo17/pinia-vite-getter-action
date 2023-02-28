import { createApp,toRaw } from 'vue'
import './style.css'
import { createPinia,PiniaPluginContext } from 'pinia'
import App from './App.vue'


type Options ={
    key?:string
}

const __piniaKey__:string = 'xiaoman'

const setStorage = (key:string, value:any) => {
    localStorage.setItem(key,JSON.stringify(value))
}

const getStorage = (key:string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}

const piniaPlugin = (options:Options) =>{
    
    return (content:PiniaPluginContext) =>{
        const { store } = content
        console.log(store);
        
        const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
        console.log(data);
        
        store.$subscribe(()=>{
            console.log(toRaw(store.$state),'store.$state');
            setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`,toRaw(store.$state))
        })
        console.log(store);
        
        return {...data}
    }
}

const store  = createPinia()
store.use(piniaPlugin({
    key:"pinia"
}))
const app = createApp(App)

app.use(store)

app.mount('#app')
