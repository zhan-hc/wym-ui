import { ExtractPropTypes, Ref } from 'vue';
export const progressProps = {
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
  /* 水平进度条是否支持点击 */
  clickEvent: {
    type: Boolean,
    default: false
  },
  /* 水平进度条是否支持拖拽 */
  dragEvent: {
    type: Boolean,
    default: false
  }
};

export type ProgressProps = ExtractPropTypes<typeof progressProps>;
