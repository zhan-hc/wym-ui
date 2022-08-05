import { ExtractPropTypes, PropType } from 'vue';
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
  }
};

export type SongSheetProps = ExtractPropTypes<typeof songSheetProps>;
