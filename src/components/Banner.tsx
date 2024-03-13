import React from 'react';
import { View,  Image} from "react-native";
import Swiper from 'react-native-swiper';
import {banner} from "@/styles/components/banner";
import {globalStyles} from "@/styles/globalStyles";

const Banner = () => {
    const images = [
        require('@/assets/images/banner/banner1.jpg'),
        require('@/assets/images/banner/banner2.jpg'),
        require('@/assets/images/banner/banner3.jpg'),
    ];

    return (
        <Swiper style={banner.slider_wrapper}
                dotStyle={globalStyles.dot}
                activeDotStyle={globalStyles.active_dot}
                autoplay={true}>
            {images.map((image, index) => (
                <View style={banner.slider_inner} key={index}>
                    <Image source={image} style={globalStyles.banner_image}/>
                </View>
            ))}
        </Swiper>
    );
}

export default Banner;