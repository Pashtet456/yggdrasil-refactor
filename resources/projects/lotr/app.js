window.Vue = require('vue').default;
import router from '@Yggdrasil/router/index.js';

Vue.component('yggdrasil-project', require('./YggdrasilProject').default);

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
    el: '#app',
    router: router,
});
