import {StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import store from './src/store/store';
import React, {useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetail from "@/screens/ProductDetail";

const Stack = createStackNavigator();

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
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="ProductDetail" component={ProductDetail}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}


