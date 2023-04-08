import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'

const routes = [{
        path: "/",
        name: "Dashboard",
        component: Dashboard

    },
    {
        path: '/stock',
        name: 'stock',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../components/Stock.vue')
    },
    {
        path: '/sold',
        name: 'sold',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../components/Sold.vue')
    },
    {
        path: '/suppliers',
        name: 'suppliers',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../components/Suppliers.vue')
    },
    {
        path: '/profits',
        name: 'Profits',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../components/Profits.vue')
    },
    {
        path: '/shortage',
        name: 'Shortage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../components/Shortage.vue')
    },
    {
        path: '/cashbook',
        name: 'Cashbook',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../components/Cashbook.vue')
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router