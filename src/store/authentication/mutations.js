export default {
    SET_IS_REGISTERING(state, payload) {
        state.isRegistering = payload
    },
    SET_USER_DATA(state, payload) {
        state.userId = payload.id;
        state.email = payload.email;
        state.token = payload.token;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
    },
    SET_IS_LOGGING_IN(state, payload) {
        state.isLoggingIn = payload;
    },
    SET_AUTHENTICATED(state) {
        state.authenticated = true;
    },
    SET_NOT_AUTHENTICATED(state) {
        state.authenticated = false;
    },
    LOGOUT(state) {
        state.userId = undefined;
        state.email = undefined;
        state.token = undefined;
        state.firstName = undefined;
        state.lastName = undefined;
        state.authenticated = false;
    }
}