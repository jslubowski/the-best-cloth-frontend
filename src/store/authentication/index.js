import getters from './getters.js';
import mutations from './mutations';
import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            userId: undefined,
            email: undefined,
            token: undefined,
            firstName: undefined,
            lastName: undefined,
            isRegistering: false,
            isLoggingIn: false,
            authorized: false,
        }
    },
    getters,
    mutations,
    actions
}