<template>
  <h1>loading</h1>
  <div>
    <button @click="showLoading('normal')">显示默认loading</button>
  </div>
  <div>
    <button @click="showLoading('music')">显示音乐类型loading</button>
  </div>
  <button @click="hideLoading">隐藏默认loading</button>
</template>

<script lang='ts' setup>
import {reactive, toRefs} from 'vue'
import loading from 'packages/loading'

const showLoading = (type: string) => {
  loading({}).hide()
  loading({type}).show()
}

const hideLoading = () => {
  loading({}).hide()
}
</script>

<style scoped lang='scss'>
  
</style>