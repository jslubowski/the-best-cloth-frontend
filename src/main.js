import Vue from 'vue'
import router from './router.js'
import store from './store/index.js';
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import BaseCard from './components/ui/BaseCard.vue';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('base-card', BaseCard);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')