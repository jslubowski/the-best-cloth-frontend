import { createStore } from 'vuex';

import clothesStore from './clothes/index.js';
import authenticationStore from './authentication/index.js';

const store = createStore({
    modules: {
        clothes: clothesStore,
        auth: authenticationStore
    }
});

export default store;