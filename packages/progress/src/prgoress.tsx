
import { defineComponent, reactive, toRefs, ref, SetupContext } from 'vue'
import { ProgressProps, progressProps } from './progress-types'
import { middleNum } from '../../../src/utils/common'
import './progress.scss'
export default defineComponent({
  name: 'wymProgress',
  props: progressProps,
  emits: ['update:percentage'],
  setup(props: ProgressProps, ctx: SetupContext) {
    const {
      percentage,
      strokeWidth,
      trackColor,
      pivotColor,
      clickEvent,
      dragEvent
    } = toRefs(props)

    const progress = ref<HTMLElement | null>(null);
    const pivot = ref<HTMLElement | null>(null);

    const startX = ref(0)

    
    const handleClick = (e: MouseEvent) => {
      if (!clickEvent.value) return
      if (e.target === pivot.value) {
        return
      }
      if (progress.value) {
        const curPercentage = (((e.clientX - progress.value.offsetLeft) / (progress.value.clientWidth)) * 100).toFixed(0)
        ctx.emit('update:percentage', middleNum(+curPercentage))
        ctx.emit('percentChange', middleNum(+curPercentage))
      }
    }

    const onTouchstart = (e: TouchEvent) => {
      if (!dragEvent.value) return
      if (pivot.value) {
        startX.value  = e.targetTouches[0].pageX - pivot.value.offsetLeft
      }
    }

    const onTouchmove = (e: TouchEvent) => {
      if (!dragEvent.value) return
      if (pivot.value && progress.value) {
        const endX = e.targetTouches[0].pageX - startX.value
        const curPercentage = ((endX / (progress.value.clientWidth)) * 100).toFixed(0)
        ctx.emit('update:percentage', middleNum(+curPercentage))
      }
    }
    
    const onTouchend = (e: TouchEvent) => {
      if (!dragEvent.value) return
      ctx.emit('percentChange', middleNum(percentage.value))
    }

    return {
      pivot,
      progress,
      onTouchend,
      handleClick,
      onTouchmove,
      onTouchstart
    }
  },
  render() {
    const {
      color,
      trackColor,
      pivotColor,
      percentage,
      strokeWidth,
      onTouchend,
      handleClick,
      onTouchmove,
      onTouchstart,
    } = this
    // 默认进度条
    const progressNormal = (
      <div
        ref='progress'
        class="wym-progress--normal"
        style={{ height: `${strokeWidth}px`, backgroundColor: trackColor }}
        onClick={handleClick}
      >
        <div class="wym-progress__protion" style={{width: `${percentage}%`, backgroundColor: color }}></div>
        <div
          class="wym-progress__pivot"
          ref='pivot'
          style={{
            width: `${strokeWidth * 2}px`,
            height: `${strokeWidth * 2}px`,
            backgroundColor: pivotColor,
            left: `${percentage}%`,
          }}
          onTouchstart={onTouchstart}
          onTouchmove={onTouchmove}
          onTouchend={onTouchend}
        >
        </div>
      </div>
    )
    return progressNormal
  }
})