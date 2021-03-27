window.Vue = require('vue').default;

import router from '@root/router/index.js';
import Vuetify from '@plugins/vuetify.js';
import 'vuetify/dist/vuetify.min.css'

Vue.component('yggdrasil-project', require('../YggdrasilProject.vue').default);

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
    el: '#app',
    router: router,
    vuetify: Vuetify,
});
