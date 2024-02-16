import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { refreshToken } from "@/helpers/refreshToken";

const app = createApp(App);

setInterval(refreshToken, 800000);

app.use(store);
app.use(router);

app.mount("#app");
