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
    SET_AUTHORIZED(state) {
        state.authorized = true;
    },
    SET_UNAUTHORIZED(state) {
        state.authorized = false;
    },
    LOGOUT(state) {
        state.userId = undefined;
        state.email = undefined;
        state.token = undefined;
        state.firstName = undefined;
        state.lastName = undefined;
        state.authorized = false;
    }
}