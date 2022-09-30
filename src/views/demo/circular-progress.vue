<template>
  <div class="wrap">
    <h2>进度条</h2>
    <p>默认配置</p>
    <p>{{ percentage }}%</p>
    <div>
      <button @click="add">+10</button>
      <button @click="reduce">-10</button>
    </div>
    <wym-circular-progress
      type="circle"
      :percentage="percentage"
      :strokeWidth="10"
      size="100"
      color="#50D4AB"
      round
    >
      {{percentage}}%
    </wym-circular-progress>
    <br/>
    <wym-circular-progress
      type="rect"
      :percentage="percentage"
      :strokeWidth="10"
      :rectRadius="10"
      rectWidth="100"
      rectHeight="100"
      color="#50D4AB"
    >
      {{percentage}}%
    </wym-circular-progress>
    <br/>
    <wym-circular-progress
      type="rect"
      :percentage="percentage"
      :strokeWidth="10"
      :rectRadius="10"
      rectWidth="100"
      rectHeight="50"
      color="#50D4AB"
    >
      {{percentage}}%
    </wym-circular-progress>
    <br/>
    <wym-circular-progress
      type="triangle"
      :percentage="percentage"
      :strokeWidth="10"
      :size="80"
      color="#50D4AB"
    >
      {{percentage}}%
    </wym-circular-progress>
  </div>
  
</template>

<script lang="ts" setup>
  import { onMounted, Ref, ref } from 'vue'
  let percentage = ref(0)
  const add = () => {
    percentage.value = +percentage.value + 10
    percentage.value > 100 && (percentage.value = 100)
  }
  const reduce = () => {
    percentage.value > 0 && (percentage.value -= 10)
  }


</script>

<style scoped lang="scss">
  .wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
      display: inline-block;
      margin: 10px;
    }
  }
</style>
