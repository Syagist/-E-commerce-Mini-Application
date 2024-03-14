import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productReducer from './slices/productsSlice';
import categoriesReducer from './slices/categoriesSlice';
import {useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        categories: categoriesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;
