import axios from 'axios';

export default {
    async loadAllShoppingItems(context, paginationParams) {
        const fetchUrl = process.env.VUE_APP_BASE_URL + 'shoppingItems/all';
        const response = await axios.get(fetchUrl, {
            params: {
                ...paginationParams
            }
        });

        const paginationHeader = JSON.parse(response.headers.pagination);

        context.commit('SET_SHOPPING_ITEMS', response.data);
        context.commit('SET_PAGINATION_DATA', paginationHeader);
        context.commit('SET_DATA_READY');
    },
    async getSingleShoppingItem(context, itemId) {
        const response = await axios.get(
            `${process.env.VUE_APP_BASE_URL}shoppingItems/${itemId}`
        );

        return response.data;
    }
};