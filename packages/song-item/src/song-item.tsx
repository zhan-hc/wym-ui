
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

    const subTitleElement = (<span class="wy-song__subtitle">{data.subTitle}</span>)

    return (
      <div class="wy-song-wrap">
        <div class="wy-song__image" >
          <img src= {data.imageUrl} alt="歌曲图片"/>
          <wymIcon class="icon-svg" {...icon} />
        </div>
        <div class="wy-song__info wym-1px-b">
          <div class="wy-song__title ellipsis">
            {data.title}-<span class="wy-song__authors">{data.authors}</span>
          </div>
          <div class="wy-song__desc ellipsis">
            {data?.subTitle && subTitleElement}
            <span class="wy-song__rcm">{data.desc}</span>
            </div>
        </div>
      </div>
    )
  }
})