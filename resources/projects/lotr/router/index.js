import Vue from 'vue';
import VueRouter from 'vue-router';
import mainPage     from '@Lotr/pages/main-page';
import donatePage      from '@Lotr/pages/donate-page';

Vue.use( VueRouter );

const routes = [
    {
        path: '/lotr/',
        name: 'mainPage',
        component: mainPage,
    },
    {
        path: '/lotr/donate',
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
