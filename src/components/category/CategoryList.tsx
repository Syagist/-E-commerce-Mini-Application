import React from 'react';
import { View} from 'react-native';
import CategoryItem from "@/components/category/CategoryItem";
import {categoryList} from "@/styles/components/category/categoryList";

interface CategoriesProps {
    categories:string[];
}

const CategoryList = ({categories}: CategoriesProps) => {

    return (
        <View style={categoryList.category_list}>
            {categories.map((category, index) => (
               <CategoryItem key={index} category={category}/>
            ))}
        </View>
    );
};


export default CategoryList;
