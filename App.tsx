import {Provider} from "react-redux";
import store from './src/store/store';
import React from 'react';
import AppNavigator from "@/navigation/AppNavigator";

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
}


