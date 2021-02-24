import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import "@/plugins/mixins";
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.use(require('vue-moment'));
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
