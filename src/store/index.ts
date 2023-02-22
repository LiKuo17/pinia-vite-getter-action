import { defineStore  } from 'pinia'
import { Names  } from './store-name'

type User = {
    user:string,
    age:number
}

let result:User = {
    user: 'xiaoli',
    age: 999
}

const login = ():Promise<User> => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                user: "飞机",
                age:111111111
            })
        },2000)
    })
}

export const useTestStore = defineStore(Names.TEST,{
    state: () => {
        return {
            user:<User>{},
            name: "222"
        }
    },

    getters:{
        newName():string{
            return `$-${this.name}`
        }
    },

    actions: {
        //同步写法
        // setUser(){
        //     this.user = result
        // },
        //异步写法
        async setUser(){
            const result = await login()
            this.user= result
            this.setName('123321')
        },
        setName(name:string){
            this.name = name
        },
    }

})