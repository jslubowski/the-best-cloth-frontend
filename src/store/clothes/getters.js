export default {
    GET_CLOTHES(state) {
        return state.clothes;
    },
    GET_PAGINATION_DATA(state) {
        return state.paginationData;
    },
    IS_DATA_READY(state) {
        return state.dataReady;
    }
};