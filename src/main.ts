import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import WYMDialog from "../packages/dialog/index";
const app = createApp(App);

app.config.globalProperties.$dialog = WYMDialog;
app.use(router).mount("#app");
