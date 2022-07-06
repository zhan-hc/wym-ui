<template>
  <h2>组件首页</h2>
  <div class="com-list">
    <router-link class="com-item" v-for="item in comList" :key="item.value" :to="`/demo/${item.value}`">{{item.label}}</router-link>
  </div>
</template>

<script lang='ts' setup>
  const comList = [
    { label: '弹窗组件', value: 'dialog' },
    { label: '加载组件', value: 'loading' },
    { label: '按钮组件', value: 'button' },
    { label: '歌单组件', value: 'song-sheet' },
    { label: '歌曲组件', value: 'song-item' },
    { label: '进度条组件', value: 'progress' },
    { label: '滚动容器组件', value: 'scroll-view' }
  ]
</script>

<style scoped lang='scss'>
  .com-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 2.5vw;
    .com-item{
      width: 150px;
      background: #ccc;
      margin-bottom: 20px;
      padding: 10px;
    }
  }
</style>