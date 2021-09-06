// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import App from './App.vue'
import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import '@varlet/ui/es/style.js'

createApp(App).use(Varlet).mount('#app')