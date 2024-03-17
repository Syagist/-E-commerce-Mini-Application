import React, {createContext, useContext, useState} from 'react';
import {LoaderProps} from "@/interfaces/loader/LoaderProps";
import Loader from '@/components/Loader';

const LoaderContext = createContext<LoaderProps>({isLoading: false});

export const LoaderProvider = ({children}: any) => {
    const [isLoading, setIsLoading] = useState(false);

    const showLoader = () => setIsLoading(true);

    const hideLoader = () => setIsLoading(false);

    return (
        <LoaderContext.Provider value={{isLoading, showLoader, hideLoader}}>
            {children}
            {isLoading && (
               <Loader/>
            )}
        </LoaderContext.Provider>
    );
};

// Custom hook to access loader context
export const useLoader = () => useContext(LoaderContext);
