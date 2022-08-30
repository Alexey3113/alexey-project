import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'

const rootReducer = combineReducers({
    user: userSlice
})

const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store