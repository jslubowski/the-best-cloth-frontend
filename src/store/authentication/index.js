import getters from './getters.js';
import mutations from './mutations';
import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            userId: null,
            email: null,
            token: null,
            firstName: null,
            lastName: null,
            isRegistering: false,
            isLoggedIn: false
        }
    },
    getters,
    mutations,
    actions
}