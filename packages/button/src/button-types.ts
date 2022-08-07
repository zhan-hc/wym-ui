import { ExtractPropTypes } from 'vue';

export const buttonProps = {
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
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
