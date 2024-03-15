import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';
import ProductList from "@/components/product/ProductList";
import {RootState, useAppDispatch, useAppSelector} from "@/store/store";
import {useRoute} from "@react-navigation/native";

const Products = () => {
    const dispatch = useAppDispatch();
    const route = useRoute();
    const products = useAppSelector((state: RootState) => state.products.products);

    useEffect(() => {
    }, [products]);

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={globalStyles.container}>
                <ProductList products={products}/>
            </View>
        </ScrollView>
    );
};

export default Products;