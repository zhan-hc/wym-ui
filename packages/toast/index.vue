<template>
  <div class="wym-toast">
    {{message}}
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: '',
  props: {
    message: {
      type: String,
      default: '这是toast',
    },
    duration: {
      type: Number,
      default: 2000,
    },
  },
  components: {
    
  },
})
</script>

<style scoped lang='scss'>
  .wym-toast{
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100px;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(0, 0, 0, .7);
    color: #fff;
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
    animation: toastKF 2s;
  }
  @keyframes toastKF{
    0% {
      opacity: 0;
    }
    100% { 
      opacity: 1;
      z-index: 9999
    }
  }
</style>