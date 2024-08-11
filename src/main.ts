import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

if (!navigator.geolocation) {
  alert('Tu navegador no soporta la geolocalización')
  throw new Error('Tu navegador no soporta la geolocalización')
}

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
