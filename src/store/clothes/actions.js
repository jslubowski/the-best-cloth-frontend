export default {
    async loadAllShoppingItems(context) {
        const urls = context.getters.GET_URLS;

        const axios = require('axios');
        const fetchUrl = urls.baseUrl + urls.shoppingItemsUrl + urls.allItemsUrl;
        const response = await axios.get(fetchUrl);
        
        if (response.status != 200) {
            throw new Error('Failed to get shopping items');
        }

        context.commit('SET_SHOPPING_ITEMS', response.data);
    }
};