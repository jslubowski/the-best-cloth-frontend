import axios from 'axios';

export default {
    async register(context, registerInfo) {
        context.commit('SET_IS_REGISTERING', true);
        const registerUrl = process.env.VUE_APP_BASE_URL + 'users/register';

        await axios.post(registerUrl, {
            ...registerInfo
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Failed to register new user!');
                }

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
    async logout(context) {
        context.commit('SET_USER_DATA', {
            userId: undefined,
            email: undefined,
            token: undefined,
            firstName: undefined,
            lastName: undefined,
        });
        context.commit('SET_NOT_AUTHENTICATED');
    }
};