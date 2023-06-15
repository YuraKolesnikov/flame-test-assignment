import { createApp } from 'vue'

import '@/app/scss/main.css'

import { App, router, store } from '@/app'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
