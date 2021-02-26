import { createStore } from 'vuex';

import clothesStore from './clothes/index.js';

const store = createStore({
    modules: {
        clothes: clothesStore
    }
});

export default store;