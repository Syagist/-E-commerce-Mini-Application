import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';
import ProductList from "@/components/product/ProductList";
import {fetchProductsByCategory} from "@/store/slices/productsSlice";
import {RootState, useAppDispatch, useAppSelector} from "@/store/store";
import {useRoute} from "@react-navigation/native";
import {CategoryItemProps} from "@/components/category/CategoryItem";
import {useLoader} from "@/context/LoaderProvider";

const Products = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: RootState) => state.products.products);
    const route = useRoute();
    const {category} = route.params as CategoryItemProps;
    const {showLoader, hideLoader} = useLoader();


    useEffect(() => {
        showLoader()
        dispatch(fetchProductsByCategory({ category,limit:1000 })).then(() => hideLoader());
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