<template>
  <h2>横向滚动容器</h2>
  <wym-scroll-view>
    <wym-song-sheet class="songSheet" :data="sheetData" />
    <wym-song-sheet class="songSheet" :data="sheetData1" />
    <wym-song-sheet class="songSheet" :data="sheetData" />
    <wym-song-sheet class="songSheet" :data="sheetData1" />
    <wym-song-sheet class="songSheet" :data="sheetData" />
  </wym-scroll-view>
</template>

<script lang="ts" setup>
const sheetData = {
  title: '今天从《离开》听起|私人雷达',
  playCount: 11980000000,
  imageUrl: 'https://img0.baidu.com/it/u=1969172596,1171928638&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=430'
}
const sheetData1 = {
  title: '民谣 | 去见想见的人',
  subTitle: '民谣',
  playCount: 1930000,
  imageUrl: 'https://img2.baidu.com/it/u=774321880,3296487844&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
}
</script>

<style scoped lang="scss">
  .songSheet {
    margin-right: 20px;
  }
</style>
