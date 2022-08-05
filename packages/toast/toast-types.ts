import { ExtractPropTypes } from 'vue';

export const toastProps = {
  message: {
    type: String,
    default: '这是toast',
  },
  duration: {
    type: Number,
    default: 2000,
  }
};

export type ToastProps = ExtractPropTypes<typeof toastProps>;
