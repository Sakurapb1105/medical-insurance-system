import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import Agreement from '@/views/Agreement.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/agreement', component: Agreement },
    {path: '/', redirect: '/login' } // 默认重定向到登录页面
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router