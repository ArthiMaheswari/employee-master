import { createApp } from 'vue'
import App from './App.vue'
import {  createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const Vuetify=createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
      },
})
import 'vuetify/dist/vuetify.min.css'
createApp(App).use(Vuetify).mount('#app')
