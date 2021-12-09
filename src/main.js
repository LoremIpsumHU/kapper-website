import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index"
import VCalendar from 'v-calendar';

var app = createApp(App);

app.use(store);
app.use(VCalendar, {})

app.mount('#app')