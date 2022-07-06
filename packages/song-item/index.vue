<template>
  <div class="wy-song-item-wrap" @click="handleChange">
    <div class="wy-song-item__image" >
      <img :src="data.imageUrl" alt="歌曲图片"/>
      <i class="iconfont icon-bofang2"></i>
    </div>
    <div class="wy-song-item__info wym-1px-b">
      <div class="wy-song-item__info-title ellipsis">
        {{data.title}}-<span class="wy-song-item__info-authors">{{data.authors}}</span>
      </div>
      <div class="wy-song-item__info-desc ellipsis">
        <span class="wy-song-item__info-subtitle" v-if="data.subTitle">{{data.subTitle}}</span>
        <span>{{data.desc}}</span>
        </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: 'wymSongItem',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
            imageUrl: '',
            title: '',
            authors: '',
            desc: '',
            subTitle: ''
          }
      },
    },
  },
  setup(props, ctx) {
    const handleChange = () => {
      ctx.emit('change')
    }
    return {
      handleChange
    }
  }
})
</script>

<style scoped lang='scss'>
@import '@/assets/style/scss/_1px.scss';
  .wy-song-item-wrap{
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    .wy-song-item__image{
      position: relative;
      width: 50px;
      height: 50px;
      margin-right: 10px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      .icon-bofang2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        opacity: .8;
      }
    }
    .wy-song-item__info{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      min-width: 0;
      height: 60px;
      .wy-song-item__info-title{
        margin-bottom: 10px;
        .wy-song-item__info-authors{
          font-size: 12px;
          color: #999;
        }
      }
      .wy-song-item__info-desc{
        font-size: 12px;
        color: #999;
        .wy-song-item__info-subtitle{
          display: inline-block;
          font-size: 10px;
          background-color: #FFEFEE;
          color: #FF8C00;
          padding: 2px 5px;
          transform: scale(0.8);
          transform-origin: right;
          margin-left: -20px;
        }
      }
    }

  }
</style>