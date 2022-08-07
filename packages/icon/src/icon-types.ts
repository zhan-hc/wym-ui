import { ExtractPropTypes } from 'vue';

export const iconProps = {
  name:{
    type :String,
    required: true,
    default: ''
  },
  color: {  // 字体颜色
    type: String,
    default: '#000'
  },
  size: {
    type: String,
    default: '16px'
  }
};

export type IconProps = ExtractPropTypes<typeof iconProps>;
