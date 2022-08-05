import { ExtractPropTypes, Ref } from 'vue';

interface circleStyle {
  stroke: Ref<string> | string;
  strokeLinecap: string
  strokeDasharray: string;
  strokeDashoffset: string;
  transition: string;
}

export interface circleData {
  path: string,
  girth: number,
  radius: number,
  style: circleStyle | null
}

export const progressProps = {
  type: {
    type: String,
    default: 'normal'
  },
  percentage: {
    type: Number,
    default: 0
  },
  strokeWidth: {
    type: Number,
    default: 2
  },
  color: {
    type: String,
    default: '#000'
  },
  trackColor: {
    type: String,
    default: '#ebedf0'
  },
  pivotColor: {
    type: String,
    default: '#000'
  },
  /* 圆环进度条直径 */
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
