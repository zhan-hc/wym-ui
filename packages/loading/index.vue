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
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, watch } from 'vue'
  export default defineComponent({
    name: 'Loading',
    props: {
      type: {
        type: String,
        default: 'music',
      },
      position: {
        type: String,
        default: 'center',
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
          &:nth-child(3) {
            // animation-delay: 0.2s;
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
  }
</style>
