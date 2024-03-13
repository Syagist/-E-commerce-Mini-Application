import React from 'react';
import {ScrollView, View} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';
import Banner from '@/components/Banner';
import {Product} from "@/interfaces/product/Product";
import ProductList from "@/components/ProductList";

const ProductDetail = (product : Product) => {

    return (
        <View style={globalStyles.container}>
            <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            </ScrollView>
        </View>

    );
};

export default ProductDetail;