import { IUserReducer } from "../types/userTypes";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authUser, getInfo, registerUser } from "../thunk/userThunks";

const initialState: IUserReducer = {
    isAuth: false,
    isLoading: true,
    token: "",
    userInfo: {
        age: 0,
        email: "",
        nickName: ""
    },
    errors: []
}


export const userReducer = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        changeLoading: (state: IUserReducer, action: any) => {
            console.log("зашли, islOaidng", action.payload.isLoading)
            state.isLoading = action.payload.isLoading
        }

    },
    extraReducers: {
        [registerUser.fulfilled.type]: (state: IUserReducer, action: any) => {
            state.userInfo.email = action.payload.email;
            state.userInfo.nickName = action.payload.nickName;
            state.isAuth = true;
            state.userInfo.age = action.payload.age;
            state.isLoading = false
            console.log("ok", action)
            state.errors = []  
        },
        [registerUser.pending.type]: (state: IUserReducer, action: PayloadAction) => {
            console.log("Loading...")
            state.isLoading = true
        },
        [registerUser.rejected.type]: (state: IUserReducer, action: any) => {
            state.isLoading = false
            state.errors = ["Ошибка регистрации!"]
        },
        [authUser.fulfilled.type]: (state: IUserReducer, action: any) => {
            state.userInfo.email = action.payload.email;
            state.isAuth = true;
            document.cookie = `tokenChillOut=${action.payload.token}; max-age=3600`;
            state.errors = []  
        },
        [authUser.rejected.type]: (state: IUserReducer, action: any) => {
            state.errors = ["Ошибка авторизации!"]            
        },
        [getInfo.fulfilled.type]: (state: IUserReducer, action: any) => {
            state.userInfo.email = action.payload.email;
            state.isAuth = true;        
            state.isLoading = false
            state.errors = []  
        },
        [getInfo.rejected.type]: (state: IUserReducer, action: any) => {
            state.isLoading = false
            state.errors = []
        }

    }
})

export const actionsUser = userReducer.actions

export default userReducer.reducer