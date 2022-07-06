import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
//elmentui css文件
import "element-plus/theme-chalk/display.css";

// router
import router from "./router/index";
app.use(router);

//公共组件
import commonComp from "@/components/comExport.js";
commonComp(app);

app.mount("#app");