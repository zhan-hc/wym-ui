import { ExtractPropTypes, PropType } from 'vue';
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
  }
};

export type SongItemProps = ExtractPropTypes<typeof songItemProps>;
