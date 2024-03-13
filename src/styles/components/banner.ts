import {StyleSheet} from "react-native";
import {COLOR_BLACK, COLOR_WHITE} from "../../constants/Colors";

export const banner = StyleSheet.create({
    slider_wrapper: {
        height: 215,
        marginBottom: 10,
    },
    slider_inner: {
        borderRadius: 10,
        height: 215,
        position: "relative",
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
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