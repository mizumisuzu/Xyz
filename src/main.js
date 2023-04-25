import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import RouterLink from "vue-router";

createApp(App).use(router).use(RouterLink).mount("#app");
