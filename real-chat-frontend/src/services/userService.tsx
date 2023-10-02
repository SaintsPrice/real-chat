import api from "../http";
import { IUser } from "../types/userType";

export default class UserService {
    static async updateName(name: string, secondName: string) {
        return await api.patch<IUser>('api/user/me', {name, secondName})
    };

    static async updateAvatar(avatar: FormData) {
        return await api.patch<IUser>('api/user/me/avatar', {avatar})
    };
};