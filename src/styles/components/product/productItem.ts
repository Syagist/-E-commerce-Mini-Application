import {Dimensions, StyleSheet} from "react-native";
import {APP_LEFT_PADDING, APP_RIGHT_PADDING} from "@/constants/Sizes";

const {width, height} = Dimensions.get('window');

const offset = 15;
const cardSize = (width - APP_LEFT_PADDING - APP_RIGHT_PADDING - offset) / 2;

export const productItem = StyleSheet.create({
    product_wrapper: {
        marginBottom: 10,
        width: cardSize,
    },
    product_image_wrapper: {
        marginBottom: 10,
        height: cardSize,
        width: cardSize,
        borderRadius: 10,
        overflow: "hidden"
    },
    product_image: {
        height: "100%",
        width: "100%"
    },
    product_info_wrapper: {
        marginBottom: 10,
    },
    product_title: {
        fontSize: 12,
        lineHeight: 16,
        textTransform: "uppercase",
        fontWeight: "400"
    },
    product_price_rating_wrapper: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    product_rating: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400"
    },
    product_price: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "600"
    },
});