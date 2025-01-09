import { createSSRApp } from 'vue'
import { requestInterceptor } from './interceptors'
import App from './App.vue'
import store from './store'

export function createApp() {
  const app = createSSRApp(App)
  app.use(requestInterceptor)
  app.use(store)
  return {
    app
  }
}
