import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';
import ProductList from "@/components/product/ProductList";
import {fetchProductsByCategory} from "@/store/slices/productsSlice";
import {RootState} from "@/store/store";
import {useDispatch, useSelector} from "react-redux";
import {useRoute} from "@react-navigation/native";
import {CategoryItemProps} from "@/components/category/CategoryItem";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);
    const route = useRoute();
    const {category} = route.params as CategoryItemProps;

    useEffect(() => {
        dispatch(fetchProductsByCategory(category));
    }, [dispatch]);

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={globalStyles.container}>
                <ProductList products={products}/>
            </View>
        </ScrollView>


    );
};

export default Products;