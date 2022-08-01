<template>
  <h2>toast</h2>

  <button @click="showToast">显示默认Toast</button>
  <p>duration设置为0，toast不消失</p>
  <button @click="showToast1">显示Toast</button>
  <button @click="hideToast">隐藏</button>
</template>

<script lang="ts" setup>
  import useCurrentInstance from '@/utils/useCurrentInstance'
import { reactive, ref } from '@vue/reactivity'
  import toast from 'packages/toast'
  const { proxy } = useCurrentInstance()
  let Ntoast:any = null
  const showToast = () => {
    toast()
  }
  const showToast1 = () => {
    Ntoast = toast({message: 'toast提示内容', duration: 0})
  }
  const hideToast = () => {
    Ntoast.clear()
  }
</script>

<style scoped lang="scss">
p,
button{
  margin-bottom: 20px;
}
</style>
