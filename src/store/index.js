import Vue from 'vue';
import Vuex from 'vuex';

import clothesStore from './clothes/index.js';
import authenticationStore from './authentication/index.js';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        clothes: clothesStore,
        auth: authenticationStore
    }
});

export default store;