import React from 'react';
import {Dimensions, View, Text, Image} from "react-native";
import Swiper from 'react-native-swiper';
import {banner} from "../styles/components/banner";

const Banner = () => {
    const images = [
        require('../assets/images/banner/banner1.jpg'),
        require('../assets/images/banner/banner2.jpg'),
        require('../assets/images/banner/banner3.jpg'),
    ];

    return (
        <Swiper style={banner.slider_wrapper}
                dotStyle={banner.dot}
                activeDotStyle={banner.active_dot}
                autoplay={true}>
            {images.map((image, index) => (
                <View style={banner.slider_inner} key={index}>
                    <Image source={image} style={banner.image}/>
                </View>
            ))}
        </Swiper>
    );
}

export default Banner;