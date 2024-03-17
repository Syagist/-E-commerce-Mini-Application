import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { categoryItem } from "@/styles/components/category/categoryItem";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/interfaces/RootStackParamList";

const categoryImages = {
    "automotive": require('../../assets/images/categories/automotive.jpg'),
    "fragrances": require('../../assets/images/categories/fragrances.jpg'),
    "furniture": require('../../assets/images/categories/furniture.jpg'),
    "groceries": require('../../assets/images/categories/groceries.jpg'),
    "home-decoration": require('../../assets/images/categories/home-decoration.jpg'),
    "laptops": require('../../assets/images/categories/laptops.jpg'),
    "lighting": require('../../assets/images/categories/lighting.jpg'),
    "mens-shirts": require('../../assets/images/categories/mens-shirts.jpg'),
    "mens-shoes": require('../../assets/images/categories/mens-shoes.jpg'),
    "mens-watches": require('../../assets/images/categories/mens-watches.jpg'),
    "motorcycle": require('../../assets/images/categories/motorcycle.jpg'),
    "skincare": require('../../assets/images/categories/skincare.jpg'),
    "smartphones": require('../../assets/images/categories/smartphones.jpg'),
    "sunglasses": require('../../assets/images/categories/sunglasses.jpg'),
    "tops": require('../../assets/images/categories/tops.jpg'),
    "womens-bags": require('../../assets/images/categories/womens-bags.jpg'),
    "womens-watches": require('../../assets/images/categories/womens-watches.jpg'),
    "womens-dresses": require('../../assets/images/categories/womens-dresses.jpg'),
    "womens-shoes": require('../../assets/images/categories/womens-shoes.jpg'),
    "womens-jewellery": require('../../assets/images/categories/womens-jewellery.jpg'),
};

export interface CategoryItemProps {
    category: string;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const openProductsPage = () => {
        navigation.navigate('Products', { category: category });
    }

    const imageSource = categoryImages[category] || null;

    return (
        <TouchableOpacity style={categoryItem.category_wrapper} onPress={openProductsPage}>
            <Text style={categoryItem.text}>{category}</Text>
            {imageSource && <Image style={categoryItem.image} source={imageSource} />}
        </TouchableOpacity>
    );
};

export default CategoryItem;
