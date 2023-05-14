import { createApp } from "vue";
import App from "./App.vue";
import GobalComponentVue from "./components/GobalComponent.vue";

//createApp(App).mount('#app')
const app = createApp(App);
app.component("GolbalComponent", GobalComponentVue);
app.mount("#app");
