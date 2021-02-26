import getters from './getters.js';
import mutations from './mutations';
import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            clothes: [
                {
                    id: 1,
                    name: 'trousers',
                    price: 10000,
                    photoUrl: 'https://res.cloudinary.com/dnwnyk13h/image/upload/v1614359556/trousers_oojqs6.jpg'
                },
                {
                    id: 2,
                    name: 'shirt',
                    price: 7000,
                    photoUrl: 'https://res.cloudinary.com/dnwnyk13h/image/upload/v1614359556/trousers_oojqs6.jpg'
                },
                {
                    id: 3,
                    name: 'sweater',
                    price: 7000,
                    photoUrl: 'https://res.cloudinary.com/dnwnyk13h/image/upload/v1614359556/trousers_oojqs6.jpg'
                },
                // {
                //     id: 4,
                //     name: 'cap',
                //     price: 2000,
                //     photoUrl: 'https://res.cloudinary.com/dnwnyk13h/image/upload/v1614359556/trousers_oojqs6.jpg'
                // }
            ]
        }
    },
    getters,
    mutations,
    actions
}