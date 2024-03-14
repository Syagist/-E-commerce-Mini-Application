import {StyleSheet} from "react-native";
import {COLOR_GRAY, COLOR_LIGHT_BLACK} from "@/constants/Colors";

export const profile = StyleSheet.create({
    profile_wrapper: {
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 24,
        paddingBottom: 16

    },
    profile_info_wrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomColor: COLOR_GRAY,
        borderBottomWidth: 1,
        paddingBottom: 18,
    },
    profile_image: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 50
    },
    profile_info: {},
    profile_name: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "400",
    },
    profile_gender: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "300",
        marginTop: 10,
        color: COLOR_GRAY,
        textTransform: 'capitalize'
    },
    logout_btn: {
        borderTopColor: COLOR_GRAY,
        borderBottomColor: COLOR_GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingTop: 18,
        paddingBottom: 18,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btn_icon: {
        width: 24,
        height: 24,
        marginTop: 5,
        marginRight: 15
    },
    btn_text: {
        flex: 1,
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "300",
        color: COLOR_LIGHT_BLACK
    },
    btn_arrow: {
        transform: [{rotate: '180deg'}], // Rotate the view by 45 degrees
        width: 20,
        height: 20
    }
});