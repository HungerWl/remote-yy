import { createApp } from 'vue'
import App from './App.vue'
// src/main.ts
const appName = import.meta.env.VITE_APP_NAME;
document.title = appName; // 设置文档标题
createApp(App).mount('#app')
