import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import "@/plugins/mixins";
import '@/assets/css/tailwind.css'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: {
    id: "G-4Z1TV69SHL",
    pageTrackerTemplate(to) {
      return {
        page_title: to.name,
        page_path: to.path
      }
    }
  }
}, router);


import titleMixin from './mixins/title.js'
Vue.mixin(titleMixin)

Vue.config.productionTip = false
Vue.use(require('vue-moment'));
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
