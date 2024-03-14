import {Provider} from "react-redux";
import store from './src/store/store';
import React, {useEffect} from 'react';
import AppNavigator from "@/navigation/AppNavigator";


export default function App() {

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async () => {
        try {
            // const token = await AsyncStorage.getItem('token');
            // if (token !== null) {
            // } else {
            // }
        } catch (error) {
            console.error('Error checking login status:', error);
        }
    };


    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
}


