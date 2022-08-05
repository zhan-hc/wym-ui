import { ExtractPropTypes } from 'vue';

export const loadingProps = {
  type: {
    type: String,
    default: 'normal',
  },
  position: {
    type: String,
    default: 'center',
  },
  message: {
    type: String,
    default: '',
  }
};

export type LoadingProps = ExtractPropTypes<typeof loadingProps>;
