import {Dimensions, StyleSheet} from "react-native";
import {APP_LEFT_PADDING, APP_RIGHT_PADDING} from "@/constants/Sizes";
import {COLOR_DARK_GRAY, COLOR_LIGHT_BLACK, COLOR_MEDIUM_GRAY, COLOR_RED} from "@/constants/Colors";

const {width} = Dimensions.get('window');

const sliderSize = (width - APP_LEFT_PADDING - APP_RIGHT_PADDING);

export const productDetail = StyleSheet.create({
    slider_wrapper: {
        height: sliderSize,
    },

    slider_inner: {},
    product_title: {
        fontSize: 16,
        lineHeight: 20,
        marginBottom: 16,
        fontWeight: "500",
        marginTop: 24,
        textTransform: "uppercase"
    },
    product_price_box: {
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 16
    },
    product_price_discount: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "300",
        textTransform: "capitalize",
        textDecorationLine: 'line-through',
        color: COLOR_RED,
        marginRight: 10
    },
    product_price: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "500",
        textTransform: "capitalize"
    },
    product_rating_box: {
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 16
    },
    product_rating_label: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "400",
        marginRight: 10
    },
    product_rating_text: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
    },
    product_id_box: {
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 16
    },
    product_id_label: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "400",
        marginRight: 10
    },
    product_id_text: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "400",
        color: COLOR_DARK_GRAY
    },
    product_brand_box: {
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 16
    },
    product_brand_label: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "400",
        marginRight: 10
    },
    product_brand_text: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "300",
        color: COLOR_LIGHT_BLACK
    },
    product_category_box: {
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 16
    },
    product_category_label: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "400",
        marginRight: 10
    },
    product_category_text: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "300",
        color: COLOR_LIGHT_BLACK
    },
    product_description_text: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "300",
        color: COLOR_MEDIUM_GRAY,
        textAlign: "justify"
    }
});