import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/main-page/MainPage.vue';
import NotFound from './pages/NotFound.vue';
import SignIn from './pages/sign-in/SignIn.vue';
import SignUp from './pages/sign-up/SignUp.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main-page'},
        { path: '/main-page', component: MainPage },
        { path: '/sign-up', component: SignUp},
        { path: '/sign-in', component: SignIn},
        { path: '/:notFound(.*)', component: NotFound}
    ]
});

export default router;