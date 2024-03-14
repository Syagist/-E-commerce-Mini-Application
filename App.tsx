import {Provider, useDispatch} from "react-redux";
import store from './src/store/store';
import React, {useEffect} from 'react';
import AppNavigator from "@/navigation/AppNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {loadUserData} from "@/store/slices/authSlice";


export default function App() {




    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
}


