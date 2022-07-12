import { App } from 'vue'
import Progress from './index.vue'
 
// 定义 install 方法， App 作为参数
Progress.install = (app: App): void => {
    app.component(Progress.name, Progress)
}
 
export default Progress