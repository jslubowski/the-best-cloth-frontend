import { createApp } from 'vue'
import router from './router.js'
import store from './store/index.js';
import App from './App.vue'
import PrimeVue from 'primevue/config';
import BaseCard from './components/ui/BaseCard.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);

app.component('base-card', BaseCard);

app.mount('#app');