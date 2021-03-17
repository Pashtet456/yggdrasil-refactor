window.Vue = require('vue').default;

import router from '@Yggdrasil/router/index.js';
import Vuetify from '@Yggdrasil/plugins/vuetify.js';

Vue.component('yggdrasil-project', require('../projects/yggdrasil-project/YggdrasilProject').default);

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
    el: '#app',
    router: router,
    vuetify: Vuetify,
});
