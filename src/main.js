import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index"
import VCalendar from 'v-calendar';
import router from './router'

var app = createApp(App);

app.use(store);
app.use(VCalendar, {})
app.use(router)

app.mount('#app')