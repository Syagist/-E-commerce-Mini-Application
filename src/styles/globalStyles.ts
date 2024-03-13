import {StyleSheet} from "react-native";
import {COLOR_WHITE} from "@/constants/Colors";
import {APP_LEFT_PADDING, APP_RIGHT_PADDING} from "@/constants/Sizes";

export const globalStyles = StyleSheet.create({
    container: {
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: APP_LEFT_PADDING,
        paddingRight: APP_RIGHT_PADDING,
        height: '100%',
        backgroundColor: COLOR_WHITE,
    },
    scrollViewContainer: {},
});