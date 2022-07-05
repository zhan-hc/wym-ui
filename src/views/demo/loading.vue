<template>
  <h1>loading</h1>
  <div>
    <button @click="showLoading('normal')">显示默认loading</button>
  </div>
  <div>
    <button @click="showLoading('primary')">显示主要loading</button>
  </div>
  <div>
    <button @click="showLoading('music')">显示音乐类型loading</button>
  </div>
</template>

<script lang='ts' setup>
import {reactive, toRefs} from 'vue'
import loading from 'packages/loading'


const showLoading = (type: string) => {
  loading({type,position: 'center'}).show()
}
</script>

<style scoped lang='scss'>
  button{
    margin-bottom: 10px;
  }
</style>