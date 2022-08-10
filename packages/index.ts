import { App } from "vue";
import wymButton from "./button";
import wymProgress from "./progress";
import wymScrollView from "./scroll-view";
import wymSongItem from "./song-item";
import wymSongSheet from "./song-sheet";
import wymIcon from "./icon";
import dialog from "./dialog";
import loading from "./loading";
import toast from "./toast";
import  "@/assets/style/css/common.css";
// 引入图标
import "assets/iconfont/iconfont.js";
// 所有组件列表
const components = [
  wymIcon,
  wymButton,
  wymProgress,
  wymScrollView,
  wymSongItem,
  wymSongSheet,
];

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
  app.config.globalProperties.$dialog = dialog
  app.config.globalProperties.$loading = loading
  app.config.globalProperties.$toast = toast
};

export default {
  install
};
