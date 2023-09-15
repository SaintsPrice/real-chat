import api from "../http";

export default class UserService {
    static async updateName(name, secondName) {
        return await api.patch('api/user/me', {name, secondName})
    };

    static async updateAvatar(avatar) {
        return await api.patch('api/user/me/avatar', {avatar})
    };
};