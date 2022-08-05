
import { defineComponent, toRefs } from 'vue'
import { SongSheetProps, songSheetProps } from './song-sheet-types'
import { formatCount } from '@/utils/common'
import './song-sheet.scss'
export default defineComponent({
  name: 'wymSongSheet',
  props: songSheetProps,
  setup(props: SongSheetProps) {
    const { data, width, height } = toRefs(props)
    return {
      data,
      width,
      height
    }
  },
  render() {
    const { data, width, height } = this

    const subTitleElement = (<span class="song-sheet__info-subtitle">{data.subTitle}</span>)
    return (
      <div class="song-sheet-wrap" style={{ width }}>
        <div
          class="song-sheet__image"
          style={{ backgroundImage: `url(${data.imageUrl})`, width, height }}
        >
          <span class="song-sheet__count">
            <wymIcon class="iconfont" name="bofang4" size="12px" color="#fff"/>
            { formatCount(data.playCount) }
          </span>
        </div>
        <div class="song-sheet__info ellipsis2">
          {data?.subTitle && subTitleElement}
          <span>{ data.title }</span>
        </div>
      </div>
    )
  }
})