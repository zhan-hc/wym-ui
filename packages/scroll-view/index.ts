import { App } from "vue";
import ScrollView from "./src/scroll-view";

// 定义 install 方法， App 作为参数
ScrollView.install = (app: App): void => {
  app.component(ScrollView.name, ScrollView);
};

export default ScrollView;
