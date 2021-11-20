import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './i18n'

createApp(App).use(i18n).use(store).use(router).use(VueAxios, axios).mount('#app')
