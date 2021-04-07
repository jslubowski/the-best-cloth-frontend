export default {
    getUserInfo(state) {
        return {
            userId: state.userId,
            email: state.email,
            firstName: state.firstName,
            lastName: state.lastName
        };
    },
    getToken(state) {
        return state.token;
    },
    getIsRegistering(state) {
        return state.isRegistering;
    },
    isLoggingIn(state) {
        return state.isLoggingIn;
    },
    isAuthenticated(state) {
        return state.authenticated;
    }
};