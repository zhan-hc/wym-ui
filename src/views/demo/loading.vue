<template>
  <h2>loading</h2>
  <div>
    <button @click="showLoading('normal')">显示默认loading</button>
  </div>
  <div>
    <button @click="showLoading('primary')">显示主要loading</button>
  </div>
  <div>
    <button @click="showLoading('music')">显示音乐类型loading</button>
  </div>
</template>

<script lang="ts" setup>
  import useCurrentInstance from '@/utils/useCurrentInstance'
  const { proxy } = useCurrentInstance()

  const showLoading = (type: string) => {
    proxy.$loading({ type, position: 'center' }).show()
  }
</script>

<style scoped lang="scss">
  button {
    margin-bottom: 10px;
  }
</style>
