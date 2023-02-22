<template>

<div>{{ Test.user }}</div>
<div>{{ Test.name }}</div>
<div>{{ Test.newName }}</div>
<button @click="change">change</button>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import {useTestStore} from "./store"

const Test = useTestStore()

const change = () => {
  Test.setUser()
}

</script>
<style scoped lang='less'>

</style>