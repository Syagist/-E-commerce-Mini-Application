import {Provider} from "react-redux";
import store from './src/store/store';
import React from 'react';
import AppNavigator from "@/navigation/AppNavigator";
import {LoaderProvider} from "@/context/LoaderProvider";

export default function App() {
    return (
        <LoaderProvider>
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        </LoaderProvider>

    );
}


