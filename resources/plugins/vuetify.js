import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opts = {
    theme: {
        options: { customProperties: true },
        dark: true,
        themes: {
            dark: {
                primary: '#44ff44',
                secondary: '#ffffff',
            },
        },
    },
}

export default new Vuetify(opts)
