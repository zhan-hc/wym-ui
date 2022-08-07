<template>
  <h2>进度条</h2>
  <p>默认配置</p>
  <wym-progress :percentage="percentage" />
  <p>进度条轨道颜色 color | 圆点颜色 pivot-color</p>
  <wym-progress
    :percentage="percentage"
    :strokeWidth="5"
    color="#1989fa"
    pivot-color="red"
  ></wym-progress>
  <p>{{ percentage }}%</p>
  <button @click="add">+10</button>
  <button @click="reduce">-10</button>
  <wym-progress
    type="circle"
    :percentage="percentage"
    :strokeWidth="8"
    size="150"
    color="#50D4AB"
    round
  >
    {{percentage}}%
  </wym-progress>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  let percentage = ref(0)

  const add = () => {
    percentage.value < 100 && (percentage.value += 10)
  }
  const reduce = () => {
    percentage.value > 0 && (percentage.value -= 10)
  }
</script>

<style scoped lang="scss">
  .pivot {
    width: 20px;
    height: 20px;
    background: blue;
    color: white;
    padding: 2px 5px;
    border-radius: 10px;
    font-size: 12px;
  }
  /deep/ .wym-progress__circle{
    margin: 20px auto;
  }
</style>
