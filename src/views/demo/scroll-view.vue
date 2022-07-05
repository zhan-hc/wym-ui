<template>
  <h2>横向滚动容器</h2>
  <scroll-view>
    <div class="wrap">
      <songSheet class="songSheet"/>
    <songSheet class="songSheet" :data="{title:'我是歌单'}"/>
    <songSheet class="songSheet"/>
    <songSheet class="songSheet"/>
    <songSheet class="songSheet"/>
    <songSheet class="songSheet"/>
    </div>
    
  </scroll-view>
</template>

<script lang='ts' setup>
import {reactive, toRefs} from 'vue'
import scrollView from 'packages/scroll-view/index.vue'
import songSheet from 'packages/song-sheet/index.vue'
</script>

<style scoped lang='scss'>
  .songSheet{
    margin-right: 20px;
  }
</style>