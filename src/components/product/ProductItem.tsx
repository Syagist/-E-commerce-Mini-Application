import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {productItem} from "@/styles/components/product/productItem";
import {ProductProps} from "@/interfaces/product/Product";
import FavoriteButton from "@/components/form/FavoriteButton";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductItem = ({product}: ProductProps) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [isFavorite, setIsFavorite] = useState(false);

    const navigateToDetail = () => {
        navigation.navigate('ProductDetail', {product: product});
    }

    useEffect(() => {
        const runFavoriteCheck = async () => {
            setIsFavorite(await checkFavorite())
        }
        runFavoriteCheck()
    }, []);

    const toggleFavorites = async () => {
        try {
            let favorites = [];

            const storedFavorites = await AsyncStorage.getItem('userFavorites');
            if (storedFavorites) {
                favorites = JSON.parse(storedFavorites);
            }

            if (product) {
                if (isFavorite) {
                    favorites = favorites.filter(favorite => favorite !== product.id);
                    setIsFavorite(false)
                } else {
                    favorites.push(product.id);
                    setIsFavorite(true)
                }
                await AsyncStorage.setItem('userFavorites', JSON.stringify(favorites));
            }

        } catch (error) {
            console.error('Error toggling favorites:', error);
        }
    };
    const checkFavorite = async () => {
        try {
            let favorites = [];
            let isFavorite = false;
            const storedFavorites = await AsyncStorage.getItem('userFavorites');
            favorites = JSON.parse(storedFavorites);

            if (!storedFavorites || favorites.length === 0) {
                return isFavorite
            }

            favorites.forEach((favorite) => {
                if (product.id === favorite) {
                    isFavorite = true;
                }
            })

            return isFavorite
        } catch (error) {
            console.error('Error loadig favorites:', error);
        }
    };
    return (
        <TouchableOpacity style={productItem.product_wrapper} onPress={navigateToDetail}>
            <View style={productItem.product_image_wrapper}>

                <Image src={product.images[0]} style={productItem.product_image}/>
                <FavoriteButton isFavorite={isFavorite} onPress={toggleFavorites}/>
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
