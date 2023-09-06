import api from "../http";

export default class AuthService {
    static async registration(email, name, secondName, password) {
        return api.post('/sign-up', {email, name, secondName, password})
    };

    static async login(email, password) {
        return api.post('/sign-in', {email, password})
    };

    static async checkAuth() {
        return api.get('/refresh')
    };

    static async logout() {
        return api.post('/logout')
    };
};