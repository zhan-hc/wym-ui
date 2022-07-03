import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import WYMDialog from "../packages/dialog/index";
import "./assets/style/css/reset.css";
import "./assets/iconfont/iconfont.css";
import baseMixin from "./utils/base";
const app = createApp(App);

app.config.globalProperties.$dialog = WYMDialog;
app.mixin(baseMixin);
app.use(router).mount("#app");
