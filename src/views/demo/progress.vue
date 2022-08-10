<template>
  <h2>进度条</h2>
  <p>默认配置</p>
  <div class="progress-wrap">
    <wym-progress :percentage="percentage" />
  </div>
  <p>color | pivot-color | 支持拖动点击</p>
  <div class="progress-wrap">
    <wym-progress
      v-model:percentage="percentage"
      :strokeWidth="5"
      color="#1989fa"
      pivot-color="red"
      click-event
      drag-event
      @percentChange="handleChange"
    >
    </wym-progress>
  </div>
  
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
  import { onMounted, Ref, ref } from 'vue'
  let percentage = ref(0)
  const add = () => {
    percentage.value = +percentage.value + 10
    percentage.value > 100 && (percentage.value = 100)
  }
  const reduce = () => {
    percentage.value > 0 && (percentage.value -= 10)
  }

  const handleChange = (val: number) => {
    console.log('参数百分比变化', val)
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
  .progress-wrap{
    width: 90vw;
    margin: 20px auto;
  }
  /deep/ .wym-progress__circle{
    margin: 20px auto;
  }
</style>
