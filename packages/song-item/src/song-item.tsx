
import { defineComponent, toRefs } from 'vue'
import { SongItemProps, songItemProps } from './song-item-types'
import './song-item.scss'
export default defineComponent({
  name: 'wymSongItem',
  props: songItemProps,
  setup(props: SongItemProps) {
    const { data, icon } = toRefs(props)
    return {
      data,
      icon
    }
  },
  render() {
    const { data, icon } = this

    const subTitleElement = (<span class="wy-song-item__info-subtitle">{data.subTitle}</span>)

    return (
      <div class="wy-song-item-wrap">
        <div class="wy-song-item__image" >
          <img src= {data.imageUrl} alt="歌曲图片"/>
          <wymIcon class="icon-svg" {...icon} />
        </div>
        <div class="wy-song-item__info wym-1px-b">
          <div class="wy-song-item__info-title ellipsis">
            {data.title}-<span class="wy-song-item__info-authors">{data.authors}</span>
          </div>
          <div class="wy-song-item__info-desc ellipsis">
            {data?.subTitle && subTitleElement}
            <span class="wy-song-item__info-rcm">{data.desc}</span>
            </div>
        </div>
      </div>
    )
  }
})