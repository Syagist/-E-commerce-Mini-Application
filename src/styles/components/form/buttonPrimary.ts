import {StyleSheet} from "react-native";
import {COLOR_PRIMARY, COLOR_WHITE} from "@/constants/Colors";

export const buttonPrimary = StyleSheet.create({
    button: {
        backgroundColor: COLOR_PRIMARY,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 14,
        textAlign: "center",
        height: 51,
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },

    buttonText: {
        color: COLOR_WHITE,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "400",
        textTransform: 'uppercase'
    },
});