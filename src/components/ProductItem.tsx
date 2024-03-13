import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {productItem} from "@/styles/components/productItem";
import {ProductProps} from "@/interfaces/product/Product";
import FavoriteButton from "@/components/form/FavoriteButton";
import {useNavigation} from '@react-navigation/native';


const ProductItem = ({product}: ProductProps) => {
    const navigation = useNavigation();

    const navigateToDetail = () => {
        navigation.navigate('ProductDetail', {product: product});
    }

    return (
        <TouchableOpacity style={productItem.product_wrapper} onPress={navigateToDetail}>
            <View style={productItem.product_image_wrapper}>
                <Image src={product.images[0]} style={productItem.product_image}/>
                <FavoriteButton isFavorite={true} onPress={() => {
                }}/>
            </View>
            <View style={productItem.product_info_wrapper}>
                <Text style={productItem.product_title}>{product.title}</Text>
                <View style={productItem.product_price_rating_wrapper}>
                    <Text style={productItem.product_rating}>{product.rating}</Text>
                    <Text style={productItem.product_price}>{product.price}$</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default ProductItem;
