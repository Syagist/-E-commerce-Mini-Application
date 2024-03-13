import {Dimensions, StyleSheet} from "react-native";
import {APP_LEFT_PADDING, APP_RIGHT_PADDING} from "@/constants/Sizes";

const {width} = Dimensions.get('window');

const sliderSize = (width - APP_LEFT_PADDING - APP_RIGHT_PADDING) ;

export const productDetail = StyleSheet.create({
    slider_wrapper: {
        height: sliderSize,
    },

    slider_inner: {

    }
});