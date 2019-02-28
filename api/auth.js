import axios from '../utils/axios';

export default {
    login(data) {
        return axios.post('oauth/token', data)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },

    register(data) {
        return axios.post('api/register', data)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },
    user() {
        return axios.get('api/user')
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },

}