import { createApp } from 'vue'
import { createPinia } from 'pinia'; // Import Pinia
import './style.css'
import App from './App.vue'

import router from './router'; // Import router

import { useStore } from './store/index'; // Import Store

import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS
import 'bootstrap'; // Import JS

const app = createApp(App);
const pinia = createPinia(); // สร้าง instance ของ Pinia

app.use(pinia); // ใช้งาน Pinia
app.use(router); // ใช้งาน router

app.config.globalProperties.$store = useStore();// ทำให้ Store เข้าถึงได้ผ่าน $store โดยตรง

app.mount('#app');
