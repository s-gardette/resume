import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { i18n } from "./locales/i18n";

const app = createApp(App);

// Install i18n instance to make the whole app i18n-aware
app.use(i18n);

// Mount the app
app.mount("#app");
