import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';
import Banner from '@/components/Banner';
import ProductList from "@/components/product/ProductList";
import {fetchProducts} from "@/store/slices/productsSlice";
import {RootState, useAppDispatch, useAppSelector} from "@/store/store";


const Home = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: RootState) => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={globalStyles.container}>
                <Banner/>
                <ProductList products={products}/>
            </View>
        </ScrollView>


    );
};

export default Home;