<template>

<div>{{ Test.user }}</div>
<div>{{ Test.name }}</div>

<button @click="change">change</button>
<div>{{ Test.user.age }}</div>
<button @click="add">change++</button>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import {useTestStore} from "./store"

const Test = useTestStore()

const change = () => {
  Test.setUser()
}
const add = () =>{
  Test.user.age ++
}

</script>
<style scoped lang='less'>

</style>