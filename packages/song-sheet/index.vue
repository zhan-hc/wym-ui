<template>
  <div class="song-sheet-wrap" :style="{ width }">
    <div
      class="song-sheet__image"
      :style="{ 'background-image': `url(${data.imageUrl})`, width, height }"
    >
      <span class="song-sheet__count">
        <wymIcon class="iconfont" name="bofang4" size="12px" color="#fff"/>
        {{ formatCount(data.playCount) }}
      </span>
    </div>
    <div class="song-sheet__info ellipsis2">
      <span class="song-sheet__info-extra" v-if="data.extraText">{{
        data.extraText
      }}</span>
      {{ data.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import wymIcon from '../icon/index.vue'
export default defineComponent({
  name: 'wymSongSheet',
  components: {
    wymIcon
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          playCount: 0,
          imageUrl: '',
          title: '',
        }
      },
    },
    width: {
      type: String,
      default: '100px',
    },
    height: {
      type: String,
      default: '100px',
    }
  }
})
</script>

<style scoped lang="scss">
  .song-sheet-wrap {
    position: relative;
    width: 100px;
    padding-bottom: 10px;
    display: inline-block;
    vertical-align: top;
    .song-sheet__image {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      background-color: #fff;
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 5px;
      border: 1px solid #ccc;
      .song-sheet__count {
        position: absolute;
        top: 5px;
        right: 5px;
        display: flex;
        align-items: center;
        font-size: 10px;
        -webkit-text-size-adjust: 100%;
        color: #fff;
        padding: 2px 5px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        .iconfont {
          margin-right: 2px;
        }
      }
    }
    .song-sheet__info {
      width: 100px;
      white-space: normal;
      font-size: 14px;
      text-align: left;
      &-extra {
        display: inline-block;
        font-size: 10px;
        background-color: #ffefee;
        color: #ff8c00;
        padding: 2px 5px;
        transform: scale(0.8);
        transform-origin: right;
        margin-left: -10px;
      }
    }
  }
</style>
