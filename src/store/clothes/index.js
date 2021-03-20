import getters from './getters.js';
import mutations from './mutations';
import actions from './actions.js';
import { urlConstants } from '../../constants.js';

export default {
    namespaced: true,
    state() {
        return {
            clothes: [],
            paginationData: null,
            urls: {
                baseUrl: urlConstants.BASE_URL,
                shoppingItemsUrl: urlConstants.SHOPPING_ITEMS,
                allItemsUrl: urlConstants.ALL
            },
            dataReady: false
        }
    },
    getters,
    mutations,
    actions
}