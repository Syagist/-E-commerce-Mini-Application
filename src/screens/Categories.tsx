import React, {useEffect} from 'react';
import {ScrollView, View} from "react-native";
import {RootState, useAppDispatch, useAppSelector} from "@/store/store";
import {fetchCategories} from "@/store/slices/categoriesSlice";
import {globalStyles} from "@/styles/globalStyles";
import CategoryList from "@/components/category/CategoryList";

const Categories = () => {
    const categories = useAppSelector((state: RootState) => state.categories);


    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={globalStyles.container}>
                <CategoryList categories={categories.categories}/>
            </View>
        </ScrollView>
    );
};

export default Categories;