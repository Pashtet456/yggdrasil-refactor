import Vue from 'vue';
import VueRouter from 'vue-router';
import mainPage     from '@Yggdrasil/pages/main-page';
import donatePage      from '@Yggdrasil/pages/donate-page';

Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: mainPage,
    },
    {
        path: '/donate',
        name: 'donatePage',
        component: donatePage,
    },
];

const router = new VueRouter( {
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
} );

export default router;
