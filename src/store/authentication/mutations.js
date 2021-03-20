export default {
    SET_IS_REGISTERING(state, payload) {
        state.isRegistering = payload
    },
    SET_USER_DATA(state, payload) {
        console.log('payload in SET_USER_DATA: ' + payload);
        state.userId = payload.id;
        state.email = payload.email;
        state.token = payload.token;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
    }
}