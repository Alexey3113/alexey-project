import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { IAuthUser, IRegUser } from '../types/userTypes'

export const registerUser = createAsyncThunk(
    'users/registerUser',
    async (userInfo: IRegUser, thunkAPI) => {
      const response = await axios.post<IRegUser>("http://localhost:4444/auth/sign-up", {
        ...userInfo
      })
      console.log("response =>", response)
      return response.data as IRegUser
    }
)
export const authUser = createAsyncThunk(
    'users/loginUser',
    async (userInfo: IAuthUser, thunkAPI) => {
      const response = await axios.post<IRegUser>("http://localhost:4444/auth/login", {
        ...userInfo
      })
      console.log("response =>", response)
      return response.data 
    }
)
export const getInfo = createAsyncThunk(
    'users/getInfoAboutUser',
    async (token: string, thunkAPI) => {
      const response = await axios.get<IRegUser>("http://localhost:4444/auth/me", {headers: {"Authorization": `Bearer ${token}`}})
      console.log("response =>", response)
      return response.data 
    }
)

