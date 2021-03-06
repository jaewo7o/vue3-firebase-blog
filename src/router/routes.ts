import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('pages/Index.vue') }]
    },

    {
        path: '/write',
        component: () => import('layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/Write.vue') }]
    },

    {
        path: '/list',
        component: () => import('layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('src/pages/List.vue') }]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes
