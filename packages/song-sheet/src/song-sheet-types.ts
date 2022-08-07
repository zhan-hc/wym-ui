import { ExtractPropTypes, PropType } from 'vue';
import { IconProps } from 'packages/icon/src/icon-types'
export type sheetData = {
  playCount: number,
  title: string,
  imageUrl: string,
  subTitle?: string
}

export const songSheetProps = {
  data: {
    type: Object as PropType<sheetData> | null,
    default: null
  },
  width: {
    type: String,
    default: '100px',
  },
  height: {
    type: String,
    default: '100px',
  },
  icon: {
    type: Object as PropType<IconProps>,
    default: () => {
      return {
        name: 'bofang4',
        color: '#fff',
        size: '12px'
      }
    }
  }
};

export type SongSheetProps = ExtractPropTypes<typeof songSheetProps>;
