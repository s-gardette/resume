import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const messages = {
    en: {
        message: {
            hello: "hello world",
        },
    },
    fr_FR: {
        message: {
            hello: "Bonjour le monde",
        },
    },
};

const i18n = createI18n({
    locale: "fr_FR", // set locale
    fallbackLocale: "en", // set fallback locale
    messages, // set locale messages
});

let app = createApp(App);
// 4. Install i18n instance to make the whole app i18n-aware
app.use(i18n);

// 5. Mount
app.mount("#app");
