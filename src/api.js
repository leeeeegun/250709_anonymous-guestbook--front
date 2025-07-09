import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8888/api/guestbook',
});

export const postGuestbook = (data) => api.post('/', data);
export const getGuestbook = () => api.get('/');

export default api;