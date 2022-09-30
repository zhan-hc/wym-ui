import { App } from 'vue'
import circularProgress from './src/circular-progress'
 
// 定义 install 方法， App 作为参数
circularProgress.install = (app: App): void => {
    app.component(circularProgress.name, circularProgress)
}
 
export default circularProgress