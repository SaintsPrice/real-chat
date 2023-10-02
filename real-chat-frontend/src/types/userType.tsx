export interface IUser {
    id: string;
    email: string;
    name: string;
    secondName: string;
    avatar: string;
};

export interface IState {
    isAuth: boolean;
    isLoading: boolean;
    error: string | null;
    registerError: string | null;
    loginError: string | null;
    user: IUser | null
};

export const enum EnumUser {
    FETCH_AUTH = 'FETCH_AUTH',
    FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS',
    FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR',
    FETCH_AUTH_REGISTER_ERROR = 'FETCH_AUTH_REGISTER_ERROR',
    FETCH_AUTH_LOGIN_ERROR = 'FETCH_AUTH_LOGIN_ERROR',
    LOGOUT = 'LOGOUT'
};

export interface IAuthAction {
    type: EnumUser.FETCH_AUTH | EnumUser.LOGOUT;
};

export interface IAuthSuccessAction {
    type: EnumUser.FETCH_AUTH_SUCCESS;
    payload: IUser;
};

export interface IErrorAction {
    type: EnumUser.FETCH_AUTH_ERROR | EnumUser.FETCH_AUTH_REGISTER_ERROR | EnumUser.FETCH_AUTH_LOGIN_ERROR;  
    payload: string;
};

export type UserReducerAction = IAuthAction | IAuthSuccessAction | IErrorAction;