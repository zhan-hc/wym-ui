import { ExtractPropTypes, Ref } from 'vue';

interface circleStyle {
  stroke: Ref<string> | string;
  strokeLinecap: string
  strokeDasharray: string;
  strokeDashoffset: string;
  transition: string;
}

export interface progressOption {
  path?: string,
  girth?: number,
  radius?: number,
  style?: circleStyle | null
}
export interface progressType {
  circle: HTMLElement,
  rect: HTMLElement,
  triangle: HTMLElement
}
export const progressProps = {
  type: {
    type: String,
    default: 'circle'
  },
  percentage: {
    type: Number,
    default: 0
  },
  strokeWidth: {
    type: Number,
    default: 2
  },
  rectRadius: {
    type: [Number, String],
    default: 0
  },
  rectWidth: {
    type: [Number, String],
    default: 50
  },
  rectHeight: {
    type: [Number, String],
    default: 50
  },
  color: {
    type: String,
    default: '#000'
  },
  trackColor: {
    type: String,
    default: '#ebedf0'
  },
  /* 圆环进度条直径/等边三角形的边 */
  size: {
    type: [Number, String],
    default: '50'
  },
  /* 圆环进度条是否圆角 */
  round: {
    type: Boolean,
    default: false
  }
};

export type ProgressProps = ExtractPropTypes<typeof progressProps>;
