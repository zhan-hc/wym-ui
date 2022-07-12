<template>
  <h2>歌曲</h2>
  <wym-song-item :data="data"></wym-song-item>
</template>

<script lang="ts" setup>
  const data = {
    imageUrl:
      'https://img2.baidu.com/it/u=176772482,3633072556&fm=253&fmt=auto&app=120&f=JPEG?w=647&h=500',
    title: '孤勇者',
    authors: '陈奕迅',
    desc: '儿童最爱听',
    subTitle: '超72%人播放',
  }
</script>

<style scoped lang="scss"></style>
