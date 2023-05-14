import { createApp } from "vue";

import App from "./App.vue";
import AppModal from "./components/AppModal.vue";
import store from "./Store/index";
const app = createApp(App);
app.use(store);
app.component("app-modal", AppModal);

app.mount("#app");
