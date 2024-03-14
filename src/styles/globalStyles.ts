import {StyleSheet} from "react-native";
import {COLOR_BLACK, COLOR_GRAY, COLOR_WHITE} from "@/constants/Colors";
import {APP_LEFT_PADDING, APP_RIGHT_PADDING} from "@/constants/Sizes";

export const globalStyles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 24,
        paddingLeft: APP_LEFT_PADDING,
        paddingRight: APP_RIGHT_PADDING,
        height: '100%',
        backgroundColor: COLOR_WHITE,
    },
    app_navigation: {},
    app_navigation_label: {
        color: COLOR_GRAY,
        textAlign: "center",
        fontSize: 10,
        lineHeight: 12,
        fontWeight: "400",
        textTransform: 'capitalize'
    },
    scrollViewContainer: {},
    banner_image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        overflow: "hidden",
        objectFit: 'cover'
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: COLOR_WHITE
    },
    active_dot: {
        backgroundColor: COLOR_BLACK
    }
});