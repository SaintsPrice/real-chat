import axios from 'axios';
import { REACT_APP_API_URL } from '../utils/const';

const api = axios.create({
    baseURL: REACT_APP_API_URL,
    withCredentials: true
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config
});

api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if(error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`${REACT_APP_API_URL}/refresh`, {withCredentials: true})

            localStorage.setItem('token', response.data.accessToken)

            return api.request(originalRequest)
        }
        catch(e) {
            console.log('Не авторизован')
        }
    }
    throw error
});

export default api