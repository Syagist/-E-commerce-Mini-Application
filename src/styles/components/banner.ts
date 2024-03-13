import {StyleSheet} from "react-native";
import {COLOR_BLACK, COLOR_WHITE} from "@/constants/Colors";

export const banner = StyleSheet.create({
    slider_wrapper: {
        height: 235,
    },
    slider_inner: {
        marginBottom:15
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        overflow: "hidden",
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