import { App } from 'vue'
import icon from './src/icon'
 
// 定义 install 方法， App 作为参数
icon.install = (app: App): void => {
    app.component(icon.name, icon)
}
 
export default icon