import axios from 'axios';

export default {
    async loadAllShoppingItems(context, paginationParams) {
        const fetchUrl = process.env.VUE_APP_BASE_URL + 'shoppingItems/all';
        const response = await axios.get(fetchUrl, {
            params: {
                ...paginationParams
            }
        });

        if (response.status !== 200) {
            throw new Error('Failed to get shopping items');
        }

        const paginationHeader = JSON.parse(response.headers.pagination);

        context.commit('SET_SHOPPING_ITEMS', response.data);
        context.commit('SET_PAGINATION_DATA', paginationHeader);
        context.commit('SET_DATA_READY');
    }
};