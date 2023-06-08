import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './services/graphql/apollo.services'

import './assets/main.css'

// const app = createApp(App)

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})

app.use(router)

app.mount('#app')
