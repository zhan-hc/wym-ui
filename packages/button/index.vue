<template>
  <button class="wym-button" :class="[{'wym-button--disabled' : disabled}, {'wym-button--round' : round},`wym-button--${size}`]"><slot></slot></button>
</template>
<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: 'wymButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal' // ['large']
    }
  },
  components: {
    
  },
})
</script>

<style scoped lang='scss'>
  .wym-button{
    border-style: none;
    background: #ff5a4c;
    color: #fff;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &--disabled{
      cursor: not-allowed;
      opacity: .7;
    }
    &--round{
      border-radius: 20px;
    }
    &--large{
      width: 80vw;
    }
  }
</style>