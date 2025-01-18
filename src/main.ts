import { createSSRApp } from 'vue'
import { requestInterceptor, routerInterceptor } from './interceptors'
import App from './App.vue'
import store from './store'

export function createApp() {
  const app = createSSRApp(App)
  app.use(requestInterceptor)
  app.use(routerInterceptor)
  app.use(store)
  return {
    app
  }
}
