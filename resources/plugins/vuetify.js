import Vue from 'vue';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        options: { customProperties: true },
        dark: true,
        themes: {
            dark: {
                primary: '#18181c',
                secondary: '#cccccc',
            },
        },
    },
}

export default new Vuetify(opts)
