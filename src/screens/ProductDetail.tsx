import React, {useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';
import {ProductProps} from "@/interfaces/product/Product";
import Swiper from "react-native-swiper";
import {useRoute} from "@react-navigation/native";
import {productDetail} from "@/styles/sreens/productDetail";
import {calculateDiscount} from "@/utils/helpers";
import {login} from "@/styles/sreens/login";
import SvgComponent from "@/components/icons/StarIcon";
import FavoriteIcon from "@/components/icons/FavoriteIcon";
import FavoriteFilledIcon from "@/components/icons/FavoriteFilledIcon";
import StarIcon from "@/components/icons/StarIcon";
import SearchIcon from "@/components/icons/SearchIcon";

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
                            <Image source={{uri: image}} style={globalStyles.banner_image}/>
                        </View>
                    ))}
                </Swiper>
                <Text style={productDetail.product_title}>{product.title}</Text>

                {product.discountPercentage && product.discountPercentage > 0 ?
                    <View style={productDetail.product_price_box}>
                        <Text style={productDetail.product_price_discount}>{calculateDiscount(product.price, product.discountPercentage)}$</Text>
                        <Text style={productDetail.product_price}>{product.price}$</Text>
                    </View>
                    :
                    <View style={productDetail.product_price_box}>
                        <Text style={productDetail.product_price}>{product.price}$</Text>
                    </View>
                }
                <View style={productDetail.product_rating_box}>
                    <Text style={productDetail.product_rating_label}>Rating</Text>
                    <StarIcon/>
                    <Text style={productDetail.product_rating_text}>{product.rating}</Text>
                </View>

                <View style={productDetail.product_id_box}>
                    <Text style={productDetail.product_id_label}>ID</Text>
                    <Text style={productDetail.product_id_text}>{product.id}</Text>
                </View>
                <View style={productDetail.product_brand_box}>
                    <Text style={productDetail.product_brand_label}>Brand</Text>
                    <Text style={productDetail.product_brand_text}>{product.brand}</Text>
                </View>

                <View style={productDetail.product_category_box}>
                    <Text style={productDetail.product_category_label}>Category</Text>
                    <Text style={productDetail.product_category_text}>{product.category}</Text>
                </View>

                <Text style={productDetail.product_description_text}>{product.description}</Text>
            </ScrollView>
        </View>

    );
};

export default ProductDetail;