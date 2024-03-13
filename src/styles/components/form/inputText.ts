import {StyleSheet} from "react-native";
import {COLOR_DANGER, COLOR_GRAY, COLOR_WHITE} from "@/constants/Colors";

export const inputText = StyleSheet.create({
    wrapper: {
        marginBottom: 24
    },
    label: {
        fontSize: 16,
        lineHeight: 16,
        marginBottom: 10,
        fontWeight: "400",
        textTransform: "capitalize"
    },

    input: {
        backgroundColor: COLOR_WHITE,
        padding: 16,
        borderRadius: 10,
        borderColor: COLOR_GRAY,
        borderWidth: 1
    },

    required_mark: {
        color: COLOR_DANGER,
        fontSize: 16,
        lineHeight: 16,
    }

});