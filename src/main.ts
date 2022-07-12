import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/css/reset.css";
import "./assets/iconfont/iconfont.css";
import baseMixin from "./utils/base";
import wymUi from "packages/index";
const app = createApp(App);

app.mixin(baseMixin);
app.use(router).use(wymUi).mount("#app");
