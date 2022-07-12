<template>
  <div
    class="wym-progress"
    :style="{ height: `${strokeWidth}px`, 'background-color': trackColor }"
  >
    <div
      class="wym-progress__protion"
      :style="{ width: `${percentage}%`, 'background-color': color }"
    ></div>
    <div
      class="wym-progress__pivot"
      v-if="!$slots.pivot"
      :style="{
        ...pivotStyle,
        left: `${percentage}%`,
        transform: `translate(-${percentage}%, -50%);`,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, watch } from 'vue'

  export default defineComponent({
    name: 'wymProgress',
    props: {
      percentage: {
        type: Number,
        default: 0,
      },
      strokeWidth: {
        type: Number,
        default: 2,
      },
      color: {
        type: String,
        default: '#000',
      },
      trackColor: {
        type: String,
        default: '#ebedf0',
      },
      pivotColor: {
        type: String,
        default: '#000',
      },
    },
    setup(props, ctx) {
      const pivotStyle = reactive({
        width: `${props.strokeWidth * 2}px`,
        height: `${props.strokeWidth * 2}px`,
        'background-color': props.pivotColor,
      })
      return {
        pivotStyle,
      }
    },
  })
</script>

<style scoped lang="scss">
  .wym-progress {
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
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: #000;
      transform: translate(-20%, -50%);
    }
  }
</style>
