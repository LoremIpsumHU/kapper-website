import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index"
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

createApp(App).use(store).mount('#app')