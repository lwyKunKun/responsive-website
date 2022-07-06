import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// router
import router from "./router/index";
app.use(router);

//公共组件
import commonComp from "@/components/comExport.js";
commonComp(app);

app.mount("#app");