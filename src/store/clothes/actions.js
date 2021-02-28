export default {
    async loadAllShoppingItems(context, paginationParams) {
        const urls = context.getters.GET_URLS;
        const axios = require('axios');
        const fetchUrl = urls.baseUrl + urls.shoppingItemsUrl + urls.allItemsUrl;
        const response = await axios.get(fetchUrl, {
            params: {
                ...paginationParams
            }
        });

        if (response.status != 200) {
            throw new Error('Failed to get shopping items');
        }

        const paginationHeader = JSON.parse(response.headers.pagination);

        context.commit('SET_SHOPPING_ITEMS', response.data);
        context.commit('SET_PAGINATION_DATA', paginationHeader);
        context.commit('SET_DATA_READY');
    }
};