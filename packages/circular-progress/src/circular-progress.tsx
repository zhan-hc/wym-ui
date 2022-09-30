
import { CSSProperties, defineComponent, reactive, toRefs, watch, ref, SetupContext } from 'vue'
import { ProgressProps, progressProps, progressOption, progressType } from './circular-progress-types'
import './circular-progress.scss'
export default defineComponent({
  name: 'wymCircularProgress',
  props: progressProps,
  emits: ['update:percentage'],
  setup(props: ProgressProps, ctx: SetupContext) {
    const {
      size,
      type,
      color,
      round,
      rectWidth,
      rectHeight,
      percentage,
      strokeWidth,
      trackColor,
      rectRadius
    } = toRefs(props)

    const progress = ref<HTMLElement | null>(null);
    const pivot = ref<HTMLElement | null>(null);
    const circleData: progressOption = reactive({
      path: '', // 圆环路径
      girth: 0, // 周长
      radius: 0, // 半径
      style: null
    })

    const rectData: progressOption = reactive({
      style: null
    })

    const triangleData: progressOption = reactive({
      path: '', // 路径
      radius: 0,
      style: null
    })

    const setCircleProgress = () => {
      if (type.value !== 'circle') {
        return
      }

      // 圆心坐标
      const circleCenter = `${circleData.radius} ${circleData.radius}`
      const endPositionY = +size.value - strokeWidth.value
      const PositionX = +size.value/2

      // 圆环路径
      circleData.path = `
        M ${PositionX} ${strokeWidth.value}
        A ${circleCenter}, 0, 0, 1, ${PositionX}, ${endPositionY}
        A ${circleCenter}, 0, 0, 1, ${PositionX}, ${strokeWidth.value}
      `
      circleData.radius = +size.value / 2 - strokeWidth.value
      circleData.girth = (+size.value - strokeWidth.value * 2) * Math.PI

      // 样式
      circleData.style = {
        stroke: color,
        strokeLinecap: round ? 'round' : 'inherit',
        strokeDasharray: `${percentage.value / 100 * circleData.girth}px, ${circleData.girth}px`,
        strokeDashoffset: '0',
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s'
      }
    }
    const setRectProgress = () => {
      const pathLength = Math.PI * 2 * (+rectRadius.value) + 2 * ((+rectWidth.value + +rectHeight.value) - 4 * (+rectRadius.value))
      rectData.style = {
        stroke: color,
        strokeLinecap: round ? 'round' : 'inherit',
        strokeDasharray: `${percentage.value / 100 * pathLength}px, ${pathLength}px`,
        strokeDashoffset: '0',
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s'
      }
    }

    const setTriangleProgress = () => {
      // 等边三角形的高
      const positionY = Math.sqrt(Math.pow(+size.value, 2) - Math.pow(+size.value / 2, 2))
      const positionX = Math.sqrt(Math.pow(+strokeWidth.value * 2, 2) - Math.pow(+strokeWidth.value, 2))
      triangleData.path = `${positionX},${positionY + strokeWidth.value * 2} ${+size.value / 2 + positionX},${strokeWidth.value * 2} ${+size.value + positionX},${positionY + strokeWidth.value*2}`
      triangleData.radius = positionX
      triangleData.style = {
        stroke: color,
        strokeLinecap: round ? 'round' : 'inherit',
        strokeDasharray: `${percentage.value / 100 * (+size.value * 3)}px, ${+size.value * 3}px`,
        strokeDashoffset: '0',
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s'
      }
    }


    setCircleProgress()
    setRectProgress()
    setTriangleProgress()
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
        setRectProgress()
        setTriangleProgress()
      }
    )

    return {
      circleData,
      rectData,
      triangleData,
      pivot,
      progress
    }
  },
  render() {
    const {
      type,
      size,
      rectData,
      circleData,
      triangleData,
      rectRadius,
      trackColor,
      percentage,
      strokeWidth,
      rectWidth,
      rectHeight,
      $slots
    } = this
    const textElement = (
      <div>{percentage}%</div>
    )
    const wrapStyle = {width: `${+size}px`, height: `${+size}px`}
    const rectStyle = {width: `${+rectWidth + strokeWidth}px`, height: `${+rectHeight + strokeWidth}px`}
    const triangleStyle = {width: `${+size + Number(triangleData.radius) * 2}px`, height: `${+size + strokeWidth * 2}px`}
    // 圆环进度条
    const  progressCircle = (
      <div class="wym-progress--circle" style={wrapStyle}>
        <div class="wym-progress__slot" style={wrapStyle}>
          {$slots.default?.()}
          {!$slots.default && textElement}
        </div>
        <svg width={+size} height={+size} >
          <circle fill="none" cx={+size/2} cy={+size/2} r={circleData.radius} stroke={trackColor} stroke-width={strokeWidth} />
          <path fill="none" d={circleData.path} stroke-width={strokeWidth} style={circleData.style as CSSProperties} />
        </svg>
      </div>
    )

    // 矩形进度条
    const progoressRect = (
      <div class="wym-progress--rect" style={rectStyle}>
        <div class="wym-progress__slot" style={rectStyle}>
          {$slots.default?.()}
          {!$slots.default && textElement}
        </div>
        <svg width={+rectWidth + strokeWidth} height={+rectHeight + strokeWidth}>
          <rect fill="none" x={strokeWidth/2} y={strokeWidth/2} rx={rectRadius} width={+rectWidth} height={+rectHeight} stroke={trackColor} stroke-width={strokeWidth} />
          <rect fill="none" x={strokeWidth/2} y={strokeWidth/2} rx={rectRadius} width={+rectWidth} height={+rectHeight} stroke-width={strokeWidth} style={rectData.style as CSSProperties}/>
        </svg>
      </div>
    )
    //
    const progressTriangle = (
      <div class="wym-progress--triangle" style={triangleStyle}>
        <div class="wym-progress__slot" style={triangleStyle}>
          {$slots.default?.()}
          {!$slots.default && textElement}
        </div>
        <svg width={+size + Number(triangleData.radius) * 2} height={+size + strokeWidth * 2} >
          <polygon fill="none" stroke-linejoin="round" points={triangleData.path} stroke={trackColor} stroke-width={strokeWidth}/>
          <polygon fill="none" stroke-linejoin="round" points={triangleData.path} stroke={trackColor} stroke-width={strokeWidth} style={triangleData.style as CSSProperties}/>
        </svg>
      </div>
    )

    const progressType  = {
      circle: progressCircle,
      rect: progoressRect,
      triangle: progressTriangle
    }
    return progressType[type as keyof typeof progressType]
  }
})