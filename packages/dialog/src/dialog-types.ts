import { ExtractPropTypes } from 'vue';

export const dialogProps = {
  title: {
    type: String,
    default: '提示'
  },
  message: {
    type: String,
    default: '代码是写出来给人看的，附带能在机器上运行。'
  },
  confirmBtnText: {
    type: String,
    default: '确认'
  },
  cancelBtnText: {
    type: String,
    default: '取消'
  },
  onConfirm: {
    type: Function as unknown as () => (event: MouseEvent) => void,
    default: null
  },
  onCancel: {
    type: Function as unknown as () => (event: MouseEvent) => void,
    default: null
  }
};

export type DialogProps = ExtractPropTypes<typeof dialogProps>;
