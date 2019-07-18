import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/buttons',
            component: () => import('./views/Buttons.vue')
        },
        {
            path: '/feedbacks',
            component: () => import('./views/Feedbacks.vue')
        },

    ]
})
