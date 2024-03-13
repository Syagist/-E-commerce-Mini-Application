import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';
import {ProductProps} from "@/interfaces/product/Product";
import Swiper from "react-native-swiper";
import {useRoute} from "@react-navigation/native";
import {productDetail} from "@/styles/sreens/productDetail";

const ProductDetail = () => {
    const route = useRoute();

    const {product} = route.params as ProductProps;

    return (
        <View style={globalStyles.container}>
            <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
                <Swiper style={productDetail.slider_wrapper}
                        dotStyle={globalStyles.dot}
                        activeDotStyle={globalStyles.active_dot}
                        autoplay={true}>

                    {product.images.map((image, index) => (
                        <View style={productDetail.slider_inner} key={index}>
                            <Image source={{ uri: image }} style={globalStyles.banner_image}/>
                        </View>
                    ))}
                </Swiper>
                <Text>{product.title}</Text>
                <Text>{product.price}</Text>
                <Text>{product.id}</Text>
                <Text>{product.brand}</Text>
                <Text>{product.category}</Text>
                <Text>{product.description}</Text>
                <Text>{product.discountPercentage}</Text>

            </ScrollView>
        </View>

    );
};

export default ProductDetail;