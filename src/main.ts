import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from './fontawesome'

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
