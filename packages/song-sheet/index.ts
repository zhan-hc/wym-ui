import { App } from "vue";
import SongSheet from "./index.vue";

// 定义 install 方法， App 作为参数
SongSheet.install = (app: App): void => {
  app.component(SongSheet.name, SongSheet);
};

export default SongSheet;
