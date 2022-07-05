<template>
  <div class="song-sheet-wrap">
    <div class="song-sheet__image" :style="{ 'background-image': `url(${data.image})` }">
      <span class="song-sheet__count">
        <i class="iconfont icon-bofang4"></i>
        {{ formatCount(data.playCount) }}
      </span>
    </div>
    <div class="song-sheet__info ellipsis2">
      <span class="extra" v-if="data.extraText">{{data.extraText}}</span>
      {{data.title}}
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'

  export default defineComponent({
    name: 'wymSongSheet',
    props: {
      data: {
        type: Object,
        default: () => {
          return {
              playCount: 0,
              image: '',
              title: ''
            }
        },
      },
    },
    components: {},
  })
</script>

<style scoped lang="scss">
  .song-sheet-wrap {
    position: relative;
    width: 100px;
    padding-bottom: 10px;
    display: inline-block;
    vertical-align: top;
    .song-sheet__image{
      width: 100px;
      height: 100px;
      border-radius: 10px;
      background-color: #fff;
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 5px;
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
    .song-sheet__info{
      width: 100px;
      white-space:normal;
      font-size: 14px;
      text-align: left;
      .extra{
        font-size: 10px;
        background-color: #FFEFEE;
        color: #E08A57;
        padding: 0 5px;
      }
    }
  }
</style>
