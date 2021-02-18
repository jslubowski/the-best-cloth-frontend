import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main-page'},
        { path: '/main-page', component: MainPage },


        { path: '/:notFound(.*)', component: NotFound}
    ]
});

export default router;