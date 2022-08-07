import { ExtractPropTypes, PropType } from 'vue';
import { IconProps } from 'packages/icon/src/icon-types'
export type songData = {
  imageUrl: string,
  title: string,
  authors?: string,
  desc?: string,
  subTitle?: string
}

export const songItemProps = {
  data: {
    type: Object as PropType<songData> | null,
    default: null
  },
  icon: {
    type: Object as PropType<IconProps>,
    default: () => {
      return {
        name: 'bofang2',
        color: '#fff'
      }
    }
  }

};

export type SongItemProps = ExtractPropTypes<typeof songItemProps>;
