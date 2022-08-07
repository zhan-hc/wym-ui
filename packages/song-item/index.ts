import { App } from 'vue'
import SongItem from './src/song-item'
 
// 定义 install 方法， App 作为参数
SongItem.install = (app: App): void => {
    app.component(SongItem.name, SongItem)
}
 
export default SongItem