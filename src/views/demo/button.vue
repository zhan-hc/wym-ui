<template>
  <h2>按钮</h2>
  <div>
    <p>普通按钮</p>
    <wym-button class="btn">我是按钮</wym-button>
    <p>圆角</p>
    <wym-button class="btn" round>我是按钮</wym-button>
    <p>按钮尺寸large</p>
    <wym-button class="btn" size="large">我是按钮</wym-button>
    <p>置灰状态</p>
    <wym-button class="btn" size="large" round disabled>我是按钮</wym-button>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
  .btn {
    margin-bottom: 10px;
  }
</style>
