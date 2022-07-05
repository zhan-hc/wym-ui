<template>
<h2>按钮</h2>
  <div>
    <p>普通按钮</p>
    <wym-button class="btn"></wym-button>
    <p>圆角</p>
    <wym-button class="btn"></wym-button>
    <p>按钮尺寸large</p>
    <wym-button class="btn" size="large"></wym-button>
    <p>置灰状态</p>
    <wym-button class="btn" size="large" round disabled></wym-button>
  </div>
</template>

<script lang='ts' setup>
import {defineComponent, reactive, toRefs} from 'vue'
import wymButton from 'packages/button/button.vue'
</script>

<style scoped lang='scss'>
  .btn{
    margin-bottom: 10px;
  }
</style>