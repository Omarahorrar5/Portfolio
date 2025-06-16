import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faGithub, faLinkedin, faFacebook, faInstagram)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
