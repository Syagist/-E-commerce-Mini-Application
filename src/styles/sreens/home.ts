import {StyleSheet} from "react-native";
import {COLOR_GRAY, COLOR_PRIMARY} from "@/constants/Colors";

export const home = StyleSheet.create({
    category_wrapper: {
        marginTop:24,
        borderBottomColor: COLOR_GRAY,
        borderBottomWidth: 1,
    },
    category_title_button: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
        marginBottom:12
    },
    category_title: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "500",
        textTransform: "uppercase"
    },
    category_button: {
        fontSize: 12,
        lineHeight: 14,
        fontWeight: "700",
        textTransform: "uppercase",
        textDecorationLine: "underline",
        color: COLOR_PRIMARY
    }
});