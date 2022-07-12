<template>
  <h2>弹窗</h2>
  <button @click="handleOpen">打开弹窗</button>
</template>

<script lang="ts" setup>
  import useCurrentInstance from '@/utils/useCurrentInstance'
  const { proxy } = useCurrentInstance()
  const handleOpen = () => {
    proxy
      .$dialog()
      .then(() => {
        console.log('点击确认')
      })
      .catch(() => {
        console.log('点击取消')
      })
  }
</script>

<style scoped lang="scss"></style>
