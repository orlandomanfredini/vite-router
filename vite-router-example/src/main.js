import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/pages/HelloWorld.vue'
import Blog from './components/pages/Blog.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/blog', component: Blog}
    ]
})
createApp(App).use(router).mount('#app')
