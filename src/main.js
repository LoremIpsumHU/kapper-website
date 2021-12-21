import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index"
import VCalendar from 'v-calendar';
import router from './router'
import Vuelidate from '@vuelidate/core';

var app = createApp(App);

app.use(Vuelidate)
app.use(store);
app.use(VCalendar, {})
app.use(router)

app.mount('#app')