<template>
  <div class="wym-loading--wrap">
    <!-- 音乐律动 -->
    <div
      v-if="type === 'music'"
      class="wym-loading_music"
      :style="{ top: loadingPosition[position] }"
    >
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <span>正在加载...</span>
    </div>
    <div
      v-if="type === 'normal'"
      class="wym-loading_normal"
      :style="{ top: loadingPosition[position] }"
    >
      <div class="wym-loading_normal--content"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, watch } from 'vue'
  export default defineComponent({
    name: 'Loading',
    props: {
      type: {
        type: String,
        default: 'normal',
      },
      position: {
        type: String,
        default: 'top',
      },
    },
    components: {},
    setup() {
      enum loadingPosition {
        top = '20%',
        bottom = '80%',
        center = '50%',
      }
      return {
        loadingPosition,
      }
    },
  })
</script>

<style scoped lang="scss">
  @import '@/assets/style/_1px.scss';
  @keyframes music {
    0% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.2);
    }
    100% {
      transform: scaleY(1);
    }
  }
  @keyframes normal {
    0% {
      border-color: transparent transparent #ff5a4c transparent;
    }
    50% {
      border-color: transparent #ff5a4c #ff5a4c transparent;
    }
    100% {
      border-color: #ff5a4c #ff5a4c #ff5a4c transparent;
      transform: rotate(360deg);
    }
  }
  .wym-loading--wrap {
    .wym-loading_music {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        padding: 0;
        li {
          display: inline-block;
          width: 3px;
          margin: 0 3px;
          height: 20px;
          list-style: none;
          background-color: #ff5a4c;
          transform-origin: center center;
          animation: music 1.5s 0ms infinite ease-in-out;
          &:nth-child(2) {
            animation-delay: 0.3s;
          }
          &:nth-child(4) {
            animation-delay: 0.5s;
          }
        }
      }
      span {
        font-size: 12px;
      }
    }
    .wym-loading_normal {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 auto;
      &--content {
        width: 20px;
        height: 20px;
        border-width: 3px;
        border-style: solid;
        border-color: transparent transparent #ff5a4c transparent;
        animation: normal 2s linear 0ms infinite alternate;
        border-radius: 50%;
      }
    }
  }
</style>
