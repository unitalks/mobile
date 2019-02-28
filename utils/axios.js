import axios from 'axios'
import {AsyncStorage} from 'react-native';


// Add a request interceptor
let axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'http://localhost:8000';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
    async (config) => {

        let token = await AsyncStorage.getItem('access_token');
        console.log('token', token)
        if (token) {
            config.headers.authorization = 'Token ' + JSON.parse(token);
        }

        return config;
    }
);
/*
axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        httpErrors(error);
        return Promise.reject(error.response)
    }
);
*/

export default axiosInstance;