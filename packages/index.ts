import { App } from "vue";
import wymButton from "./button";
import wymProgress from "./progress";
import wymScrollView from "./scroll-view";
import wymSongItem from "./song-item";
import wymSongSheet from "./song-sheet";
import dialog from "./dialog";
import loading from "./loading";
import toast from "./toast";
// 所有组件列表
const components = [
  wymButton,
  wymProgress,
  wymScrollView,
  wymSongItem,
  wymSongSheet,
];

const globalCom = [dialog, loading];

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
