export default {
    SET_SHOPPING_ITEMS(state, payload) {
        state.clothes = payload;
    },
    SET_PAGINATION_DATA(state, payload) {
        state.paginationData = payload;
    },
    SET_DATA_READY(state) {
        state.dataReady = true; 
    }
};