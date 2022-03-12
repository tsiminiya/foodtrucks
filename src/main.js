import { createApp } from 'vue'
import gapi from 'vue3-google-oauth2'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router).mount('#app')
app.use(
    gapi,
    {
        clientId: "18495362772-vob6o2nbnbd33cgrqat9gfmm8nl00hn6.apps.googleusercontent.com",
        scope: 'email',
        prompt: 'consent',
        fetch_basic_profile: false,
        ux_mode: 'redirect',
    }
)
