<template>
  <div class="scroll-view-wrap">
    <div class="scroll-view-slot">
      <slot></slot>
    </div>
    
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'
export default defineComponent({
  name: 'wymScrollView',
  props: {
    
  },
  components: {
  },
})
</script>

<style scoped lang='scss'>
  .scroll-view-wrap{
    display: flex;
    white-space: nowrap;
    overflow: scroll;
    padding: 10px;
    &::-webkit-scrollbar{
      display: none;
    }
  }
</style>