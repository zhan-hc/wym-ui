<template>
<h2>弹窗</h2>
  <button @click="handleOpen">打开弹窗</button>
</template>

<script lang='ts' setup>
import {reactive, toRefs} from 'vue'
import dialog from 'packages/dialog'

const handleOpen = () => {
  dialog({})
          .then(() => {
            console.log('点击确认')
          })
          .catch(() => {
            console.log('点击取消')
          })
}
</script>

<style scoped lang='scss'>
  
</style>