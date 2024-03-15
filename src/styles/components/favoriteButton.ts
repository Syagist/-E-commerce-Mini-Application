import {StyleSheet} from "react-native";
import {COLOR_WHITE} from "@/constants/Colors";

export const favoriteButton = StyleSheet.create({
    button: {
        position: 'absolute',
        width:30,
        height:30,
        top:0,
        right:0,
        paddingTop:10,
        paddingRight:10,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    }
});