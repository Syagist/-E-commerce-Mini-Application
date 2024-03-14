import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';
import Banner from '@/components/Banner';
import ProductList from "@/components/ProductList";
import {fetchProducts} from "@/store/slices/productsSlice";
import store, {RootState} from "@/store/store";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);

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