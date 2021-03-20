import axios from 'axios';

export default {
    async register(context, registerInfo) {
        context.commit('SET_IS_REGISTERING', true);
        const fetchUrl = process.env.VUE_APP_BASE_URL + 'users/register';

        await axios.post(fetchUrl, {
            ...registerInfo
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Failed to register new user!');
                }

                context.commit('SET_USER_DATA', response.data);
            })
            .finally(() => context.commit('SET_IS_REGISTERING', false));
    }
};