import React, {useEffect} from 'react';
import {ScrollView, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {fetchProducts} from "@/store/slices/productsSlice";
import {fetchCategories} from "@/store/slices/categoriesSlice";
import {globalStyles} from "@/styles/globalStyles";
import Banner from "@/components/Banner";
import ProductList from "@/components/product/ProductList";
import CategoryList from "@/components/category/CategoryList";

const Categories = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={globalStyles.container}>
                <CategoryList categories={categories.categories}/>
            </View>
        </ScrollView>
    );
};

export default Categories;