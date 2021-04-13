import Vue from 'vue';

import MainPage from './pages/main-page/MainPage.vue';
import NotFound from './pages/NotFound.vue';
import ShoppingItem from './pages/item/ShoppingItem.vue';
import SignIn from './pages/sign-in/SignIn.vue';
import SignUp from './pages/sign-up/SignUp.vue';
import Router from 'vue-router';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/main-page'},
        { path: '/main-page', component: MainPage },
        { path: '/sign-up', component: SignUp },
        { path: '/sign-in', component: SignIn },
        { path: '/item/:itemId', component: ShoppingItem },
        { path: '/logout', redirect: '/main-page'},
        { path: '/:notFound(.*)', component: NotFound}
    ]
});

export default router;