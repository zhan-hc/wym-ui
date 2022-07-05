<template>
  <h2>歌单</h2>
  <song-sheet :data="data"></song-sheet>
  <div></div>
  <song-sheet :data="data1"></song-sheet>
</template>

<script lang='ts' setup>
import {reactive, toRefs} from 'vue'
import songSheet from 'packages/song-sheet/index.vue'
const data = {
  playCount: 1500000,
  image: 'https://img2.baidu.com/it/u=176772482,3633072556&fm=253&fmt=auto&app=120&f=JPEG?w=647&h=500',
  title: '好听到可以单曲循环吖'
}
const data1 = {
  playCount: 150000000,
  image: 'https://img2.baidu.com/it/u=176772482,3633072556&fm=253&fmt=auto&app=120&f=JPEG?w=647&h=500',
  title: '好听到可以单曲循环吖',
  extraText: '最近常听'
}
</script>

<style scoped lang='scss'>
  
</style>