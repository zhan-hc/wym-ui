<template>
  <h2>toast</h2>
  <button @click="showToast">显示Toast</button>
</template>

<script lang="ts" setup>
  import useCurrentInstance from '@/utils/useCurrentInstance'
  import toast from 'packages/toast'
  const { proxy } = useCurrentInstance()
  const showToast = () => {
    toast({message: 'toast提示内容', duration: 2000})
  }
</script>

<style scoped lang="scss"></style>
