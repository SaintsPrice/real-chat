import api from "../http";
import { IUser } from "../types/userType";

interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser
};

export default class AuthService {
    static async registration(email: string, name: string, secondName: string, password: string) {
        return api.post<IAuthResponse>('/sign-up', {email, name, secondName, password})
    };

    static async login(email: string, password: string) {
        return api.post<IAuthResponse>('/sign-in', {email, password})
    };

    static async checkAuth() {
        return api.get<IAuthResponse>('/refresh')
    };

    static async logout() {
        return api.post('/logout')
    };
};