import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import "@/plugins/mixins";
import '@/assets/css/tailwind.css'


import titleMixin from './mixins/title.js'

Vue.mixin(titleMixin)

Vue.config.productionTip = false
Vue.use(require('vue-moment'));

import dayjs from "dayjs"

Vue.filter('dayjs', function (value, format) {
    if (!value) return ''
    value = value.toString()
    return dayjs(value).format(format)
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
