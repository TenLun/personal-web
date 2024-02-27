import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

import Home from './views/HomeView.vue'
import About from './views/AboutView.vue'
import Badge from './components/Badge.vue'

const app = createApp(App)
app.component('home', Home)
app.component('about', About)
app.component('badge', Badge)
app.mount('#app')
