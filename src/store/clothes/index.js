import getters from './getters.js';
import mutations from './mutations';
import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            clothes: [],
            urls: {
                baseUrl: process.env.VUE_APP_BASE_URL,
                shoppingItemsUrl: process.env.VUE_APP_SHOPPING_ITEMS,
                allItemsUrl: process.env.VUE_APP_ALL_SHOPPING_ITEMS
            }
        }
    },
    getters,
    mutations,
    actions
}