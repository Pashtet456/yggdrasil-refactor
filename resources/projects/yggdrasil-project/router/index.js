import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: () => import('@Yggdrasil/pages/main-page'),
    },
    {
        path: '/donate',
        name: 'donatePage',
        component: () => import('@Yggdrasil/pages/donate-page'),
    },
];

const router = new VueRouter( {
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
} );

export default router;
