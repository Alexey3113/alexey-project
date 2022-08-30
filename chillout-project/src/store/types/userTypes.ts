
export interface IUser {
    email: string,
    nickName: string,
    age: number,
}

export interface IUserReducer {
    isAuth: boolean,
    isLoading: boolean,
    token: string,
    userInfo: IUser,
    errors: string[]
}

export interface IRegUser {
    email: string,
    nickName: string,
    password: string,
    age: string
}
export interface IAuthUser {
    email: string,
    password: string
}