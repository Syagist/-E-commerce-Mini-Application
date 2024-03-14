import {StyleSheet} from "react-native";
import {COLOR_WHITE} from "@/constants/Colors";

export const categoryItem = StyleSheet.create({
    category_wrapper: {
        width: "100%",
        height: 130,
        position: "relative",
        marginBottom: 16
    },
    image: {
        width: "100%",
        height: "100%"
    },
    text: {
        position: "absolute",
        zIndex: 5,
        fontSize: 16,
        lineHeight: 20,
        color: COLOR_WHITE,
        textTransform: "uppercase",
        left: 20,
        bottom: 20
    }
})