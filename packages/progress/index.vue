<template>
  <div
    v-if="type === 'normal'"
    class="wym-progress__normal"
    :style="{ height: `${strokeWidth}px`, 'background-color': trackColor }"
  >
    <div
      class="wym-progress__protion"
      :style="{ width: `${percentage}%`, 'background-color': color }"
    ></div>
    <div
      class="wym-progress__pivot"
      :style="{
        ...pivotStyle,
        left: `${percentage}%`,
        transform: `translate(-${percentage}%, -50%);`,
      }"
    >
    </div>
  </div>
  <div
    v-if="type === 'circle'"
    class="wym-progress__circle"
  >
    <div class="wym-progress-slot">
      <slot></slot>
    </div>
    <svg :width="boardSize" :height="boardSize">
      <circle :cx="circleCenter" :cy="circleCenter" :r="radius" :stroke="trackColor" fill="none" :stroke-width="strokeWidth"></circle>
      <path :d="path_right" :stroke="color" :stroke-width="strokeWidth" fill="none" :style="{'stroke-dasharray': `${percentage*girth*0.01}, ${girth}`}"/>
      <path :d="path_left" :stroke="color" :stroke-width="strokeWidth" fill="none" :style="{'stroke-dasharray': `${percentage > 50 ? (percentage-50)*girth*0.01 : 0}, ${girth}`}"/>
    </svg>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, reactive, ref, watch } from 'vue'

  export default defineComponent({
    name: 'wymProgress',
    props: {
      type: {
        type: String,
        default: 'normal'
      },
      percentage: {
        type: Number,
        default: 0
      },
      strokeWidth: {
        type: Number,
        default: 2
      },
      color: {
        type: String,
        default: '#000'
      },
      trackColor: {
        type: String,
        default: '#ebedf0'
      },
      pivotColor: {
        type: String,
        default: '#000'
      },
      /* 圆环进度条直径 */
      size: {
        type: String,
        default: '50'
      }
    },
    setup(props, ctx) {
      const pivotStyle = reactive({
        width: `${props.strokeWidth * 2}px`,
        height: `${props.strokeWidth * 2}px`,
        'border-radius': '50%',
        'background-color': props.pivotColor,
      })
      // 右边圆路径
      const path_right = computed(() => `M ${+props.size/2} ${props.strokeWidth} A ${+props.size/2 - props.strokeWidth} ${+props.size/2 - props.strokeWidth}, 0, 0, 1, ${+props.size/2}, ${+props.size - props.strokeWidth}`)
      // 左边圆路径
      const path_left = computed(() => `M ${+props.size/2} ${+props.size - props.strokeWidth} A ${+props.size/2 - props.strokeWidth} ${+props.size/2 - props.strokeWidth}, 0, 0, 1, ${+props.size/2}, ${props.strokeWidth}`)
      // 画板大小
      const boardSize = computed(() => +props.size)
      // 圆形轨道中心坐标
      const circleCenter = computed(() => +props.size/2)
      // 半径s
      const radius = computed(() => +props.size/2 - props.strokeWidth)
      // 周长（周长=2Πr = 直径*Π = size*Π = (size - 2*strokeWidth)*Π）
      const girth = computed(() => (+props.size - props.strokeWidth*2)*3.14)
      return {
        girth,
        radius,
        pivotStyle,
        path_right,
        path_left,
        boardSize,
        circleCenter
      }
    },
  })
</script>

<style scoped lang="scss">
  .wym-progress__normal {
    position: relative;
    height: 1px;
    margin: 20px 16px;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 4px;
    .wym-progress__protion {
      position: absolute;
      left: 0;
      width: 0;
      height: 100%;
      border-radius: 4px;
      background-color: #000;
    }
    .wym-progress__pivot {
      position: absolute;
      top: 50%;
      left: 0;
      box-sizing: border-box;
      transform: translate(-20%, -50%);
    }
  }
  .wym-progress__circle {
    position: relative;
    .wym-progress-slot{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
