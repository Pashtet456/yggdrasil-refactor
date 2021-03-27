import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: () => import('@pages/main-page'),
    },
    {
        path: '/donate',
        name: 'donatePage',
        component: () => import('@pages/donate-page'),
    },
    {
        path: '/cabinet',
        name: 'cabinetPage',
        component: () => import('@pages/cabinet-page'),
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('@pages/404-page'),
    },
];

const router = new VueRouter( {
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
} );

export default router;
