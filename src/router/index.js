import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'default',
        component: () => import('../components/attack.vue')
    },
    {
        path: '/attack',
        name: 'attack',
        component: () => import('../components/attack.vue')
    },
    {
        path: '/control',
        name: 'control',
        component: () => import('../components/control.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
