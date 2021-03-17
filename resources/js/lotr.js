window.Vue = require('vue').default;

import router from '@Lotr/router/index.js';
import Vuetify from '@Lotr/plugins/vuetify.js';

Vue.component('lotr', require('../projects/lotr/Lotr').default);

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
    el: '#app',
    router: router,
    vuetify: Vuetify,
});
