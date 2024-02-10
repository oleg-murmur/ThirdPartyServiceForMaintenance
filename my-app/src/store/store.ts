import { combineReducers, configureStore } from "@reduxjs/toolkit";
import backetReducer from '../store/reducers/BacketSlice'

const rootReducer = combineReducers({
    backetReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']