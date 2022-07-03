<template>
  <div class="song-sheet-wrap" :style="{ 'background-image': `url(${image})` }">
    <span class="song-sheet__count"
      ><i class="iconfont icon-bofang4"></i>{{ formatCount(playCount) }}</span
    >
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'

  export default defineComponent({
    name: 'songSheet',
    props: {
      playCount: {
        type: Number,
        default: 0,
      },
      image: {
        type: String,
        default: '',
      },
    },
    components: {},
  })
</script>

<style scoped lang="scss">
  .song-sheet-wrap {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: red;
    background-repeat: no-repeat;
    background-size: cover;
    .song-sheet__count {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 10px;
      -webkit-text-size-adjust: 100%;
      color: #fff;
      padding: 2px 5px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      .icon-bofang4 {
        font-size: 12px;
        margin-right: 2px;
      }
    }
  }
</style>
