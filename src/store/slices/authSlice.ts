import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from "@/interfaces/user/AuthState";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_API} from "@/constants/AppConstants";

const initialState: AuthState = {
    isAuthenticated: false,
    userData: null
};

export const loginUser = (userName: string, password: string) => async (dispatch) => {
    try {
        fetch(AUTH_API, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
            })
        }).then(res => res.json())
            .then(async (res) => {
                const userData = JSON.stringify(res);
                await AsyncStorage.setItem('userData', userData);
                dispatch(login(userData));
                dispatch(loadUserData()); // Load user data immediately after login
            });


    } catch (error) {
        console.error('Login error:', error);
    }
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.userData = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.userData = null;
        },
    },
});

export const loadUserData = () => async (dispatch) => {
    const userData = await AsyncStorage.getItem('userData');
    dispatch(login(JSON.parse(userData)));
};

export const logoutUser = () => async (dispatch) => {
    try {
        await AsyncStorage.removeItem('userData');
        await AsyncStorage.removeItem('userFavorites');
        dispatch(logout());
    } catch (error) {
        console.error('Logout error:', error);
    }
};

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
