
import { CSSProperties, defineComponent, reactive, toRefs, watch, Ref, ref, SetupContext } from 'vue'
import { ProgressProps, progressProps, circleData } from './progress-types'
import { middleNum } from '@/utils/common'
import './progress.scss'
export default defineComponent({
  name: 'wymProgress',
  props: progressProps,
  emits: ['update:percentage'],
  setup(props: ProgressProps, ctx: SetupContext) {
    const {
      size,
      type,
      color,
      round,
      percentage,
      strokeWidth,
      trackColor,
      pivotColor,
      clickEvent,
      dragEvent
    } = toRefs(props)

    const progress = ref<HTMLElement | null>(null);
    const pivot = ref<HTMLElement | null>(null);
    const data: circleData = reactive({
      path: '', // 圆环路径
      girth: 0, // 周长
      radius: 0, // 半径
      style: null
    })

    const startX = ref(0)

    const setCircleProgress = () => {
      if (type.value !== 'circle') {
        return
      }

      // 圆心坐标
      const circleCenter = `${data.radius} ${data.radius}`
      const endPositionY = +size.value - strokeWidth.value
      const PositionX = +size.value/2

      // 圆环路径
      data.path = `
        M ${PositionX} ${strokeWidth.value}
        A ${circleCenter}, 0, 0, 1, ${PositionX}, ${endPositionY}
        A ${circleCenter}, 0, 0, 1, ${PositionX}, ${strokeWidth.value}
      `
      data.radius = +size.value / 2 - strokeWidth.value
      data.girth = (+size.value - strokeWidth.value * 2) * Math.PI

      // 样式
      data.style = {
        stroke: color,
        strokeLinecap: round ? 'round' : 'inherit',
        strokeDasharray: `${percentage.value / 100 * data.girth}px, ${data.girth}px`,
        strokeDashoffset: '0',
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s'
      }

    }

    setCircleProgress()

    watch(
      [
        percentage,
        strokeWidth,
        color,
        size,
        trackColor
      ],
      () => {
        setCircleProgress()
      }
    )
    
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
      data,
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
      type,
      color,
      size,
      data,
      trackColor,
      pivotColor,
      percentage,
      strokeWidth,
      onTouchend,
      handleClick,
      onTouchmove,
      onTouchstart,
      $slots
    } = this
    const textElement = (
      <div>{percentage}%</div>
    )
    const wrapStyle = {width: `${+size}px`, height: `${+size}px`}
    // 默认进度条
    const progressNormal = (
      <div
        ref='progress'
        class="wym-progress__normal"
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
    // 圆环进度条
    const  progressCircle = (
      <div class="wym-progress__circle" style={wrapStyle}>
        <div class="wym-progress-slot" style={wrapStyle}>
          {$slots.default?.()}
          {!$slots.default && textElement}
        </div>
        <svg width={+size} height={+size} >
          <circle fill="none" cx={+size/2} cy={+size/2} r={data.radius} stroke={trackColor} stroke-width={strokeWidth} />
          <path fill="none" d={data.path} stroke-width={strokeWidth} style={data.style as CSSProperties} />
          <path fill="none" d={data.path} stroke-width={strokeWidth} style={data.style as CSSProperties} />
        </svg>
      </div>
    )
    return type!=='circle' ? progressNormal : progressCircle
  }
})