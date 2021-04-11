import axios from 'axios';

export default {
    async register(context, registerInfo) {
        context.commit('SET_IS_REGISTERING', true);
        const registerUrl = process.env.VUE_APP_BASE_URL + 'users/register';

        await axios.post(registerUrl, {
            ...registerInfo
        })
            .then((response) => {
                context.commit('SET_USER_DATA', response.data);
                context.commit('SET_IS_LOGGING_IN', true);
            })
            .finally(() => context.commit('SET_IS_REGISTERING', false));
    },
    async login(context, loginData) {
        context.commit('SET_IS_LOGGING_IN', true);
        const loginUrl = process.env.VUE_APP_BASE_URL + 'users/login';

        await axios.post(loginUrl, {}, {
            auth: {
                username: loginData.email,
                password: loginData.password
            }
        })
            .then((response) => {
                context.commit('SET_USER_DATA', response.data);
                context.commit('SET_AUTHENTICATED');
            })
            .finally(() => {
                context.commit('SET_IS_LOGGING_IN', false);
            });
    },
    logout(context) {
        context.commit('LOGOUT');
    },
    tryLogin(context) {
        const userData = {
            userId: localStorage.getItem('userId'),
            email: localStorage.getItem('email'),
            token: localStorage.getItem('token'),
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
        };

        if(userData.token) {
            context.commit('SET_USER_DATA', userData);
            context.commit('SET_AUTHENTICATED');
        } else context.commit('SET_NOT_AUTHENTICATED');
    }
};