<template>
  <svg class="svg-icon" aria-hidden="true" :style="{color:color,width:size,height:size}">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script lang='ts'>
import {computed, defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: 'wymIcon',
  props: {
    name:{
      type :String,
      required: true
    },
    color: {  // 字体颜色
      type: String,
      default: '#000'
    },
    size: {
      type: String,
      default: '16px'
    }
  },
  setup(props, ctx) {
    return {
    }
  }
})
</script>

<style scoped lang='scss'>
.svg-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
  overflow: hidden;
}
</style>