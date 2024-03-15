import {StyleSheet} from "react-native";
import {COLOR_GRAY_LIGHT} from "@/constants/Colors";

export const appNavigator = StyleSheet.create({
    nav_with_back_and_search: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingBottom: 4,
        paddingTop: 4,
        width: '100%'
    },
    logo: {
        width: 43,
        height: 26,
    },
    back_button: {
        width: 24,
        height: 24,
    },
    content: {
        flex: 1,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "500",
        textAlign: "center",
        textTransform: "uppercase"
    },
    search_button: {
        width: 24,
        height: 24,
    },
    search_input: {
        backgroundColor: COLOR_GRAY_LIGHT,
        borderRadius: 5,
        marginLeft: 8,
        paddingLeft: 16,
        paddingRight: 40,
        height: 40
    },
    search_input_wrapper: {
        position: "relative",
        flex: 1,
    },
    search_icon_wrapper: {
        position: "absolute",
        zIndex: 5,
        width: 24,
        height: 24,
        right: 10,
        top: 10
    }
});