import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useEffect, useState} from "react";
import {ScrollView, Text, View} from 'react-native';

import {useAppDispatch} from "@/store/store";
import {fetchProduct} from "@/store/slices/productsSlice";
import ProductList from "@/components/product/ProductList";
import {globalStyles} from "@/styles/globalStyles";

const WishList = () => {
    const dispatch = useAppDispatch();
    const [products, setProducts] = useState([]);

    const fetchData = async (favorites:[]) => {
        try {
            const fetchedProducts = [];
            for (const favorite of favorites) {
                await dispatch(fetchProduct({query: favorite})).then(res => res.payload)
                    .then(async (res) => {
                        await fetchedProducts.push(res);
                    });
            }
            setProducts(fetchedProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getFavoritesFromLocal = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem('userFavorites');
            const parsedFavorites = JSON.parse(storedFavorites) || [];
            return parsedFavorites
        } catch (error) {
            console.error('Error loading favorites:', error);
        }
    };
    useEffect(() => {

         getFavoritesFromLocal().then(data => {
             fetchData(data);
        });

    }, []);

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={globalStyles.container}>
                {products.length > 0 ? (
                    <ProductList products={products}/>
                ) : (
                    <Text>WishList is Empty</Text>
                )}
            </View>
        </ScrollView>
    );
};

export default WishList;
